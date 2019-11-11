export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
export const UPDATE_APPLICANT = 'UPDATE_APPLICANT'

export const updateEmail = email => {
    return dispatch => {
        dispatch({
            type: UPDATE_EMAIL,
            payload: { email: email },
        })
    }
}

export const updateFirstName = first_name => {
    return dispatch => {
        dispatch({
            type: UPDATE_FIRST_NAME,
            payload: { first_name: first_name },
        })
    }
}

export const updateLastName = last_name => {
    return dispatch => {
        dispatch({
            type: UPDATE_LAST_NAME,
            payload: { last_name: last_name },
        })
    }
}

export const updateApplicant = applicant => {
    return dispatch => {
        dispatch({
            type: UPDATE_APPLICANT,
            payload: { applicant: applicant },
        })
    }
}
