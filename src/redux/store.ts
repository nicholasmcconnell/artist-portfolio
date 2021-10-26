import { createStore } from 'redux';
import { registerUserReducer } from './reducer';

export const store = createStore(registerUserReducer);