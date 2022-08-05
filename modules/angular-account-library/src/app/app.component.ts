import { Component } from '@angular/core';

interface SettingItemType {
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menus: SettingItemType[] = [
    {
      title: 'Blog',
      url: '/blog',
    },
    {
      title: 'Blog Detail',
      url: '/blog-detail',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
    {
      title: 'Login',
      url: '/login',
    },
  ];
}
