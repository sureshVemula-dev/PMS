import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message: boolean = true;
  @Output() isSidebarToggle = new EventEmitter<boolean>();

  constructor(public router: Router){
  }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']);
  }
  sidenavCollapse(){
    console.log(this.isSidebarToggle);
    this.isSidebarToggle.emit(this.message);
    this.message = !this.message;
  }
}
