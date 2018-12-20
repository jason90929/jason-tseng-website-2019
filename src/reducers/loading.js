import { updateObject } from '../resources/utility'

const initialState = {
  currentLoading: 0,
  maxLoading: 100,
  isLoadingComplete: false
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.currentLoading >= state.maxLoading) {
        return updateObject(state, {
          isLoadingComplete: true
        })
      } else {
        return updateObject(state, {
          currentLoading: state.currentLoading + 1
        })
      }
    default:
      return state
  }
}

export default loadingReducer
