import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarService } from './services/sidebar-service/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pro-sidebar';

  constructor(public sidebarservice: SidebarService) {
    this.detectResolution();
   }

  private detectResolution() {
    if(window.innerWidth < 768) {
      this.sidebarservice.setSidebarState(true);
    }
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
