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
          MatInputModule,
          MatFormFieldModule,
          MatIconModule,
          MatRadioModule
       } from '@angular/material';
       
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [
    DataService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }