import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';  // Import MatSidenavModule
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, 
    MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, 
    MatSidenavModule, MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'Think AI Today!';

  // Use the non-null assertion operator to indicate that sidenav will be initialized later
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  ngAfterViewInit() {
    if (this.sidenav) {
      // Ensure sidenav is available after view initialization
      console.log('Sidenav initialized!');
    }
  }

  // Close sidenav after an action
  closeSidenav() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  openQuizPollZone() {
    window.open('https://www.menti.com/al3ocy7vjgtr', '_blank');
    this.closeSidenav();  // Close sidenav after the action
  }

  openGoogleMeet() {
    window.open('https://meet.google.com/ogz-xrus-hnk', '_blank');
    this.closeSidenav();  // Close sidenav after the action
  }

  openLab() {
    window.open('http://4.255.25.222:8511', '_blank');
    this.closeSidenav();  // Close sidenav after the action
  }
}
