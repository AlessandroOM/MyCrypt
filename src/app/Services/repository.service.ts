import { Injectable } from '@angular/core';
import { news } from '../models/news';
import { UserNotes } from '../models/UserNotes';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  loggedUser : Usuario;

  private users : Array<Usuario> =[];
  public notes : Array<UserNotes> =[];
  public News : Array<news> = [];

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

    let notice = new news();
    notice.Id = (this.News.length + 1).toString();
    notice.Title = "MyCrypt - suas anotações nas Núvens!";
    notice.News = "Guarde suas anotações em um lugar acessível";
    this.News.push(notice);

    let notice1 = new news();
    notice1.Id = (this.News.length + 1).toString();
    notice1.Title = "MyCrypt - Fácil de usar!";
    notice1.News = "Selecione a atividade , clique , escreva e pronto!";
    this.News.push(notice1);

    let notice2 = new news();
    notice2.Id = (this.News.length + 1).toString();
    notice2.Title = "MyCrypt - Garanta a segurança das suas notas!";
    notice2.News = "Protegida por Login!";
    this.News.push(notice2);

    let notice3 = new news();
    notice3.Id = (this.News.length + 1).toString();
    notice3.Title = "MyCrypt - Divulgue aqui!";
    notice3.News = "Divulgue seus produtos ou projetos nesta área. Entre me contato!";
    this.News.push(notice3);


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
     console.log(note);
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
