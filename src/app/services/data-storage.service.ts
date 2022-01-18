import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    
    constructor(private http: HttpClient) {}

    loginData = {
        phone: 0,
        verification_code: 0
    }

    // Authentication

    // 

    



    sendSMS() { return this.http.post(`${environment.endpoint}/user/send/sms`, { phone: this.loginData.phone }); }
    confirmSMS() { return this.http.post(`${environment.endpoint}/user/confirm/sms`, this.loginData); }
    login() { return this.http.post(`${environment.endpoint}/user/login`, this.loginData); }
}