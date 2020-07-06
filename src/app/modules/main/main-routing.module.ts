import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticlePageService } from 'src/app/services/articles-page/article-page.service';
import { SearchPageService } from 'src/app/services/search-page/search-page.service';
const MAIN_ROUTE: Routes = [
  {
   
    path: '',
    component:HomeComponent
  },
  {
    path:"article",
    component:ArticleComponent,
    canActivate:[ArticlePageService]
  },
  {
    path:"search",
    component:SearchComponent,
    canActivate:[SearchPageService]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(MAIN_ROUTE)],
  exports:[RouterModule]
})
export class MainRoutingModule { }
