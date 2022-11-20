import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProducttService } from '../../services/productt.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly producttForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    image: new FormControl()
  });
  readonly categories$: Observable<string[]> = this._categoryService.getAll();

  constructor(private _producttService: ProducttService, private _categoryService: CategoryService) {
  }

  onProducttFormSubmitted(producttForm: FormGroup): void {
    this._producttService.create({
      title: producttForm.get('title')?.value,
      price: producttForm.get('price')?.value,
      description: producttForm.get('description')?.value,
      category: producttForm.get('category')?.value,
      image: producttForm.get('image')?.value,
    }).subscribe();
  }
}
