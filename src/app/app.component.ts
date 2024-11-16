import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule,MatCardModule, MatIconModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Think AI Today!';

  openQuizPollZone() {
    // window.open('https://www.mentimeter.com/46436087', '_blank');
    window.open('https://www.menti.com/al3ocy7vjgtr', '_blank');
  }

  openGoogleMeet() {
    // window.open('https://www.mentimeter.com/46436087', '_blank');
    window.open('https://meet.google.com/ogz-xrus-hnk', '_blank');
  }

}
