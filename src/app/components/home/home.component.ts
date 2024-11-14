import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    CommonModule  // Add CommonModule here
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  flashNews: boolean = true;

  ngOnInit() {
    // Automatically dismiss the flash message after 10 seconds
    setTimeout(() => {
      this.flashNews = false;
    }, 10000);
  }

  missionStatement: string = `
    At Think AI Today, we are dedicated to making knowledge of Artificial Intelligence, 
    especially Generative AI, accessible to everyone. We believe that in today’s rapidly 
    evolving world, understanding AI is not just an important skill—it's a vital life skill 
    for the future. Our mission is to empower individuals of all ages, starting with middle 
    and high school students, to harness the transformative potential of AI. By fostering a 
    supportive learning environment, we aim to inspire curiosity, creativity, and confidence 
    in navigating the complexities of AI technology. Together, we can build a brighter future 
    where AI knowledge is a fundamental part of every individual's toolkit.
  `;
}
