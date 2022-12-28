import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { EmployeeMasterDetailComponent } from './employee-master-detail.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule
  ],
  declarations: [EmployeeMasterDetailComponent],
  providers: [],
  exports: [EmployeeMasterDetailComponent]
})
export class EmployeeMasterDetailComponentModule {
}
