import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-interest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-form.component.html',
  styleUrl: './google-form.component.scss'
})
export class GoogleFormComponent {
    code: string = 'STUDENT_BEGINNER';
  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      var code = params.get('code');
      if(code){
        this.code = code;
      }

    });
  }

}
