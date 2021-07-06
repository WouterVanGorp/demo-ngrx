import { Injectable } from '@angular/core';

import { EMPTY } from 'rxjs';
import {
  map,
  catchError,
  withLatestFrom,
  switchMap,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { State } from './state';
import { PokemonService } from '../services/pokemon.service';

import * as pokeSelectors from './selectors';
import * as pokeActions from './actions';

@Injectable()
export class PokemonEffects {
  constructor(
    private store: Store<State>,
    private actions$: Actions,
    private pokeApi: PokemonService
  ) {}

  loadPokeman = createEffect(() =>
    this.actions$.pipe(
      ofType(pokeActions.searchPokemon),
      withLatestFrom(this.store.select(pokeSelectors.selectName)),
      switchMap(([_, name]) =>
        this.pokeApi.getCards(name).pipe(
          map((pokemon) => pokeActions.updatePokemon({ pokemon })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
