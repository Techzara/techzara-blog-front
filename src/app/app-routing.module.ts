import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/disconnected/components/login/login.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:"./modules/disconnected/disconnected.module#DisconnectedModule"
  },
  {
    path:"home",
    loadChildren:"./modules/main/main.module#MainModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
