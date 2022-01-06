import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggleStatus = false;

  constructor() { }
  ngOnInit(): void {
    
  }

  onToggleNav() {
    this.toggleStatus = !this.toggleStatus;
    if( this.toggleStatus ) document.getElementById('navbarSupportedContent')?.classList.add('show');
    else document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }
}
