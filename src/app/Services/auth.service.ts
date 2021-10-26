import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient, HttpErrorResponse, HttpParams,HttpHeaders } from '@angular/common/http';
import { loginResponse } from '../models/loginResponse';
import { RepositoryService } from './repository.service';





@Injectable()
export class AuthService {


  // SuccessObject(createDate,
  //   expireDate,
  //   Token,
  //   userRetorno
  //   );  RETORNO DO BACKEND object
  //http://localhost:5000/api/Login/LoginByEmail(objeto com email e password)

  private authentcated: boolean = false;

  readonly apiURL : string;

  constructor(private http : HttpClient,
              private repository : RepositoryService) {
    this.apiURL = 'http://localhost:5000/api';
   }

  Login(usuario: Usuario){

    
    console.log('antes post');
    // try {
      
         
    //   this.http.post<loginResponse>(`${this.apiURL }/Login/Login`,usuario)
     
    //       .subscribe(resultado =>{
    //         console.log('resultado');
    //         console.log(resultado);
    //       },
    //       (error: HttpErrorResponse) => {
    //                  console.log('erro');
    //                  console.log(error);
    //                }
    //       );
      

    // } catch (e) {
    //   console.log(e);
    // }

    
   
    if (this.repository.findUserByLogin(usuario.nome, usuario.senha)){
      this.authentcated = true;
    } else {
      this.authentcated = false;
    }

    // if (usuario.nome === 'usuario@email.com' && 
    //     usuario.senha === '123456') {

          
    //     this.authentcated = true;

       
    // } else {
    //   this.authentcated = false;

      
    // }
  }

  Logout(){
    this.authentcated = false;
  }

  isAuthentcated(){
    return this.authentcated;
  }

}
