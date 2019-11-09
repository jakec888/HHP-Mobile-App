import {combineReducers} from 'redux';
import {reducer as formReducers} from 'redux-form';

import sampleReducers from './reducers/sampleReducers.reducers';

export const rootReducer = combineReducers({
  ReduxForm: formReducers,
  Sample: sampleReducers,
});
