import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CountryComponent } from './country.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CountryComponent],
  providers: [],
  exports: [CountryComponent]
})
export class CountryComponentModule {
}
