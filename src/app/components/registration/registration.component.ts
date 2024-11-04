import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
    course_code: string = 'STUDENT_BEGINNER';
  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      var course_code = params.get('course_code');
      if(course_code){
        this.course_code = course_code;
      }

    });
  }

}
