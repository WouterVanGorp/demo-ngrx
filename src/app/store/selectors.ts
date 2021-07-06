import { createFeatureSelector, createSelector } from '@ngrx/store';

import { POKE_STATE_KEY, State } from './state';

const state = createFeatureSelector<State>(POKE_STATE_KEY);

export const selectName = createSelector(state, (state: State) => state.name);

export const selectResult = createSelector(
  state,
  (state: State) => state.result
);
