import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductDetailsService } from '../../services/product-details.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  readonly data$: Observable<ProductModel> = this._activatedRoute.params.pipe(switchMap(data => this._productDetailsService.getOne(data['id'])))

  constructor(private _productDetailsService: ProductDetailsService, private _activatedRoute: ActivatedRoute) {
  }
}
