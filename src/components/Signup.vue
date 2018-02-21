<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-grey">Signup</h2>
        <Form v-if="displayInput" @child-set-username="parentSetUsername"></Form>
        <Confirm v-if="displayConfirm" :username="username"></Confirm>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './modules/SignupForm'
import Confirm from './modules/SignupConfirm'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      displayInput: true,
      displayConfirm: false
    }
  },
  components: {
    Form,
    Confirm
  },
  methods: {
    parentSetUsername: function (username) {
      this.username = username
      this.displayInput = false
      this.displayConfirm = true
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
