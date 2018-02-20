<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-grey">Signup</h2>
        <InputForm v-if="displayInput" @child-set-username="parentSetUsername"></InputForm>
        <Confirm v-if="displayConfirm" :username="username"></Confirm>
      </div>
    </div>
  </div>
</template>

<script>
import InputForm from './modules/signup/InputForm'
import Confirm from './modules/signup/Confirm'

export default {
  name: 'signup',
  data () {
    return {
      username: '',
      displayInput: true,
      displayConfirm: false
    }
  },
  components: {
    InputForm,
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
