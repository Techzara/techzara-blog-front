import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { // quand le path est home , charger en asynchrone le module Homemodule , module de la page d'accueil
    path: 'home',
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
