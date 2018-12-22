const increment = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'INCREMENT' })
    const { currentLoading, maxLoading } = getState().loading
    if (currentLoading >= maxLoading) {
      dispatch({ type: 'LOADING_COMPLETE' })
    }
  }
}

export default {
  increment
}