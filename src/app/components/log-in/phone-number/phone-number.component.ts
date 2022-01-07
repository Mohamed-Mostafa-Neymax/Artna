import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute ) { }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form['controls']['phone'].value);
    if( form['controls']['phone'].value.length > 0 ) {
      this.router.navigate(['../verify-code'], { relativeTo: this.route });
    } 
  }
}
