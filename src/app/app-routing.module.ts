import { HomeClientComponent } from './components/client/root-client/home-client/home-client.component';
import { RootClientComponent } from './components/client/root-client/root-client.component';
import { RootArtistComponent } from './components/artist/root-artist/root-artist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { PhoneNumberArtistComponent } from './components/log-in/phone-number-artist/phone-number-artist.component';
import { PhoneNumberClientComponent } from './components/log-in/phone-number-client/phone-number-client.component';
import { VerifyCodeComponent } from './components/log-in/verify-code/verify-code.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignArtistComponent } from './components/sign-up/sign-artist/sign-artist.component';
import { SignClientComponent } from './components/sign-up/sign-client/sign-client.component';
import {  } from './components/artist/root-artist/home/home.component';
import { OurWorkComponent } from './components/artist/root-artist/our-work/our-work.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/root-client/home-client'},
  { path: 'log-in', component: LogInComponent, children: [
    { path: 'phone-number-artist', component: PhoneNumberArtistComponent},
    { path: 'phone-number-client', component: PhoneNumberClientComponent},
    { path: 'verify-code', component: VerifyCodeComponent}
  ]},
  { path: 'sign-up', component: SignUpComponent, children: [
    { path: 'sign-artist', component: SignArtistComponent},
    { path: 'sign-client', component: SignClientComponent}
  ]},
  { path: 'root-artist', component: RootArtistComponent, children: [
    { path: 'our-work', component: OurWorkComponent },
  ]},
  { path: 'root-client', component: RootClientComponent, children: [
    { path: 'home-client', component: HomeClientComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
