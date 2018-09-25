const state = {
  isResumeModalActive: false
}

export const getters = {
  isResumeModalActive: state => state.isResumeModalActive
}

export const actions = {
  showResumeModal ({ commit, state }) {
    if (state.isResumeModalActive === false) {
      commit('TOGGLE_RESUME_MODAL_ACTIVE', true)
    }
  },

  toggleResumeModal ({ dispatch, state }) {
    if (state.isResumeModalActive === true) {
      dispatch('closeResumeModal')
    } else {
      dispatch('showResumeModal')
    }
  },

  closeResumeModal ({ commit, state }) {
    if (state.isResumeModalActive === true) {
      commit('TOGGLE_RESUME_MODAL_ACTIVE', false)
    }
  }
}

export const mutations = {
  TOGGLE_RESUME_MODAL_ACTIVE (state, bool = false) {
    state.isResumeModalActive = bool
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
