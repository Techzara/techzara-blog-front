
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../../components/home/home.component";

//pour ce module home , le component par défaut pour n'importe quelle route est homecomponent
const routes: Routes = [{
  path: '',
  component: HomeComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
