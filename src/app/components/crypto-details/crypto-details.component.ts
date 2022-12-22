import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoMasterService } from '../../services/crypto-master.service';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoDetailsComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoMasterService.getAll();
  private _detailsSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public details$: Observable<CryptoModel> = this._detailsSubject.asObservable();

  constructor(private _cryptoMasterService: CryptoMasterService) {
  }

  selectCrypto(crypto: CryptoModel): void {
    this._detailsSubject.next(crypto)
  }
}

