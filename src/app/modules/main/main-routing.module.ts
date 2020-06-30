import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, Router, RouterModule } from '@angular/router';
const MAIN_ROUTE: Routes = [
  {
    path: '',
    component:HomeComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(MAIN_ROUTE)],
  exports:[RouterModule]
})
export class MainRoutingModule { }
