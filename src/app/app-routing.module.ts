import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { PhoneNumberComponent } from './components/log-in/phone-number/phone-number.component';
import { VerifyCodeComponent } from './components/log-in/verify-code/verify-code.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/log-in/phone-number'},
  { path: 'log-in', component: LogInComponent, children: [
    { path: 'phone-number', component: PhoneNumberComponent},
    { path: 'verify-code', component: VerifyCodeComponent}
  ]},
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
