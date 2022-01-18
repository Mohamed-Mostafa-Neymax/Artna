import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggleStatus = false;
  // client True
  // Artist False
  userStatus = false;

  constructor( private router: Router) { }
  ngOnInit(): void {
    
  }

  onChangeUserStatus() {
    this.userStatus = !this.userStatus;
    if( !this.userStatus ) this.router.navigate(['/log-in/phone-number-client']);
    else this.router.navigate(['/log-in/phone-number-artist']);
  }

  onToggleNav() {
    this.toggleStatus = !this.toggleStatus;
    if( this.toggleStatus ) document.getElementById('navbarSupportedContent')?.classList.add('show');
    else document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }
}
