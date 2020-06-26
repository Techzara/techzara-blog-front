import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/disconnected/components/login/login.component';
import { BlogService } from './services/blog/blog.service';
import { UserService } from './services/user/user.service';

const routes: Routes = [
  {
    path:'',
    loadChildren:"./modules/disconnected/disconnected.module#DisconnectedModule",
    canActivate:[BlogService]
  },
  {
    path:"home",
    loadChildren:"./modules/main/main.module#MainModule",
    canActivate:[UserService]
  },
  {
    path:"**",
    redirectTo:"/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
