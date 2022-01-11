import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phone-number-client',
  templateUrl: './phone-number-client.component.html',
  styleUrls: ['./phone-number-client.component.scss']
})
export class PhoneNumberClientComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  onSubmitClient(form: NgForm) {
    console.log(`0${form['controls']['phone'].value}`);
    if( form['controls']['phone'].value ) {
      this.router.navigate(['../verify-code'], { relativeTo: this.route });
    } 
  }
}
