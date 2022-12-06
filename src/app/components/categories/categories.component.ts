import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from "rxjs";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoryService) {
  }
}

