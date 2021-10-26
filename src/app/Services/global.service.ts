import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private authentcated : boolean;
  private addNewUser : boolean;

  private  emitters: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}

  get (nomeEvento:string): EventEmitter<any> {
    if (!this.emitters[nomeEvento])
        this.emitters[nomeEvento] = new EventEmitter<any>();

    //console.log('registrando')    
    return this.emitters[nomeEvento];
}

  constructor() { 
    this.addNewUser = false;
    this.authentcated = false;
  }

  isAuthentcated() {
    return this.authentcated;
  }

  setAuthentcated(value : boolean){
    this.authentcated = value;
  }

  isAddNewUser(){
    return this.addNewUser;
  }

  setAddNewUser(value : boolean){
    this.addNewUser = value;
    //console.log('set new user' + value);
  }
}
