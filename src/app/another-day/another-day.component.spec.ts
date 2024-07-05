import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDayComponent } from './another-day.component';

describe('AnotherDayComponent', () => {
  let component: AnotherDayComponent;
  let fixture: ComponentFixture<AnotherDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnotherDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
