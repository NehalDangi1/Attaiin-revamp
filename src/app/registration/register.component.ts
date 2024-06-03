import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class AppRegisterComponent {
  title = 'register';
  isAccountCreated:boolean = false;

  constructor(private router: Router) {

  }
  createAccount(){
    this.isAccountCreated = !this.isAccountCreated
  }
  goToLogin(){
    this.router.navigate(['/', 'login']);
  }
}
