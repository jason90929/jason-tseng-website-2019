const initLoading = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'INIT_LOADING' })
  }
}

const increment = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'INCREMENT' })
    const { currentLoading, maxLoading } = getState().loading
    if (currentLoading >= maxLoading) {
      dispatch({ type: 'LOADED' })
    }
  }
}

const setMaxLoading = (number) => {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_MAX_LOADING', payload: number })
  }
}

export default {
  initLoading,
  increment,
  setMaxLoading
}
