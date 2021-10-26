import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';
import { RepositoryService } from 'src/app/Services/repository.service';
import { Usuario } from 'src/app/models/usuario';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  Form : FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required, Validators.minLength(6)]),
    resenha : new FormControl('',  [Validators.required, this.wrongPasswordRetype2()])
  });

  @Output() onNewUser = new EventEmitter<boolean>();


  hide: boolean = true;
  erroPassword : boolean;
  private firstPassword : string = '';

  constructor(private router: Router,
              private global: GlobalService,
              private repository: RepositoryService
    ) {
    this.erroPassword = false;
   }

  ngOnInit(): void {
    this.firstPassword = '';
    this.onNewUser.emit(false);
  }

  getErrorMessage(): void {
    this.firstPassword = this.Form.controls['senha'].value;
    return;
    
  }

  onClear(){
    this.Form.reset()
  }

  onSaveUser(){
    let newUser: Usuario ;
    newUser = new Usuario();
    newUser.nome = this.Form.controls['nome'].value;
    newUser.senha = this.Form.controls['senha'].value;
    this.repository.addNewUser(newUser);
    this.router.navigate(['/']);
    this.onNewUser.emit(true);
    this.global.setAddNewUser(false);
    this.global.get('CloseNewUser').emit(true);
  }

  onCancel(){
    this.router.navigate(['/']);
    this.onNewUser.emit(false);
    this.global.setAddNewUser(false);
    this.global.get('CloseNewUser').emit(true);
    
  }
  
   wrongPasswordRetype2(): ValidatorFn{
   return(control: AbstractControl): {[key: string]: boolean } | null  => 
   {
    let datafield : String;
    datafield = control.value;
    
    if (datafield.length < 6) {
      return{wrongSize: control.value};
    }

    if (control.value !== this.firstPassword) {
        return{wrongPassword: control.value};
    }

    return null;
  }
}

 

  
}
