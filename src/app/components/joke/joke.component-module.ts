import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { JokeComponent } from './joke.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [JokeComponent],
  providers: [],
  exports: [JokeComponent]
})
export class JokeComponentModule {
}
