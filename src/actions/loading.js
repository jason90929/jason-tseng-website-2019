const increment = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'INCREMENT' })
    const { currentLoading, maxLoading } = getState().loading
    if (currentLoading >= maxLoading) {
      dispatch({ type: 'LOADED' })
    }
  }
}

export default {
  increment
}