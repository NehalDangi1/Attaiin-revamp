import { Component } from '@angular/core';

@Component({
  selector: 'menu-bar',
  templateUrl: 'menuBar.component.html',
  styleUrls:['./menuBar.component.scss']
})
export class MenuBarComponent {
  title = 'menu-bar';
  menuItems:any[] = [
    {
      name:'dashboard',
      title:'dashboard',
      icon:'house-door'
    },
    {
      name:'subjects',
      title:'subjects',
      icon:'play-circle'
    },
    {
      name:'learn',
      title:'learn',
      icon:'mortarboard'
    },
    {
      name:'bookmarks',
      title:'bookmarks',
      icon:'bookmark-dash'
    }
  ]

}