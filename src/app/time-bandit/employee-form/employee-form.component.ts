import { Component } from '@angular/core';
import { Employee } from './employee-form.types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent {
  submitted = false;
  model = new Employee('John', 'Doe', 99);

  onSubmit() {
    this.submitted = true;
  }

  newEmployee(): void {
    //this.model = new Employee()
  }
}
