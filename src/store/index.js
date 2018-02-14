import Vue from 'vue'
import Vuex from 'vuex'
import cognitoConfig from '@/../config/cognito'
import CognitoAuth from 'vue-auth-cognito'
import Kvs from '@/store/modules/kvs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined: false,
    isSelf: false
  },
  mutations: {
  },
  getters: {
  },
  modules: {
    cognito: new CognitoAuth(cognitoConfig),
    Kvs
  }
})
