import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
