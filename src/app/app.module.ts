import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutModule } from './layout/layout.module';
import { AjaxService } from 'src/provider/ajax.service';
import { JwtService } from 'src/auth/jwtService';
import { iNavigation } from 'src/provider/iNavigation';
import {HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [AjaxService, JwtService, iNavigation],
  bootstrap: [AppComponent]
})
export class AppModule { }
