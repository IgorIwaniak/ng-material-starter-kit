import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoryServiceModule } from './services/category.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products', component: ProductListComponent }, {
    path: 'categories', component: CategoriesComponent }]), ProductListComponentModule,
    ProductsServiceModule, CategoriesComponentModule, CategoryServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
