import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl(),
    id: new FormControl()
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService.create({
      name: employeeForm.get('name')?.value,
      salary: employeeForm.get('salary')?.value,
      age: employeeForm.get('age')?.value,

    }).subscribe();
  }
}
