import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckBoxComponent } from './check-box.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CheckBoxComponent],
  providers: [],
  exports: [CheckBoxComponent]
})
export class CheckBoxComponentModule {
}
