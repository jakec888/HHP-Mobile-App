export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_APPLICANT = 'UPDATE_APPLICANT';
export const UPDATE_AGE_RANGE = 'UPDATE_AGE_RANGE';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateEmail = email => {
  return dispatch => {
    dispatch({
      type: UPDATE_EMAIL,
      payload: {email: email},
    });
  };
};

export const updateFirstName = first_name => {
  return dispatch => {
    dispatch({
      type: UPDATE_FIRST_NAME,
      payload: {first_name: first_name},
    });
  };
};

export const updateLastName = last_name => {
  return dispatch => {
    dispatch({
      type: UPDATE_LAST_NAME,
      payload: {last_name: last_name},
    });
  };
};

export const updateApplicant = applicant => {
  return dispatch => {
    dispatch({
      type: UPDATE_APPLICANT,
      payload: {applicant: applicant},
    });
  };
};

export const updateAgeRange = age => {
  return dispatch => {
    dispatch({
      type: UPDATE_AGE_RANGE,
      payload: {age: age},
    });
  };
};

export const updateLocation = location => {
  return dispatch => {
    dispatch({
      type: UPDATE_LOCATION,
      payload: {location: location},
    });
  };
};
