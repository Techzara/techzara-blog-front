import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

const DISCONNECTED_ROUTES:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"subscribe",
    component:SubscribeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(DISCONNECTED_ROUTES)],
  exports:[RouterModule]
})
export class DisconnectedRoutingModule { }
