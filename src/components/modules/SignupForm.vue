<template>
  <div class="box">
    <div class="alert alert-danger" v-show="errorMessage">
      {{ errorMessage }}
    </div>
    <form>
      <div class="field">
        <div class="control">
          <input v-model="username" :disabled="disableAllInputs" class="input is-large" placeholder="Username" autocomplete="username" autofocus="autofocus" required="required">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input v-model="email" :disabled="disableAllInputs" class="input is-large" placeholder="Email" autocomplete="email" required="required">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input v-model="password" :disabled="disableAllInputs" class="input is-large" type="password" autocomplete="new-password" placeholder="Password" required="required">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input v-model="passwordConfirm" :disabled="disableAllInputs" class="input is-large" type="password" autocomplete="new-password" placeholder="Password Confirm" required="required">
        </div>
      </div>

      <button v-on:click="signup()" type="submit" class="button is-block is-info is-large is-fullwidth">SignUp</button>
    </form>
  </div>
</template>

<script>
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import Config from '@/../config/cognito.js'
import Uuid from 'uuid'

export default {
  name: 'SignupForm',
  data () {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
      email: '',
      attributes: {},
      errorMessage: '',
      disableAllInputs: false
    }
  },
  methods: {
    signup: function () {
      this.disableAllInputs = true
      var poolData = { UserPoolId: Config.UserPoolId, ClientId: Config.ClientId }

      var attributeList = []
      var dataEmail = { Name: 'email', Value: this.email }
      // これサーバー側でやった方がよい
      var dataToken = { Name: 'custom:token', Value: Uuid() }
      attributeList.push(new CognitoUserAttribute(dataEmail))
      attributeList.push(new CognitoUserAttribute(dataToken))

      var userPool = new CognitoUserPool(poolData)
      userPool.signUp(this.username, this.password, attributeList, null, function (err, result) {
        if (err) {
          console.log(err)
          return
        }
        var cognitoUser = result.user

        console.log('user name is ' + cognitoUser.getUsername())
      })

      this.$emit('child-set-username', this.username)
    }
  }
}
</script>
