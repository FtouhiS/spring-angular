import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { FooterComponent } from './features/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './features/home/home.component';
import { UpdateuniversiteformComponent } from './components/universite/updateuniversiteform/updateuniversiteform.component';
import { UpdatefoyerformComponent } from './components/foyer/updatefoyerform/updatefoyerform.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
