const setPage = (page) => {
  return (dispatch, getState) => {
    if (page > getState().pagination.maxPage ||
      page < 0) {
      return
    }
    dispatch({
      type: 'SET_PAGE',
      payload: page
    })
    dispatch({
      type: 'TOGGLE_PAGINATION_CHANGING',
      payload: true
    })
    window.setTimeout(() => {
      dispatch({
        type: 'TOGGLE_PAGINATION_CHANGING',
        payload: false
      })
    }, 1000)
  }
}

export default {
  setPage
}
