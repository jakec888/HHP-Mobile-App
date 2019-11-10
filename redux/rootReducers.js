import {combineReducers} from 'redux';
import sampleReducers from './reducers/sampleReducers.reducers';

export const rootReducer = combineReducers({
  Sample: sampleReducers,
});
