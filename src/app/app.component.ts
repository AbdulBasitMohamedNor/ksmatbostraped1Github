import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LsLista';

  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/items', icon: 'list', label: 'Items'},
    { path: '/widgets', icon: 'view_quilt', label: 'Widgets'},
    { path: '/profile', icon: 'face', label: 'Profile'},
    { path: '/mitest', icon: 'list', label: 'mitest'}

  ];

}
