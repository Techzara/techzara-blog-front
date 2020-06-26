import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
//Importation des scripts
import "materialize-css/dist/js/materialize.min.js";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisconnectedModule } from './modules/disconnected/disconnected.module';
import { MainModule } from './modules/main/main.module';
import { LoaderComponent } from './utils/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
