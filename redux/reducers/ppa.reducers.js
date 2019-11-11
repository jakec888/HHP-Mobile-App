import {
  UPDATE_EMAIL,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
} from '../actions/ppa.actions';

const initialState = {
  email: '',
  first_name: '',
  last_name: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case UPDATE_EMAIL:
      return {...state, email: payload.email};
    case UPDATE_FIRST_NAME:
      return {...state, first_name: payload.first_name};
    case UPDATE_LAST_NAME:
      return {...state, last_name: payload.last_name};
    default:
      return state;
  }
};
