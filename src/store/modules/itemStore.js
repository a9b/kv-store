import _apiConfig from '@/../config/api'
import _api from '@/domain/api.js'

const api = new _api(_apiConfig)

const state = {
  items: []
}

const getters = {
  items: state => state.items,
  itemsCount: state => state.items.length
}

const actions = {
  fetchKVs ({ commit, rootState }) {
    api.fetchKVs('a9b').then((res) => {
      commit('setItems', res)
    })
  }
}

const mutations = {
  setItems (state, items) {
    state.items = items
  },
  toAuthor (state) {
    state.isAuthor = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
