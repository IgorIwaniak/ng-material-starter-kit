import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CheckBoxComponentModule } from './components/check-box/check-box.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProducttServiceModule } from './services/productt.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterComponentModule } from './components/register/register.component-module';
import { RegisterServiceModule } from './services/register.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'crypto', component: CryptoComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent },
      { path: 'checkbox-categories', component: CheckBoxComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterComponent },
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategoriesComponentModule,
    CategoryServiceModule,
    CryptoComponentModule,
    CryptoServiceModule,
    PublicHolidaysComponentModule,
    PublicHolidaysServiceModule,
    CheckBoxComponentModule,
    CategoriesMenuComponentModule,
    ProductFormComponentModule,
    ProducttServiceModule,
    EmployeeFormComponentModule,
    EmployeeServiceModule,
    LoginFormComponentModule,
    LoginServiceModule,
    RegisterComponentModule,
    RegisterServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
