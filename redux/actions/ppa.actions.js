export const UPDATE_NAME = 'UPDATE_NAME'

export const updateName = (name) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_NAME,
      payload: { name: name }
    })
  }
}
