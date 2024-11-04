import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


interface Course {
  title: string;
  description: string;
  duration: string;
  content: string;
  labTime: string;
  outcome: string;
}

@Component({
  selector: 'app-our-courses',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule,MatCardModule, MatExpansionModule,CommonModule],  
  templateUrl: './our-courses.component.html',
  styleUrl: './our-courses.component.scss'
})
export class OurCoursesComponent {
  constructor(private router: Router) {}

  courses: Course[] = [
    {
      title: 'Basic Course: Introduction to Generative AI (FREE)',
      description: 'A foundational course introducing the basics of Generative AI.',
      duration: '3 weeks (6 classes of 45 minutes each)',
      content: 'Introduction to AI, applications of Generative AI, and responsible AI use',
      labTime: 'Hands-on practice sessions with beginner-friendly tools',
      outcome: 'Foundational understanding of Generative AI, preparing students for more advanced topics.'
    },
    {
      title: 'Intermediate Course: Creating with Generative AI',
      description: 'A deeper dive into AI-driven creativity in writing, art, and music.',
      duration: '6 weeks (12 classes, 45 minutes each + project lab time)',
      content: 'Text generation, digital artwork, AI-generated music, and project-based learning',
      labTime: 'Supervised lab sessions to work on personalized projects',
      outcome: 'Portfolio-ready project and intermediate-level skills.'
    },
    {
      title: 'Advanced Course: Building and Customizing AI Models',
      description: 'An advanced course focusing on coding and model customization.',
      duration: '8 weeks (16 classes, 45 minutes each + coding lab time)',
      content: 'Coding fundamentals, API usage, basic model tuning, and capstone project',
      labTime: 'Weekly coding labs to support students’ projects',
      outcome: 'A functional AI application, showcasing coding and model customization skills.'
    }
  ];

  register(courseTitle: string): void {
    // Placeholder for registration logic
    console.log(`Registering for course: ${courseTitle}`);
    // You can replace this with navigation to a registration page
    // or opening a modal, etc.
    this.router.navigate(['/registration']);
  }

}
