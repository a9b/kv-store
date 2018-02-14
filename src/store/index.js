import Vue from 'vue'
import Vuex from 'vuex'
import cognitoConfig from '@/../config/cognito'
import CognitoAuth from 'vue-auth-cognito'
import itemStore from '@/store/modules/itemStore'
import userStore from '@/store/modules/userStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined: false,
    isAuthor: false
  },
  mutations: {
  },
  getters: {
  },
  modules: {
    cognito: new CognitoAuth(cognitoConfig),
    itemStore,
    userStore
  }
})
