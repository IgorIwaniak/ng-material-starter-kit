import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CountryDetailModel } from '../../models/country-detail.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent {
  readonly data$: Observable<CountryDetailModel> = this._activatedRoute.params.pipe(switchMap(data => this._countryService.getOne(data['name'])));

  constructor(private _activatedRoute: ActivatedRoute, private _countryService: CountryService) {
  }
}
