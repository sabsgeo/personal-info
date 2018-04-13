import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { 
          MatButtonModule,
          MatCheckboxModule,
          MatStepperModule,
          MatCardModule,
          MatInputModule
       } from '@angular/material';
       
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { IntroVideoComponent } from './intro-video/intro-video.component';

import { DataService } from './data.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'intro-video', component: IntroVideoComponent },
  { path: '**', redirectTo: 'welcome' }
]
      
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PersonalInfoComponent,
    IntroVideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // RouterModule.forRoot(appRoutes, { useHash: true }),
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }