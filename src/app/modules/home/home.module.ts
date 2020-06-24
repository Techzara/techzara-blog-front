import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../../components/home/home.component";
import {UserComponent} from "../../components/user/user.component";
import {FriendsComponent} from "../../components/friends/friends.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {PostsComponent} from "../../components/posts/posts.component";
import {TopComponent} from "../../components/top/top.component";
import {ArticlesComponent} from "../../components/articles/articles.component";


// Home module pour les différents composants de la page home , création de home module car il devrait exister trois modules , home,
// login et inscription
@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    FriendsComponent,
    NavbarComponent,
    PostsComponent,
    TopComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
