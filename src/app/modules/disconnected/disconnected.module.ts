import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisconnectedRoutingModule } from './disconnected-routing.module';


@NgModule({
  declarations: [SubscribeComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DisconnectedRoutingModule
  ]
})
export class DisconnectedModule { }
