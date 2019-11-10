import { UPDATE_NAME } from '../actions/ppa.actions'

const initialState = {
  name: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload.name }
    default:
      return state
  }
}
