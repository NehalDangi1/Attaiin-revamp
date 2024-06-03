import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'attaiin';

  hideMenu=true;

  constructor(public router: Router){
    // this.hideMenu = router.url.includes('login') ? true : router.url.includes('register') ? true : false;
  }
}
