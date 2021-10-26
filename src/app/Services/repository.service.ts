import { Injectable } from '@angular/core';
import { UserNotes } from '../models/UserNotes';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  loggedUser : Usuario;

  private users : Array<Usuario> =[];
  public notes : Array<UserNotes> =[];

  //notes[] : any;

  constructor() {
    this.loggedUser = new Usuario();
    let newUser = new Usuario();
    newUser.nome = 'teste@email.com';
    newUser.senha = '123456';
    this.addNewUser(newUser);

    let note = new UserNotes();
    note.Id = (this.notes.length + 1).toString();
    note.IdUser = newUser.nome;
    note.Title = "Nota de teste";
    note.Note = "Nota de teste";
    this.addNewNote(note);

   }

   setLoggedUser(usuario: Usuario){
     this.loggedUser = usuario;
   }

   clearLoggedUser(){
    this.loggedUser = new Usuario();
   }

   addNewUser(usuario: Usuario){
     this.users.push(usuario);
   }

   findUserByLogin(email : string, passwd : string)  {
      let find : boolean;
      find = false;
      this.users.forEach( (user) => {
           if (user.nome.toLowerCase() === email.toLowerCase()&&
              user.senha.toLowerCase() === passwd.toLowerCase()) {
                find = true;
              }
      });
      return find;
   }

   // NOTES
   addNewNote(note : UserNotes){
     note.Id = (this.notes.length + 1).toString();
     note.CreatedAt = new Date();
     this.notes.push(note);
   };

   editNote(noteEdit : UserNotes){
    this.notes.forEach((note, index) => {
    if (note.Id == noteEdit.Id)
    { 
      noteEdit.UpdatedAt = new Date();
      this.notes[index] = noteEdit;
      return;
    }
  });
 }

   deleteNote(noteid : string){
      this.notes.forEach((note, index) => {
      if (note.Id == noteid)
      { 
        //delete this.notes[index]; deixa o elemento em branco ou nulo
        this.notes.splice(index,1);   //remove todas as ocorrencias do elemento
        
        return;
      }
    });
   }




}
