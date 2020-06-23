import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';

//Importation modules angular material
import {MatInputModule} from '@angular/material/input';
import {MatLabel} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

//Importation des scripts
import "materialize-css/dist/js/materialize.min.js";
import { UserComponent } from './components/user/user.component';
import { FriendsComponent } from './components/friends/friends.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { TopComponent } from './components/top/top.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent // login peut être appelé directement car c'est un component , pas un module
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, // un routing module pour chaque module , un module représente une forme de page
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
