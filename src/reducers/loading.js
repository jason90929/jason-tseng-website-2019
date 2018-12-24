import { updateObject } from '../resources/utility'

const initialState = {
  currentLoading: 0,
  maxLoading: 1,
  isLoaded: false
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return updateObject(state, {
        currentLoading: state.currentLoading + 1
      })
    case 'LOADED':
      return updateObject(state, {
        isLoaded: true
      })
    default:
      return state
  }
}

export default loadingReducer
