import apiConfig from '@/../config/api'
import Api from '@/domain/api/actions'

const Kvs = new Api(apiConfig)
// initial state
// shape: [{ id, quantity }]
const state = {
  items: []
}

// getters
const getters = {
  items: state => {
    return state.items
  },
  itemsCount: state => {
    return state.items.length
  }
}

// actions
const actions = {
  fetchKVs ({ commit }) {
    Kvs.fetchKVs('a9b').then((res) => {
      commit('setItems', res)
    })
  }
}

// mutations
const mutations = {
  setItems (state, items) {
    state.items = items
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
