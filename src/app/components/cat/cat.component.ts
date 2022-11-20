import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatModel } from '../../models/cat.model';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatComponent {
  readonly data$: Observable<CatModel> = this._catService.getOne(undefined);

  constructor(private _catService: CatService) {
  }
}
