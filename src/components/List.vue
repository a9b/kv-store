<template>
  <div class="pure-u pure-u-22-24 layout-center">
    <div>
      {{ targetName }} Login:{{ isLogined }}
      <button v-if="isLogined" v-on:click="logout()">Logout</button>
      <button v-else v-on:click="login()">Login</button>
    </div>
    <ListOfAuthor v-if="isLogined"></ListOfAuthor>
    <ListOfNotAuthor v-else></ListOfNotAuthor>
  </div>
</template>

<script>
import ListOfAuthor from '@/components/modules/ListOfAuthor'
import ListOfNotAuthor from '@/components/modules/ListOfNotAuthor'
import { mapGetters } from 'vuex'
import _Clipboard from 'clipboard'

export default {
  name: 'List',
  data () {
    return {
      targetName: this.$route.params.userId
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('toLogin')
    },
    logout: function () {
      this.$store.dispatch('toLogout')
    }
  },
  mounted: function () {
    // https://qiita.com/koara-local/items/7c0155306e158d76526b
    const Clipboard = new _Clipboard('.btn')
    Clipboard.on('success', function (e) {
      e.clearSelection()
    })
    Clipboard.on('error', function (e) {
      console.error('Action:', e.action)
      console.error('Trigger:', e.trigger)
    })
  },
  computed: {
    ...mapGetters([
      'isLogined',
      'items',
      'itemsCount'
    ])
  },
  components: {
    ListOfAuthor,
    ListOfNotAuthor
  }
}
</script>

<style>
.layout-center {
    display: block;
    margin: 0 auto;
}
</style>
