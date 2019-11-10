import {combineReducers} from 'redux';
import ppaReducers from './reducers/ppa.reducers';

export const rootReducer = combineReducers({
  PPA: ppaReducers,
});
