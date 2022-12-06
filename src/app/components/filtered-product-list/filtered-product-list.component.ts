import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { combineLatest, Observable, } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import {map} from "rxjs/operators";


@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoryService.getAll();
  readonly products$: Observable<ProductModel[]> = combineLatest([
  this._productsService.getAll(),
  this._activatedRoute.params
    ]).pipe(map(([products, params]: [ProductModel[], Params]) => {
return products.filter((product: ProductModel) => product.category === params['category']);
  }));

  constructor(private _categoryService: CategoryService, private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }
}