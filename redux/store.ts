import { createStore } from 'redux';
import scoreReducer from './scoreReducer';

const store = createStore(scoreReducer);

export default store;
