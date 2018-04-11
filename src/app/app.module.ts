import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { 
          MatButtonModule,
          MatCheckboxModule
       } from '@angular/material';
       
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
]
      
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }