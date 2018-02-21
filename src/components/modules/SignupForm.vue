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
          <input v-model="passwordConfirmation" :disabled="disableAllInputs" class="input is-large" type="password" autocomplete="new-password" placeholder="Password Confirmation" required="required">
        </div>
      </div>

      <button v-on:click="signup()" :disabled="protectedUI || !formIsValid || disableAllInputs" type="submit" class="button is-block is-info is-large is-fullwidth">SignUp</button>
    </form>
  </div>
</template>

<script>
import Uuid from 'uuid'

export default {
  name: 'SignupForm',
  data () {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errorMessage: null,
      disableAllInputs: false,
      protectedUI: false
    }
  },
  computed: {
    formIsValid () {
      return this.username.length > 0 &&
             this.email.indexOf('@') > 1 &&
             /[a-z]+/.test(this.password) &&
             /[A-Z]+/.test(this.password) &&
             /[0-9]+/.test(this.password) &&
             this.password.length >= 6 &&
             this.password === this.passwordConfirmation
    }
  },
  methods: {
    signup: function () {
      this.disableAllInputs = true
      this.protectedUI = true
      this.errorMessage = null

      const signupUser = {
        username: this.username,
        password: this.password,
        attributes: {
          email: this.email,
          // これサーバー側でやった方がよい
          'custom:token': Uuid()
        }
      }

      this.$store.dispatch('signUp', signupUser).then(() => {
        this.$emit('child-set-username', this.username)
      }).catch((err) => {
        this.disableAllInputs = false
        this.protectedUI = false
        this.errorMessage = err.message
      })
    }
  }
}
</script>
