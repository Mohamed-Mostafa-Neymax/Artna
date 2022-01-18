import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataStorageService } from './../../../services/data-storage.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent implements OnInit {

  constructor( private router: Router, private dataStorageService: DataStorageService ) { }
  ngOnInit(): void {
  }

  onRewritePhone() {
    this.router.navigate(['/log-in/phone-number-client']);
  }
  onLoginSMS(verifyForm: NgForm) {
    let fullVerifyNum = '';
    for( let key in verifyForm.value ) fullVerifyNum += verifyForm.value[key];
    this.dataStorageService.loginData.verification_code = +fullVerifyNum;
    this.dataStorageService.confirmSMS().subscribe( (resLogin: any) => {
      console.log(resLogin);
    });
  }
}