import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-user-menu',
  templateUrl: 'header-user-menu.component.html',
  styleUrls:['./header-user-menu.component.scss']
})
export class AppHeaderUserMenuComponent implements OnInit {
  title = 'header-user-menu';

  userName:any;
  email:any;

  constructor(){
    
    this.userName = localStorage.getItem('userName') ;
    this.email = localStorage.getItem('email');
  }

  ngOnInit(): void {
  }

 
}
