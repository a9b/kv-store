<template>
  <div class="box">
    <form>
      <div class="field">
        <div class="control">
          <input id="name" v-model="username" :disabled="disableAllInputs" class="input is-large" autofocus="" readonly>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input id="name" v-model="code" :disabled="disableAllInputs" class="input is-large" placeholder="Confirmation Code" required>
        </div>
      </div>
      <button v-on:click="confirm()" type="submit" class="button is-primary">Confirm</button>
    </form>
  </div>
</template>

<script>
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js'
import Config from '@/../config/cognito.js'

export default {
  name: 'SignupConfirm',
  data () {
    return {
      code: '',
      errorMessage: '',
      disableAllInputs: false
    }
  },
  props: ['username'],
  methods: {
    confirm: function () {
      const poolData = {
        UserPoolId: Config.UserPoolId,
        ClientId: Config.ClientId
      }

      const userPool = new CognitoUserPool(poolData)
      const userData = {
        Username: this.username,
        Pool: userPool
      }

      const cognitoUser = new CognitoUser(userData)
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
