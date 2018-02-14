import ActionsFactory from './actions.js'
const state = {
  response: null
}

export default class Api {
  constructor (config) {
    this.state = state
    this.actions = new ActionsFactory(config)
  }
}
