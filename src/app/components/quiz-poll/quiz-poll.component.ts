import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-poll',
  standalone: true,
  imports: [],
  templateUrl: './quiz-poll.component.html',
  styleUrl: './quiz-poll.component.scss'
})
export class QuizPollComponent {

  openMentimeter() {
    window.open('https://www.mentimeter.com/', '_blank');
  }

}
