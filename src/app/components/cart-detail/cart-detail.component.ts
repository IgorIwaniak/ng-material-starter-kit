import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartDetailModel } from '../../models/cart-detail.model';
import { CartDetailService } from '../../services/cart-detail.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailComponent {
  readonly data$: Observable<CartDetailModel> = this._activatedRoute.params.pipe(switchMap(data => this._cartDetailService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartDetailService: CartDetailService) {
  }
}
