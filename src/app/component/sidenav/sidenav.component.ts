import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  activeParent: string | null = null;

  toggleChildLists(parent: string) {
    this.activeParent = (this.activeParent === parent) ? null : parent;
  }
}
