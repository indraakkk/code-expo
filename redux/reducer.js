import { initialState } from './store'

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN': {
    return {
      user: {
        ...state.user,
        login: action.payload.register
      },
      message: action.payload.message
    }
  }

  default:
    return state
  }
}

export default reducer
