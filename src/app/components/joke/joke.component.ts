import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { JokeService } from '../../services/joke.service';
import {JokesModel} from "../../models/jokes.model";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeComponent {
  readonly data$: Observable<JokesModel> = this._activatedRoute.params.pipe(switchMap(data => this._jokeService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _jokeService: JokeService) {
  }
}
