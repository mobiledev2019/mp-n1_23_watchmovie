import { createStore } from 'redux';
import allReducers from '../reducer';

let store = createStore(allReducers);

export default store;