import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.scss']
})
export class NavbarClientComponent implements OnInit {

  toggleStatus = false;

  constructor( private router: Router ) { }
  ngOnInit(): void {
  }

  // onRegister() {
  //   this.router.navigate(['/log-in/phone-number-client']);
  // }

  onToggleNav() {
    this.toggleStatus = !this.toggleStatus;
    if( this.toggleStatus ) document.getElementById('navbarSupportedContent')?.classList.add('show');
    else document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }
}
