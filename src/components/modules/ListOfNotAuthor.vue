<template>
  <div>
    <div v-for="item in items" :key="item.key" class="field columns">
      <div class="column control is-3">
        <input class="input is-small" type="text" :placeholder="item.key" readonly>
      </div>
      <div class="column control is-3">
        <input class="input is-small" type="text" :placeholder="item.value" readonly>
      </div>
      <div class="column control is-3">
        <input class="input is-small" type="text" :value="getUrl(targetName, item.key)">
      </div>
      <div class="column control">
        <button class="clipboard button is-small is-primary" :data-clipboard-text="getUrl(targetName, item.key)">
          copy
        </button>
      </div>
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
      targetName: this.$route.params.userId
    }
  },
  methods: {
    getUrl: function (username, key) {
      return 'https://api.status.96over.com/' + username + '/' + key
    }
  },
  mounted: function () {
    this.$store.dispatch('fetchKVs', this.targetName)

    // https://qiita.com/koara-local/items/7c0155306e158d76526b
    const Clipboard = new _Clipboard('.clipboard')
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
</style>
