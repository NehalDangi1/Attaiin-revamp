import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { AppLoginComponent } from './login/login.component';
import { AppRegisterComponent } from './registration/register.component';
import { AppForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LearnComponent } from './learn/learn.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { LoginWithOtpComponent } from './login-with-otp/login-with-otp.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashBoardComponent,
  },
  {
    path:'subjects',
    component:SubjectsComponent
  },
  {
    path:'learn',
    component: LearnComponent
  },
  {
    path:'bookmarks',
    component: BookmarksComponent
  },
  {
    path:'login',
    component:AppLoginComponent  
  },
  {
    path:'loginWithOtp',
    component: LoginWithOtpComponent
  },
  {
    path:'register',
    component:AppRegisterComponent  
  },
  {
    path:'forgot-password',
    component:AppForgotPasswordComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:AppLoginComponent  
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
