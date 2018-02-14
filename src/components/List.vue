<template>
  <div class="pure-u pure-u-22-24 layout-center">
    <form class="pure-form">
      <fieldset>
        <h1>Mypage</h1>
        <div>
          {{ targetName }} Login:{{ isLogined }}
          <button v-if="isLogined" v-on:click="logout()">Logout</button>
          <button v-else v-on:click="login()">Login</button>
        </div>
        <div>
          {{ itemsCount }} items
        </div>
        <hr>
        <div v-for="item in items" :key="item.key">
          <input class="pure-u-5-24" type="text" :placeholder="item.key" readonly>
          <input class="pure-u-5-24" type="text" :placeholder="item.value" readonly>
          <input class="pure-u-10-24" type="text" :value="getUrl(targetName, item.key)">
          <button class="pure-u-2-24 pure-button btn" :data-clipboard-text="getUrl(targetName, item.key)">
            copy
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
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
    getUrl: function (username, key) {
      return 'https://api.status.96over.com/' + username + '/' + key
    },
    login: function () {
      this.$store.dispatch('toLogin')
    },
    logout: function () {
      this.$store.dispatch('toLogout')
    }
  },
  mounted: function () {
    this.$store.dispatch('fetchKVs', 'a9b')

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
  }
}
</script>

<style>
.layout-center {
    display: block;
    margin: 0 auto;
}
</style>
