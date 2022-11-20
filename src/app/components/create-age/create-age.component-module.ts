import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CreateAgeComponent } from './create-age.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CreateAgeComponent],
  providers: [],
  exports: [CreateAgeComponent]
})
export class CreateAgeComponentModule {
}
