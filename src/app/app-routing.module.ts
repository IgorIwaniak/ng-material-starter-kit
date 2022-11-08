import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'crypto', component: CryptoComponent }]),
    ProductListComponentModule, ProductsServiceModule, CategoriesComponentModule, CategoryServiceModule, CryptoComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
