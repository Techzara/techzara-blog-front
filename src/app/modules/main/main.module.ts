import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { LoaderComponent } from 'src/app/utils/loader/loader.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent, 
    FooterComponent, 
    PostsComponent, 
    ArticlesComponent,
    LoaderComponent,
    CommentsComponent,
    ArticleComponent,
    BlogComponent,
    SearchComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RouterModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent
  ],
})
export class MainModule { }
