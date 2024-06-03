import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menuBar/menuBar.component';
import { AppLoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { AppRegisterComponent } from './registration/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { AppHeaderUserMenuComponent } from './headerUserMenu/header-user-menu.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LearnComponent } from './learn/learn.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { SideMenubarComponent } from './sideMenuBar/sideMenuBar.component';
import { LoginWithOtpComponent } from './login-with-otp/login-with-otp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HeaderComponent,
    MenuBarComponent,
    SideMenubarComponent,
    AppLoginComponent,
    AppRegisterComponent,
    AppForgotPasswordComponent,
    AppHeaderUserMenuComponent,
    SubjectsComponent,
    LearnComponent,
    BookmarksComponent,
    LoginWithOtpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
