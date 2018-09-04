import { createStore } from 'redux'

import reducer from './reducer'

const initialState = {
  user: {
    login: {}
  },
  message: ''
}

const reduxStore = createStore(reducer)

export { initialState, reduxStore }
