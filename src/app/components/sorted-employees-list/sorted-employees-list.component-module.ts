import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortedEmployeesListComponent } from './sorted-employees-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [SortedEmployeesListComponent],
  providers: [],
  exports: [SortedEmployeesListComponent]
})
export class SortedEmployeesListComponentModule {
}
