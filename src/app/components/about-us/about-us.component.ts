import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule,MatCardModule,CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  summary: string = `
    At Think AI Today, we are committed to empowering individuals with the knowledge of Artificial Intelligence, 
    particularly Generative AI, as an essential life skill for the future.
  `;

  missionPoints: string[] = [
    'Making knowledge of Artificial Intelligence, especially Generative AI, accessible to everyone.',
    'Understanding AI is not just an important skill—it\'s a vital life skill for the future.',
    'Empowering individuals of all ages, starting with middle and high school students, to harness the transformative potential of AI.',
    'Fostering a supportive learning environment to inspire curiosity, creativity, and confidence in navigating AI technology.',
    'Building a brighter future where AI knowledge is a fundamental part of every individual\'s toolkit.'
  ];
}
