export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_APPLICANT = 'UPDATE_APPLICANT';
export const UPDATE_AGE_RANGE = 'UPDATE_AGE_RANGE';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_REFERENCE = 'UPDATE_REFERENCE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';
export const UPDATE_REASON = 'UPDATE_REASON';
export const SUBMIT_PPA = 'SUBMIT_PPA';

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

export const updateReference = reference => {
  return dispatch => {
    dispatch({
      type: UPDATE_REFERENCE,
      payload: {reference: reference},
    });
  };
};

export const updateService = service => {
  return dispatch => {
    dispatch({type: UPDATE_SERVICE, payload: {service: service}});
  };
};

export const updateIssue = issue => {
  return dispatch => {
    dispatch({
      type: UPDATE_ISSUE,
      payload: {issue: issue},
    });
  };
};

export const updateReason = reason => {
  return dispatch => {
    dispatch({
      type: UPDATE_REASON,
      payload: {reason: reason},
    });
  };
};

export const submitPPA = () => ({
  type: SUBMIT_PPA,
  payload: {
    email: '',
    first_name: '',
    last_name: '',
    applicant: '',
    age: '',
    reference: '',
    location: '',
    service: '',
    issue: '',
    reason: '',
  },
});
