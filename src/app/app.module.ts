import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthService } from './Services/auth.service';
import { NewUserComponent } from './componentes/new-user/new-user.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListNotesComponent } from './componentes/list-notes/list-notes.component';
import { FormNoteComponent } from './componentes/form-note/form-note.component';
import { ListNewsComponent } from './componentes/list-news/list-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NewUserComponent,
    HomeComponent,
    ListNotesComponent,
    FormNoteComponent,
    ListNewsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    CommonModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
