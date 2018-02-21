import _apiConfig from '@/../config/api'
import _api from '@/domain/api.js'
import decoder from 'jwt-decode'

const api = new _api(_apiConfig)

const state = {
  items: []
}

const getters = {
  items: state => state.items,
  itemsCount: state => state.items.length
}

const actions = {
  fetchKVs ({ commit, rootState }, targetId) {
    api.fetchKVs(targetId).then((res) => {
      commit('setItems', res)
    })
  },
  insertKV ({ commit, rootState }, item) {
    const user = decoder(rootState.userStore.user.tokens.IdToken)

    api.insertKV(user, item).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  },
  deleteKV ({ commit, rootState }, item) {
    const user = decoder(rootState.userStore.user.tokens.IdToken)

    api.deleteKV(user, item).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
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
