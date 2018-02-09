import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';



// ================================================================================ Services ================================================================================


import {RestService} from './services/rest.service';
import {AuthenticationService} from './services/authentication.service';
import {AccountService} from './services/account.service';


// ================================================================================ Modules ================================================================================

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import { EventsModule } from 'angular4-events';

// ================================================================================ Components/Pages ================================================================================

import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


// ================================================================================ Material design ================================================================================

import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// =============================================================================== Global variables ================================================================================


const appRoutes: Routes = [
{path: 'welcome', component: WelcomeComponent},
{path: 'home', component: HomeComponent},
{ path: '',   redirectTo: 'welcome', pathMatch: 'full' },
{path: 'users/sign_in', component: LoginComponent},
{path: 'users/sign_up', component: SignupComponent},
{ path: '**', component: PageNotFoundComponent }
];


export const firebaseConfig = {
        apiKey: "AIzaSyAUFzBs1ql-iyV03jeSpSP6kx--3raJ11U",
        authDomain: "amajobs-2f95a.firebaseapp.com",
        databaseURL: "https://amajobs-2f95a.firebaseio.com",
        projectId: "amajobs-2f95a",
        storageBucket: "amajobs-2f95a.appspot.com",
        messagingSenderId: "490404252812"
};

// ================================================================================ Imports/Declerations/Providers ================================================================================



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    EventsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RestService,AuthenticationService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
