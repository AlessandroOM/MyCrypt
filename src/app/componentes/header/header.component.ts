import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/auth.service';
import { RepositoryService } from 'src/app/Services/repository.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


   logged: boolean = false;
   userEmail: string = "";
   newUserPress: boolean = false;

 
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private repository: RepositoryService,
    private router: Router,
    private global: GlobalService
  ) {
    this.global.get('CloseNewUser').subscribe(data => {                                                    
                                                      this.onCloseNewUser(data);
                                                      });
   }

   onCloseNewUser(value : boolean){
      this.newUserPress = !value;
      //console.log('dentro evento' + value);
   }

  ngOnInit(): void {
    this.logged = false;
    this.userEmail = "";
    this.repository.clearLoggedUser();
    this.newUserPress = false;
    this.global.setAddNewUser(false);
    this.global.setAuthentcated(false);

  }

  ngOnDestroy() {
    //console.log('destroi');
    this.global.get('CloseNewUser').unsubscribe();
}

  
  btnClick(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
       maxHeight: '95vh',
       maxWidth:300
    });

    dialogRef.afterClosed().subscribe(result => {
       this.logged = result && result.Authentcated;
       this.global.setAddNewUser(false);
       this.global.setAuthentcated(this.logged);
       if (this.logged) {
           this.userEmail = result.User.nome;
           this.repository.setLoggedUser(result.User);
           console.log("fechando login se logado")
           this.router.navigate(['']);
      }
      
    });
  }

  btnLogoutClick(): void{
    this.authService.Logout();
    this.logged = false;
    this.userEmail = "";
    this.newUserPress = false;
    this.global.setAddNewUser(false);
    this.global.setAuthentcated(false);
  }

  btnNewUserClick(): void {
    this.global.setAddNewUser(true);
    this.newUserPress = this.global.isAddNewUser();
    this.router.navigate(['/newuser']);

  }

 

}
