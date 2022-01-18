import { DataStorageService } from './../../../services/data-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phone-number-client',
  templateUrl: './phone-number-client.component.html',
  styleUrls: ['./phone-number-client.component.scss']
})
export class PhoneNumberClientComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onloginClient(form: NgForm) {
    console.log(`0${form['controls']['phone'].value}`);
    if( form['controls']['phone'].value ) {
      this.dataStorageService.loginData.phone = +`0${form['controls']['phone'].value}`;
      this.dataStorageService.sendSMS().subscribe( (resLogin: any) => {
        console.log(resLogin);
      });
      // console.log(this.dataStorageService.loginData);

      this.router.navigate(['../verify-code'], { relativeTo: this.route });
    }
  }
}
