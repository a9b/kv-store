const state = {
  user: {},
  isLogined: false,
  isAuthor: false
}

const getters = {
  isLogined: state => state.isLogined,
  isAuthor: state => state.isAuthor
}

const actions = {
  toLogin ({ commit }) {
    commit('toLogin')
  },
  toLogout ({ commit }) {
    commit('toLogout')
  }
}

const mutations = {
  toLogin (state) {
    state.isLogined = true
  },
  toLogout (state) {
    state.isLogined = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
