import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { CatComponent } from './components/cat/cat.component';
import { CreateAgeComponent } from './components/create-age/create-age.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { UserComponent } from './components/user/user.component';
import { TestComponent } from './components/test/test.component';
import { CountryComponent } from './components/country/country.component';
import { JokeComponent } from './components/joke/joke.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { SortedEmployeesListComponent } from './components/sorted-employees-list/sorted-employees-list.component';
import { BeersComponent } from './components/beers/beers.component';
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
import { CatComponentModule } from './components/cat/cat.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { CreateAgeComponentModule } from './components/create-age/create-age.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductDetailsServiceModule } from './services/product-details.service-module';
import { CartDetailComponentModule } from './components/cart-detail/cart-detail.component-module';
import { CartDetailServiceModule } from './services/cart-detail.service-module';
import { UserComponentModule } from './components/user/user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { TestComponentModule } from './components/test/test.component-module';
import { TestServiceModule } from './services/test.service-module';
import { CountryComponentModule } from './components/country/country.component-module';
import { CountryServiceModule } from './services/country.service-module';
import { JokeComponentModule } from './components/joke/joke.component-module';
import { JokeServiceModule } from './services/joke.service-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { SortedEmployeesListComponentModule } from './components/sorted-employees-list/sorted-employees-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { BeersComponentModule } from './components/beers/beers.component-module';
import { BeersServiceModule } from './services/beers.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'categories', component: CategoriesComponent },
      { path: 'crypto', component: CryptoComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent },
      { path: 'checkbox-categories', component: CheckBoxComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'cat-fact', component: CatComponent },
      { path: 'age/:name', component: CreateAgeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart/:id', component: CartDetailComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'user/:id', component: UserComponent },
      { path: 'test', component: TestComponent },
      { path: 'country/:name', component: CountryComponent },
      { path: 'joke', component: JokeComponent },
      { path: 'products/:category', component: FilteredProductListComponent },
      { path: 'products', component: FilteredProductListComponent },
      { path: 'sorted-products', component: SortedProductListComponent },
      { path: 'employees', component: SortedEmployeesListComponent },
      { path: 'beers', component: BeersComponent }
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
    CatComponentModule,
    CatServiceModule,
    CreateAgeComponentModule,
    AgeServiceModule,
    ProductDetailComponentModule,
    ProductDetailsServiceModule,
    CartDetailComponentModule,
    CartDetailServiceModule,
    UserComponentModule,
    UserServiceModule,
    TestComponentModule,
    TestServiceModule,
    CountryComponentModule,
    CountryServiceModule,
    JokeComponentModule,
    JokeServiceModule,
    FilteredProductListComponentModule,
    SortedProductListComponentModule,
    SortedEmployeesListComponentModule,
    EmployeesServiceModule,
    BeersComponentModule,
    BeersServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
