<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-grey">User</h2>
        <p class="subtitle has-text-grey">Usage</p>
        <div class="alert alert-danger" v-show="errorMessage">
          {{ errorMessage }}
        </div>

        <div class="box">
          token: {{ userCustomToken }}
        </div>

        <div class="box">
          curl -X POST -i 'https://api.status.96over.com/{{ userId }}/{key}' -H 'Authorization: {{ userCustomToken }}' -d '{"{kye}": "value"}'
        </div>

        <div class="box">
          curl -X DELETE -i 'https://api.status.96over.com/{{ userId }}/{key}' -H 'Authorization: {{ userCustomToken }}'
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      errorMessage: null
    }
  },
  mounted: function () {
    this.$store.dispatch('getCurrentUser').then((res) => {
    }).catch((err) => {
      console.log(err)
      this.$router.push({name: 'Login'})
    })
  },
  computed: {
    ...mapGetters([
      'userCustomToken',
      'userId'
    ])
  },
  methods: {
  }
}
</script>
