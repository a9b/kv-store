<template>
  <div class="pure-u pure-u-1-2 layout-center">
    <h1>Login</h1>
    <div class="alert alert-danger" v-show="errorMessage">
      {{ errorMessage }}
    </div>
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label for="name">Username</label>
          <input id="name" v-model="username" :disabled="disableAllInputs" placeholder="Username">
        </div>

        <div class="pure-control-group">
          <label for="password">Password</label>
          <input v-model="password" :disabled="disableAllInputs" id="password" autocomplete="password" type="password" placeholder="Password" required>
        </div>

        <div class="pure-controls">
          <button v-on:click="login()" type="submit" class="pure-button pure-button-primary" :disabled="protectedUI || !formIsValid || disableAllInputs">Login</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      errorMessage: null,
      disableAllInputs: false,
      protectedUI: false,
      username: 'a9b',
      password: 'Pass1234'
    }
  },
  methods: {
    login () {
      // Remove alert boxes
      this.errorMessage = null
      this.protectedUI = true
      this.$store.dispatch('authenticateUser', {
        username: this.username,
        password: this.password
      }).then(() => {
        this.disableAllInputs = true
        this.password = ''
        this.errorMessage = null
        this.$router.push({name: 'List', params: { userId: this.username }})
      }).catch((err) => {
        this.errorMessage = err.message
        this.protectedUI = false
      })
    }
  },
  computed: {
    formIsValid () {
      return /[\S]+/.test(this.username)
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
