<template>
  <div>
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label for="name">Username</label>
          <input id="name" v-model="username" placeholder="Username" readonly>
        </div>

        <div class="pure-control-group">
          <label for="code">Confirmation Code</label>
          <input v-model="code" id="code" placeholder="Confirmation Code" required>
        </div>

        <div class="pure-controls">
          <button v-on:click="confirm()" type="submit" class="pure-button pure-button-primary">Confirm</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js'
import Config from '@/../config/cognito.js'

export default {
  name: 'confirm',
  data () {
    return {
      code: ''
    }
  },
  props: ['username'],
  methods: {
    confirm: function () {
      var poolData = {
        UserPoolId: Config.UserPoolId,
        ClientId: Config.ClientId
      }

      var userPool = new CognitoUserPool(poolData)
      var userData = {
        Username: this.username,
        Pool: userPool
      }

      var cognitoUser = new CognitoUser(userData)
      cognitoUser.confirmRegistration(this.code, true, function (err, result) {
        if (err) {
          console.log(err)
          return
        }
        console.log('call result: ' + result)
      })
    }
  }
}
</script>
