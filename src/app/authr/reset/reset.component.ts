import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  constructor(public router: Router){
  }

  ngOnInit(): void {  }
  
  logout() {
    this.router.navigate(['/login']);
  }
}
