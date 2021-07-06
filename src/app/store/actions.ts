import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../models';

export const updateName = createAction(
  '[Pokemon] Update name',
  props<{ name: string }>()
);

export const searchPokemon = createAction('[Pokemon] Search pokemon');

export const updatePokemon = createAction(
  '[Pokemon] Update pokemon',
  props<{ pokemon: Pokemon[] }>()
);

