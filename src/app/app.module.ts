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
import { NavbarClientComponent } from './components/client/root-client/navbar-client/navbar-client.component';
import { ArtistSidebarComponent } from './shared/artist-sidebar/artist-sidebar.component';
import { ArtistNavbarComponent } from './shared/artist-navbar/artist-navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotificationComponent } from './components/artist/root-artist/notification/notification.component';
import { AgreementComponent } from './components/artist/root-artist/agreement/agreement.component';
import { OurWorkComponent } from './components/artist/root-artist/our-work/our-work.component';
import { OrdersComponent } from './components/artist/root-artist/orders/orders.component';
import { SalesComponent } from './components/artist/root-artist/sales/sales.component';
import { ProfileComponent } from './components/artist/root-artist/profile/profile.component';
import { WalletComponent } from './components/artist/root-artist/wallet/wallet.component';
import { HomeComponent } from './components/artist/root-artist/home/home.component';
import { RootArtistComponent } from './components/artist/root-artist/root-artist.component';
import { RootClientComponent } from './components/client/root-client/root-client.component';
import { HomeClientComponent } from './components/client/root-client/home-client/home-client.component';
import { HttpClientModule } from '@angular/common/http';

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
    PhoneNumberClientComponent,
    OurWorkComponent,
    OrdersComponent,
    SalesComponent,
    ProfileComponent,
    WalletComponent,
    NotificationComponent,
    AgreementComponent,
    ArtistSidebarComponent,
    ArtistNavbarComponent,
    HomeComponent,
    NavbarClientComponent,
    RootArtistComponent,
    RootClientComponent,
    HomeClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
