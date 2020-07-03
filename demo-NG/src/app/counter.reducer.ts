import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, test } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
  on(test, state => 100),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
