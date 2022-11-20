import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CatComponent } from './cat.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule,RouterModule],
  declarations: [CatComponent],
  providers: [],
  exports: [CatComponent]
})
export class CatComponentModule {
}
