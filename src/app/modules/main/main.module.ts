import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { ArticlesComponent } from './components/articles/articles.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, PostsComponent, ArticlesComponent],
  imports: [CommonModule],
  exports:[
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
