import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PersonModel } from '../../models/person.model';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'app-employee-master-detail',
  templateUrl: './employee-master-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeMasterDetailComponent {
  readonly list$: Observable<PersonModel[]> = this._employeeDetailsService.getAll();
  private _selectedEmployeesIdSubject: Subject<string> = new Subject<string>();
  public SelectedEmployeesId$: Observable<string> = this._selectedEmployeesIdSubject.asObservable();
  readonly details$: Observable<PersonModel> = this.SelectedEmployeesId$.pipe(switchMap(data => this._employeeDetailsService.getOne(data)));

  constructor(private _employeeDetailsService: EmployeeDetailsService) {
  }

  selectEmployees(id: string): void {
    this._selectedEmployeesIdSubject.next(id)
  }
}
