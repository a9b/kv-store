<template>
  <div class="pure-u pure-u-1-2 layout-center">
    <h1>Mypage</h1>
    {{ targetName }}
    <div>
    {{ itemsCount }} items
    </div>
    <hr>
    <div v-for="item in items" :key="item.key">
      {{ item.key }} {{ item.value }}
      <input type="text" :value="getUrl(targetName, item.key)">
      <button class="btn" :data-clipboard-text="getUrl(targetName, item.key)">
        copy
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _Clipboard from 'clipboard'

export default {
  name: 'List',
  data () {
    return {
      user: null,
      targetName: this.$route.params.userId
    }
  },
  methods: {
    getUrl: function (username, key) {
      return 'https://api.status.96over.com/' + username + '/' + key
    }
  },
  mounted: function () {
    this.$store.dispatch('fetchKVs', 'a9b')

    // https://qiita.com/koara-local/items/7c0155306e158d76526b
    const Clipboard = new _Clipboard('.btn')
    console.log(Clipboard)
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
