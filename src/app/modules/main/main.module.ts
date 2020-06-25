import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
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
