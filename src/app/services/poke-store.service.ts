import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as pokeSelectors from './../store/selectors';
import * as pokeActions from './../store/actions';

@Injectable({ providedIn: 'root' })
export class PokemonStoreService {
  constructor(private store: Store) {}

  pokemon$ = this.store.select(pokeSelectors.selectResult);
  nameFilter$ = this.store.select(pokeSelectors.selectName);

  public loadPokemon() {
    this.store.dispatch(pokeActions.searchPokemon());
  }

  public searchPokemon(name: string) {
    this.store.dispatch(pokeActions.updateName({ name }));
    this.store.dispatch(pokeActions.searchPokemon());
  }
}
