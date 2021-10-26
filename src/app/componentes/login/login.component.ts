import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(4)]);
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              private authService: AuthService
    ){
  
    
  }


  ngOnInit(): void {
   
  }

  Login(){
    this.usuario.nome = this.email.value;
    this.usuario.senha = this.password.value;

    //console.log(this.usuario);
    
    this.authService.Login(this.usuario);
    this.dialogRef.close({'User': this.usuario,
                          'Authentcated' : this.authService.isAuthentcated()
                          });
  }

  Cancel(){
    this.dialogRef.close({'User': null,
                          'Authentcated' : false
    });
    
  }

}
