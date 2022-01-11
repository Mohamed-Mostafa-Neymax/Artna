import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent implements OnInit {

  

  constructor( private router: Router ) { }
  ngOnInit(): void {
  }

  onRewritePhone() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    
  }
}
