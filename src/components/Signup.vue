<template>
  <div>
    新規登録
    <div>
      ユーザー名:
      <input v-model="username">
    </div>
    <div>
      パスワード:
      <input v-model="password">
    </div>
    <div>
      メールアドレス:
      <input v-model="email">
    </div>
    <div>
      <button v-on:click="signup()">sign up</button>
    </div>
  </div>
</template>

<script>
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import Config from '@/../config/cognito.js'
import Uuid from 'uuid'

export default {
  name: 'signup',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      attributes: {}
    }
  },
  methods: {
    signup: function () {
      var poolData = {
        UserPoolId: Config.UserPoolId,
        ClientId: Config.ClientId
      }
      var attributeList = []

      var dataEmail = {
        Name: 'email',
        Value: this.email
      }

      // これサーバー側でやった方がよい
      var dataToken = {
        Name: 'custom:token',
        Value: Uuid()
      }

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
    }
  },
  components: {
  }
}
</script>
