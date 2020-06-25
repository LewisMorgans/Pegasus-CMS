import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Administration',
      type: 'header'
    },
    {
      title: 'Components',
      icon: 'fas fa-file-medical',
      active: false,
      link: '/components'
    },
    {
      title: 'Users',
      icon: 'fas fa-users',
      active: false,
      link: '/users'
    },
    {
      title: 'Settings',
      icon: 'fas fa-cog',
      active: false,
      link: '/settings'
    },
    {
      title: 'General',
      type: 'header'
    },
    {
      title: 'Analytics',
      icon: 'fas fa-chart-line',
      active: false,
      link: '/analytics'
    },
    {
      title: 'Store',
      icon: 'fa fa-shopping-cart',
      active: false,
      link: '/store'
    },
    {
      title: 'Orders',
      icon: 'fas fa-file-invoice-dollar',
      active: false,
      link: '/orders'
    },
    {
      title: 'Bookings',
      icon: 'fas fa-book-open',
      active: false,
      link: '/bookings'
    },
    {
      title: 'Blog',
      icon: 'fas fa-edit',
      active: false,
      link: '/blog'
    },
    {
      title: 'Calendar',
      icon: 'fas fa-calendar-alt',
      active: false,
      type: 'simple',
      link: '/calendar'
    },
    {
      title: 'Maps',
      icon: 'fa fa-globe',
      active: false,
      link: '/maps'
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Documentation',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      link: '/documentation'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
