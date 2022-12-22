import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CryptoDetailsComponent } from './crypto-details.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, MatGridListModule, NgForOf, AsyncPipe, MatListModule, MatButtonModule, NgIf],
  declarations: [CryptoDetailsComponent],
  providers: [],
  exports: [CryptoDetailsComponent]
})
export class CryptoDetailsComponentModule {
}
