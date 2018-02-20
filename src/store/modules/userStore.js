const state = {
  user: {
    userId: 'a9b',
    token: '283ef4ba-e679-442b-a287-fe0c00eaaaec'
  },
  isLogined: false,
  isAuthor: false
}

const getters = {
  isLogined: state => state.isLogined,
  isAuthor: state => state.isAuthor,
  getUser: state => state.user
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
