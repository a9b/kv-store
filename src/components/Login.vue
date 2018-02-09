<template>
  <div class="pure-u pure-u-1-2 layout-center">
    <h1>Login</h1>
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label for="name">Username</label>
          <input id="name" v-model="username" placeholder="Username">
        </div>

        <div class="pure-control-group">
          <label for="password">Password</label>
          <input v-model="password" id="password" autocomplete="password" type="password" placeholder="Password" required>
        </div>

        <div class="pure-controls">
          <button v-on:click="login()" type="submit" class="pure-button pure-button-primary">Login</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js'
import AWS from 'aws-sdk'
import Config from '@/../config/cognito.js'

export default {
  name: 'login',
  data () {
    return {
      username: 'a9b',
      password: 'Pass1234'
    }
  },
  methods: {
    login: function () {
      var poolData = { UserPoolId: Config.UserPoolId, ClientId: Config.ClientId }
      var userPool = new CognitoUserPool(poolData)
      var userData = { Username: this.username, Pool: userPool }
      var cognitoUser = new CognitoUser(userData)
      var authenticationData = { Username: this.username, Password: this.password }
      var authenticationDetails = new AuthenticationDetails(authenticationData)
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          console.log('access token + ' + result.getAccessToken().getJwtToken())
          AWS.config.region = Config.Region
          var key = 'cognito-idp.' + Config.Region + '.amazonaws.com/' + Config.UserPoolId
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: Config.IdentityPoolId,
            Logins: {
              [key]: result.getIdToken().getJwtToken()
            }
          })

          AWS.config.credentials.refresh((error) => {
            if (error) {
              console.error(error)
            } else {
              console.log('Successfully logged!')
            }
          })
        },
        onFailure: function (err) {
          alert(err)
        }
      })
    }
  }
}
</script>

<style>
.layout-center {
    display: block;
    margin: 0 auto;
}
</style>
