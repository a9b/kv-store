import Vue from 'vue'
import Vuex from 'vuex'
import itemStore from '@/store/modules/itemStore'
import userStore from '@/store/modules/userStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  modules: {
    itemStore,
    userStore
  }
})
