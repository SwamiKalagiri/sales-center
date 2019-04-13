import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ItemListComponent } from './item-list/item-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";
import { ItemEditComponent } from './item-edit/item-edit.component';
import {FormsModule} from "@angular/forms";
import {OktaAuthModule} from "@okta/okta-angular";
import {OktaInterceptor} from "./shared/okta/okta-interceptor";
import { LoginComponent } from './login/login.component';

const config = {
  issuer: 'https://dev-589122.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oakack7czvgDSwYa0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: OktaInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
