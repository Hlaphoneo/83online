import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {Component} from '@angular/core';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {RestService} from './services/rest.service';

import { HttpModule } from '@angular/http';
import { WelcomeComponent } from './welcome/welcome.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

const appRoutes: Routes = [
{path: 'Welcome', component: WelcomeComponent},
{path: 'Home', component: HomeComponent}
// {path: 'HomePage', component: HomeComponent},
// {path: 'LoginPage', component: LoginComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
