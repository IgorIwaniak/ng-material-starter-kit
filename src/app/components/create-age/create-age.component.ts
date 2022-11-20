import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CreateAgeModel } from '../../models/create-age.model';
import { AgeService } from '../../services/age.service';

@Component({
  selector: 'app-create-age',
  templateUrl: './create-age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAgeComponent {
  readonly data$: Observable<CreateAgeModel> = this._activatedRoute.params.pipe(switchMap(data => this._ageService.getOne(data['age'])));

  constructor(private _activatedRoute: ActivatedRoute, private _ageService: AgeService) {
  }
}
