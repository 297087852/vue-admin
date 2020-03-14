const state = {
  isCollaseSidebar: false
}

const mutations = {
  TOGGLE_COLLAPSE (state) {
    state.isCollaseSidebar = !state.isCollaseSidebar
  }
}

const actions = {
  toggleCollapse ({ commit }) {
    commit('TOGGLE_COLLAPSE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
