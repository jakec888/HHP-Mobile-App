import {
  UPDATE_EMAIL,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_APPLICANT,
  UPDATE_AGE_RANGE,
  UPDATE_LOCATION,
  UPDATE_REFERENCE,
} from '../actions/ppa.actions';

const initialState = {
  email: '',
  first_name: '',
  last_name: '',
  applicant: '',
  age: '',
  location: '',
  reference: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case UPDATE_EMAIL:
      return {...state, email: payload.email};
    case UPDATE_FIRST_NAME:
      return {...state, first_name: payload.first_name};
    case UPDATE_LAST_NAME:
      return {...state, last_name: payload.last_name};
    case UPDATE_APPLICANT:
      return {...state, applicant: payload.applicant};
    case UPDATE_AGE_RANGE:
      return {...state, age: payload.age};
    case UPDATE_LOCATION:
      return {...state, location: payload.location};
    case UPDATE_REFERENCE:
      return {...state, reference: payload.reference};
    default:
      return state;
  }
};
