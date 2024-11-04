// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OurCoursesComponent } from './components/our-courses/our-courses.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'our-courses', component: OurCoursesComponent },
  { path: 'home', component: HomeComponent }
];
