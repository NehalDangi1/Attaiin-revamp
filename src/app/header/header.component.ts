import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'header';

  constructor(public router: Router){
  }
}
