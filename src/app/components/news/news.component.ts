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
        title: 'Join Us for an Online Open House!',
        date: 'November 14, 2024',
        content: 'We warmly invite you to join our upcoming Open House, whether you’ve registered or are still considering!',
        additionalDetails: this.sanitizeHtml(`
          <div>
            <p>This event offers the perfect chance to meet us, ask questions, and learn about our hands-on approach to teaching Generative AI—a vital skill for today's world.</p>
  
            <h4>Open House Details:</h4>
            <ul>
              <li>📅 Saturday, November 16, 2024</li>
              <li>⏰ 6:00 PM - 7:00 PM EST</li>
              <li>📍<a href="https://meet.google.com/ogz-xrus-hnk" target="_blank">Google Meet Link</a></li>
            </ul>
  
            <p>Don’t miss this opportunity to see how our course can benefit your child’s future!</p>
            <p>We look forward to connecting with you!</p>
          </div>
        `),
        showMore: false
      },
      {
        title: 'Welcome Email Sent – Check Your Inbox!',
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
