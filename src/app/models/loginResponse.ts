import { Usuario } from "./usuario";

export class loginResponse {

    
    User: Usuario;
    Authentcated: boolean;
   

    constructor() {
        this.User  = new Usuario();
        this.Authentcated = false;
       
     }
}