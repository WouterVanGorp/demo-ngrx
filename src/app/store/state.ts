import { Pokemon } from '../models';

export const POKE_STATE_KEY = 'pokemon';

export interface State {
  name: string;
  result: Pokemon[];
}

export const INITIAL_STATE: State = {
  name: undefined,
  result: [],
};
