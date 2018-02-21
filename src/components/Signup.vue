<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-grey">Signup</h2>
        <Form v-if="displayInput" @child-set-username="parentSetUsername"></Form>
        <Confirmation v-if="displayConfirmation" :username="username"></Confirmation>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './modules/SignupForm'
import Confirmation from './modules/SignupConfirmation'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      displayInput: true,
      displayConfirmation: false
    }
  },
  components: {
    Form,
    Confirmation
  },
  methods: {
    parentSetUsername: function (username) {
      this.username = username
      this.displayInput = false
      this.displayConfirmation = true
    }
  }
}
</script>

<style>
</style>
