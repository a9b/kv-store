<template>
  <div>
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label for="name">Username</label>
          <input id="name" v-model="username" placeholder="Username" required>
        </div>

        <div class="pure-control-group">
          <label for="email">Email</label>
          <input v-model="email" id="email" type="email" placeholder="Email" required>
        </div>

        <div class="pure-control-group">
          <label for="password">Password</label>
          <input v-model="password" id="password" autocomplete="password" type="password" placeholder="Password" required>
        </div>

        <div class="pure-control-group">
          <label for="password-confirm">Password Confirm</label>
          <input v-model="passwordConfirm" id="password-confirm" autocomplete="password confirm" type="password" placeholder="Password Confirm" required>
        </div>

        <div class="pure-controls">
          <button v-on:click="signup()" type="submit" class="pure-button pure-button-primary">SignUp</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import Config from '@/../config/cognito.js'
import Uuid from 'uuid'

export default {
  name: 'inputForm',
  data () {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
      email: '',
      attributes: {}
    }
  },
  methods: {
    hoge: function () {
      console.log(this.username)
      this.$emit('child-set-username', this.username)
    },
    signup: function () {
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
