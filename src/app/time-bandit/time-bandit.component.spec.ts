import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBanditComponent } from './time-bandit.component';

describe('TimeBanditComponent', () => {
  let component: TimeBanditComponent;
  let fixture: ComponentFixture<TimeBanditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeBanditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeBanditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
