<template>
  <div class="box">
    <div class="alert alert-danger" v-show="errorMessage">
      {{ errorMessage }}
    </div>
    <form>
      <div class="field">
        <div class="control">
          <input id="name" v-model="username" :disabled="disableAllInputs" class="input is-large" autofocus="" readonly>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input id="name" v-model="code" :disabled="disableAllInputs" class="input is-large" placeholder="Confirmation Code" min="1" required>
        </div>
      </div>
      <button v-on:click="confirm()" :disabled="protectedUI || !formIsValid || disableAllInputs" type="submit" class="button is-primary is-large">Confirm</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupConfirmation',
  data () {
    return {
      code: '',
      errorMessage: null,
      disableAllInputs: false,
      protectedUI: false
    }
  },
  props: ['username'],
  methods: {
    confirm: function () {
      this.errorMessage = null
      this.protectedUI = true
      this.disableAllInputs = true
      this.$store.dispatch('confirmRegistration', {
        username: this.username,
        code: this.code
      }).then(() => {
        this.$router.push({name: 'List', params: { userId: this.username }})
      }).catch((err) => {
        this.errorMessage = err.message
        this.protectedUI = false
        this.disableAllInputs = false
        // TODO: should it be checked for `CodeMismatchException`?
        if (err.code === 'ExpiredCodeException') {
          this.showResendButton = true
        }
      })
    }
  },
  computed: {
    formIsValid () {
      return this.code.length >= 6
    }
  }
}
</script>
