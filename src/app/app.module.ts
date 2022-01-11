import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PhoneNumberArtistComponent } from './components/log-in/phone-number-artist/phone-number-artist.component';
import { VerifyCodeComponent } from './components/log-in/verify-code/verify-code.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignArtistComponent } from './components/sign-up/sign-artist/sign-artist.component';
import { SignClientComponent } from './components/sign-up/sign-client/sign-client.component';
import { PhoneNumberClientComponent } from './components/log-in/phone-number-client/phone-number-client.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignUpComponent,
    LogInComponent,
    PhoneNumberArtistComponent,
    VerifyCodeComponent,
    SignArtistComponent,
    SignClientComponent,
    PhoneNumberClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
