import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', './navigation.media-screen.css']
})
export class NavigationComponent {
  menuItems = [
    {name: 'Dashboard', img: '/assets/menu1.svg', activeimg: '/assets/menu1_active.svg'},
    {name: 'Product', img: '/assets/menu2.svg', activeimg: '/assets/menu2_active.svg'},
    {name: 'Customers', img: '/assets/menu3.svg', activeimg: '/assets/menu3_active.svg'},
    {name: 'Income', img: '/assets/menu4.svg', activeimg: '/assets/menu4_active.svg'},
    {name: 'Promote', img: '/assets/menu5.svg', activeimg: '/assets/menu5_active.svg'},
    {name: 'Help', img: '/assets/menu6.svg', activeimg: '/assets/menu6_active.svg'}
  ];
}
