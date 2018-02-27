import cognitoConfig from '@/../config/cognito'
import CognitoAuth from 'vue-auth-cognito'
import decoder from 'jwt-decode'

const _ = new CognitoAuth(cognitoConfig)
_.getters = {}
_.getters.userCustomToken = (state) => {
  if (state.user === null) return null
  return decoder(state.user.tokens.IdToken)['custom:token']
}
_.getters.userId = (state) => {
  if (state.user === null) return null
  return state.user.username
}
export { _ as default }
