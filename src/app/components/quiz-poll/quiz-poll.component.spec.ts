import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPollComponent } from './quiz-poll.component';

describe('QuizPollComponent', () => {
  let component: QuizPollComponent;
  let fixture: ComponentFixture<QuizPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
