<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-grey">Login</h2>
        <p class="subtitle has-text-grey">Please login to proceed.</p>
        <div class="box">
          <div class="alert alert-danger" v-show="errorMessage">
            {{ errorMessage }}
          </div>
          <form>
            <div class="field">
              <div class="control">
                <input class="input is-large" id="name" v-model="username" :disabled="disableAllInputs" placeholder="Username" autofocus="" required>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input is-large" id="password" v-model="password" :disabled="disableAllInputs" autocomplete="password" type="password" placeholder="Password" required>
              </div>
            </div>

            <button class="button is-block is-info is-large is-fullwidth" v-on:click="login()" type="submit" :disabled="protectedUI || !formIsValid || disableAllInputs">Login</button>
          </form>
        </div>
      </div>
    </div>
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
      username: '',
      password: ''
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
