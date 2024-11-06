import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabStationComponent } from './lab-station.component';

describe('LabStationComponent', () => {
  let component: LabStationComponent;
  let fixture: ComponentFixture<LabStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
