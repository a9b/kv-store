<template>
  <div class="pure-u pure-u-1-2 layout-center">
    <h1>Mypage</h1>
    {{ username }}
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      user: null,
      username: this.$route.params.userId
    }
  },
  methods: {
    getList () {
    }
  },
  mounted: function () {
    this.$store.dispatch('getUserAttributes').then((user) => {
      return user['custom:token']
    }).then((token) => {
      console.log(token)
    }).catch((e) => {
      console.log(e)
    })
  },
  computed: {
  }
}
</script>

<style>
.layout-center {
    display: block;
    margin: 0 auto;
}
</style>
