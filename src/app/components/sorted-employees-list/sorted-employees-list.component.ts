import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, of, combineLatest} from 'rxjs';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeesService } from '../../services/employees.service';
import {map} from "rxjs/operators";


@Component({
  selector: 'app-sorted-employees-list',
  templateUrl: './sorted-employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedEmployeesListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  readonly employees$: Observable<EmployeesModel[]> = combineLatest([
  this._employeesService.getAll(),
    this.order$
]).pipe(
map(([employees, order]: [EmployeesModel[], string]) => {
  return employees.sort((a, b) => {
    if(a.employee_salary > b.employee_salary) return order === 'asc' ? 1 : -1;
    if(a.employee_salary < b.employee_salary) return order === 'asc' ? -1 : 1;
    return 0;
  })
})
  )

public orders: Observable<string[]> = of(['asc','desc'])
  constructor(private _employeesService: EmployeesService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
