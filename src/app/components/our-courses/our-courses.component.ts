import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-courses',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.scss'],
})
export class OurCoursesComponent {
  constructor(private router: Router) {}

  // Array of student courses
  studentCourses = [
    {
      course_code: 'STUDENT_BEGINNER',
      title: 'Basic Course: Introduction to Generative AI (FREE)',
      description: 'A foundational course introducing the basics of Generative AI.',
      duration: '3 weeks (6 classes of 45 minutes each)',
      content: 'Introduction to AI, applications of Generative AI, and responsible AI use',
      labTime: 'Hands-on practice sessions with beginner-friendly tools',
      outcome: 'Foundational understanding of Generative AI, preparing students for more advanced topics.',
      is_registration_open: true,
    },
    {
      course_code: 'STUDENT_INTERMEDIATE',
      title: 'Intermediate Course: Creating with Generative AI',
      description: 'This course emphasizes mastering the art of prompt engineering to generate high-quality outputs using AI tools.' ,
      duration: '10 weeks (10 classes, 45 minutes each + project lab time)',
      content: `
        Advanced prompt engineering techniques to achieve better outputs from AI tools. 
        Students will dive deep into creating effective prompts for text generation and digital artwork, 
        learning how to shape their inputs to produce creative and accurate AI-driven results.'
      `,
      labTime: 'Supervised lab sessions to practice prompt optimization and work on personalized projects.',
      outcome: `
        Students will develop a portfolio-ready project and acquire intermediate-level skills in 
        creative and effective prompt design, positioning them to unlock the full potential of AI tools.
      `,
      is_registration_open: false,
    },
    {
      course_code: 'STUDENT_ADVANCE',
      title: 'Advanced Course: Building and Customizing AI Models',
      description: 'An advanced course focusing on coding and model customization.',
      duration: '16 weeks (16 classes, 45 minutes each + coding lab time)',
      content: 'Coding fundamentals, API usage, basic model tuning, and capstone project',
      labTime: 'Weekly coding labs to support students’ projects',
      outcome: 'A functional AI application, showcasing coding and model customization skills.',
      is_registration_open: false,
    },
  ];

  // Information for working professionals
  professionalCoursesMessage = 'Courses for working professionals will be announced soon. Stay tuned!';

  /**
   * Navigate to the registration page for the selected course.
   * @param course_code - The unique code of the course to register for.
   */
  register(course_code: string): void {
    // this.router.navigate(['/registration'], { queryParams: { course_code: course_code } });
    this.router.navigate(['/form'], { queryParams: { code: course_code } });
  }

  /**
   * Navigate to the interest form.
   */
  expressInterest(): void {
    this.router.navigate(['/form'], { queryParams: { code: 'COURSE_INTEREST' } });
  }
}
