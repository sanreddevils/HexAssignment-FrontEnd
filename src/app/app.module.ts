import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

 import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ApprouteRoutingModule} from './app-routing.module';

import {SoftskilldataService} from './softskilldata.service';
import {AuthenticationService} from './loginservice.service';
import {AuthGuard} from './AuthGaurd';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ApprouteRoutingModule,
    HttpClientModule,
    FormsModule,
  HttpModule  ],
  providers: [AuthGuard,SoftskilldataService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
