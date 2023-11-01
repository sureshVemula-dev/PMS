import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sheenlac_PMS';
  currentUrlStatus: boolean = true;
  message: boolean = true;
  isSidebarToggle: boolean = false;

  constructor(private router: Router){
  }

  getData(message:boolean){
    this.isSidebarToggle = message;
    console.log("getData-------", message);
    this.message = !this.message;
  }

  isHeaderVisible(): boolean {
    const currentUrl = this.router.url;
    if(currentUrl === '/' || currentUrl === '/login' || currentUrl === '/reset') {
      this.currentUrlStatus = false;
    } else {
      this.currentUrlStatus = true;
    }
    return this.currentUrlStatus;
  }
}