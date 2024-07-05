import { Component } from '@angular/core';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-time-bandit',
  standalone: true,
  imports: [EmployeeFormComponent],
  templateUrl: './time-bandit.component.html',
  styleUrl: './time-bandit.component.scss',
})
export class TimeBanditComponent {}
