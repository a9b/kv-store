<template>
  <div class="pure-u pure-u-1-2 layout-center">
    <h1>Login</h1>
    <InputForm v-if="displayInput" @child-set-username="parentSetUsername"></InputForm>
    <Confirm v-if="displayConfirm" :username="username"></Confirm>
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
