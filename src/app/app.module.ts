import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';
import {StarRatingModule} from 'angular-star-rating';
import {HttpClientModule} from '@angular/common/http';
import {GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig} from 'ng-gapi';
import { GrmComponent } from './services/grm/grm.component';


const gapiClientConfig: NgGapiClientConfig = {
  client_id: '876693417319-64ohobc9uoj415te940iqnv8rjco4vnp.apps.googleusercontent.com',
  discoveryDocs: [],
  scope: [
    // 'https://www.googleapis.com/auth/drive',
    // 'https://www.googleapis.com/auth/drive.readonly',
    // 'https://www.googleapis.com/auth/spreadsheets',
    // 'https://www.googleapis.com/auth/drive',
    // 'https://www.googleapis.com/auth/spreadsheets.readonly'
  ].join(' ')
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GrmComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBs7gh-2-H9DeJRvuH_GtdWo_8LOgrmnc'
    }),
    AgmDirectionModule,
    StarRatingModule.forRoot(),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
