import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { PhoneNumberArtistComponent } from './components/log-in/phone-number-artist/phone-number-artist.component';
import { PhoneNumberClientComponent } from './components/log-in/phone-number-client/phone-number-client.component';
import { VerifyCodeComponent } from './components/log-in/verify-code/verify-code.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignArtistComponent } from './components/sign-up/sign-artist/sign-artist.component';
import { SignClientComponent } from './components/sign-up/sign-client/sign-client.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/log-in/phone-number-artist'},
  { path: 'log-in', component: LogInComponent, children: [
    { path: 'phone-number-artist', component: PhoneNumberArtistComponent},
    { path: 'phone-number-client', component: PhoneNumberClientComponent},
    { path: 'verify-code', component: VerifyCodeComponent}
  ]},
  { path: 'sign-up', component: SignUpComponent, children: [
    { path: 'sign-artist', component: SignArtistComponent},
    { path: 'sign-client', component: SignClientComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
