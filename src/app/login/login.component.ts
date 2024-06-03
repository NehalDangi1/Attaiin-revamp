import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class AppLoginComponent {
  title = 'login';

  loginWithEmail: FormGroup;
  loginWithPhoneNumber: FormGroup
  userSessionData = {
    platform: '',
    isMobile: false
  }

  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private toster: ToastrService
  ) {
    this.loginWithEmail = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required])],
      loginRememberMe: [false],
    });
    
    this.loginWithPhoneNumber = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required])],
      loginRememberMe: [false],
    });
  }


  onSubmit(formType:string){

    let userData = (<any>navigator).userAgentData;
    this.userSessionData.platform = userData?.platform;
    this.userSessionData.isMobile = userData?.mobile;

    const loginData = {
      userName: formType ==='loginWithEmail' ? this.loginWithEmail.value.email: this.loginWithPhoneNumber.value.phoneNumber,
      password: formType ==='loginWithEmail' ? this.loginWithEmail.value.password: this.loginWithPhoneNumber.value.phoneNumber,
      isOtpLogin: false,
      otp: 0,
      UserSessionData: this.userSessionData
    };
    console.log('@@..login: ', formType + ': ' + JSON.stringify(loginData));

    this.api.loginUser(loginData).subscribe({
        next: (response:any)=>{
            if(response && response['statusCode'] == 200){
                console.log('##..', response);
                localStorage.setItem('attaiinToken', response.result.token);
                localStorage.setItem('attaiinRefreshToken', response.result.refreshToken);
                
                console.log('token..', localStorage.getItem('attaiinToken'))
                this.getUserData();
                this.router.navigate(['/','dashboard']);
            }
        },
        error: (error):any=>{
            localStorage.removeItem('attaiinToken');
            localStorage.removeItem('attaiinRefreshToken');
            if (error.status === 400 && error.error && error.error.responseException) {
                // Display exceptionMessage from the error response
                this.toster.error(error.error.responseException.exceptionMessage);
            } else {
                // Display a generic error message
                this.toster.error("An error occurred. Please try again later.");
            }
        }
    });
  }



  getUserData(){
    this.api.userProfile().subscribe({
      next: (data:any) =>{
        console.log('user..', data)
        window.localStorage.setItem('userName',data.result.firstName+' '+data.result.lastName);
        window.localStorage.setItem('email',data.result.email);
      },
      error: error=>{
        console.log('error..', error)
        
      }
    })
  }



  loginWithOtp(){
    this.router.navigate(['/','loginWithOtp'])
  } 
  goToRegister(){
    this.router.navigate(['/', 'register']);
  }

  forgotPassword(){
    this.router.navigate(['/', 'forgot-password']);
  }

}
