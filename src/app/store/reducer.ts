import { createReducer, on } from '@ngrx/store';

import { INITIAL_STATE } from './state';
import * as pokeActions from './actions';

const _pokemonReducer = createReducer(
  INITIAL_STATE,
  on(pokeActions.updateName, (state, { name }) => ({
    ...state,
    name,
  })),
  on(pokeActions.updatePokemon, (state, { pokemon }) => ({
    ...state,
    result: pokemon,
  }))
);

export function pokemonReducer(state, action) {
  return _pokemonReducer(state, action);
}
