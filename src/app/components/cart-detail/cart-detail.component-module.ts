import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CartDetailComponent } from './cart-detail.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatButtonToggleModule],
  declarations: [CartDetailComponent],
  providers: [],
  exports: [CartDetailComponent]
})
export class CartDetailComponentModule {
}
