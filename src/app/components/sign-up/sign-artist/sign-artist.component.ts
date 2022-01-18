import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-artist',
  templateUrl: './sign-artist.component.html',
  styleUrls: ['./sign-artist.component.scss']
})
export class SignArtistComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  onSubmitArtist(form: NgForm) {
    console.log(`0${form['controls']['phone'].value}`);
    if( form['controls']['phone'].value ) {
      this.router.navigate(['../verify-code'], { relativeTo: this.route });
    } 
  }
}
