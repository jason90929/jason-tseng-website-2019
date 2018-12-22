import { updateObject } from '../resources/utility'

const initialState = {
  currentPage: 0,
  maxPage: 5,
  isPaginationChanging: false
}

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return updateObject(state, {
        currentPage: action.payload
      })
    case 'TOGGLE_PAGINATION_CHANGING':
      return updateObject(state, {
        isPaginationChanging: action.payload
      })
    default:
      return state
  }
}

export default pageReducer
