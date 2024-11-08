// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OurCoursesComponent } from './components/our-courses/our-courses.component';
import { HomeComponent } from './components/home/home.component';
import {LabStationComponent} from './components/lab-station/lab-station.component';
import {NewsComponent} from './components/news/news.component';
import {TriviaComponent} from './components/trivia/trivia.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'our-courses', component: OurCoursesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lab-station', component: LabStationComponent },
  { path: 'news', component: NewsComponent },
  { path: 'trivia', component: TriviaComponent }
];
