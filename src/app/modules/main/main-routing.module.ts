import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
const MAIN_ROUTE: Routes = [
  {
   
    path: '',
    component:HomeComponent
  },
  {
    path:"article",
    component:ArticleComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(MAIN_ROUTE)],
  exports:[RouterModule]
})
export class MainRoutingModule { }
