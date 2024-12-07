import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsUpdates: Array<{ title: string; date: string; content: string; additionalDetails: SafeHtml; showMore: boolean }>;

  constructor(private sanitizer: DomSanitizer) {
    // Initialize news updates with sanitized HTML after DomSanitizer is available
    this.newsUpdates = [
      {
        title: 'Introduction to Generative AI Classes Have Begun!',
        date: 'December 6, 2024',
        content: 'We are excited to announce that the online classes for the Introduction have begun on Friday, December 6, 2024.!',
        additionalDetails: this.sanitizeHtml(`
          <div>
             
            <h4>Details:</h4>
            <ul>
              <li>📅 December 6, 2024, to December 21, 2024</li>
              <li>⏰ 6:30 PM - 7:15 PM EST (Every Friday and Saturday)</li>
              <li>📍<a href="https://meet.google.com/ogz-xrus-hnk" target="_blank">Google Meet Link</a></li>
            </ul>
  
            <p>All relevant details about the class, including the Google Meet link, quizzes, and labs, can be accessed through the "Participant Corner" </p>
            <p>We look forward to engaging with you in a fun, interactive journey to explore and build a strong foundation in Generative AI concepts.</p>
          </div>
        `),
        showMore: false
      },
      {
        title: 'Our First Open House Concluded',
        date: 'November 16, 2024',
        content: 'Thank you to everyone who joined our Open House event on Saturday, November 17, 2024.',
        additionalDetails: this.sanitizeHtml(`
          <div>
          It was wonderful to connect with parents and students interested in Generative AI. Feel free to contact us with any questions!
          </div>
        `),
        showMore: false
      },
      {
        title: 'Welcome Email Sent – Check Your Inbox',
        date: 'November 6, 2024',
        content: 'A Welcome email has been sent to all registrants of our Basic Generative AI course.',
        additionalDetails: this.sanitizeHtml(`
          <div>
            <p>If you registered and haven’t received the Welcome email, please check your spam or junk folder. The email was sent from <u>team@thinkaitoday.com</u>.</p>
            <p><u>Note:</u> Future course updates will be sent via email and posted on this site.</p>
          </div>
        `),
        showMore: false
      },
      {
        title: 'Registration Open for Basic Course: Introduction to Generative AI',
        date: 'November 1, 2024',
        content: 'Registrations are now open for our Basic Generative AI course, designed for beginners...',
        additionalDetails: this.sanitizeHtml(`
          <div>
            <p>This course offers a beginner-friendly introduction to Generative AI with hands-on practice sessions to build foundational skills.</p>
            <h4>Course Highlights:</h4>
            <ul>
              <li>Understand the basics of Generative AI</li>
              <li>Engage in hands-on, interactive practice</li>
              <li>Gain foundational skills to progress to more advanced topics</li>
            </ul>
            <p><a href="registration" >Register Here</a><br>
          </div>
        `),
        showMore: false
      }
    ];
  }

  toggleShowMore(update: any) {
    update.showMore = !update.showMore;
  }

  sanitizeHtml(htmlContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }
}
