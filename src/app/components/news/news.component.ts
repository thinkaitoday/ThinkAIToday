import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsUpdates = [
    {
      title: 'Welcome Email Sent – Check Your Inbox!',
      date: 'November 6, 2024',
      content: 'A Welcome email has been sent to all registrants of our Basic Generative AI course.',
      additionalDetails: 'If you registered and haven’t received the Welcome email, please check your spam or junk folder. The email was sent from team@thinkaitoday.com. Future course updates will be sent via email and posted on this site.',
      showMore: false
    },
    {
      title: 'Registration Open for Basic Course: Introduction to Generative AI',
      date: 'November 1, 2024',
      content: 'Registrations are now open for our Basic Generative AI course, designed for beginners...',
      additionalDetails: 'The course includes beginner-friendly hands-on practice sessions to build foundational skills in Generative AI.',
      showMore: false
    },
    // Add more updates as needed
  ];

  toggleShowMore(update: any) {
    update.showMore = !update.showMore;
  }
}
