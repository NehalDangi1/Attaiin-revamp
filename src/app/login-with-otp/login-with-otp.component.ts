import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-with-otp',
  templateUrl:'login-with-otp.component.html'
})
export class LoginWithOtpComponent {
  isOtpBtnClicked=false;
  constructor(private router: Router) {

  }

  loginWithOtp(){
    this.isOtpBtnClicked = !this.isOtpBtnClicked

  }

  loginWithEmailPhone(){
    this.router.navigate(['/', 'login']);

  }

  goToRegister(){
    this.router.navigate(['/', 'register']);
  }

  forgotPassword(){
    this.router.navigate(['/', 'forgot-password']);
  }
}
