<template>
  <form class="pure-form">
    <fieldset>
      <h1>Mypage</h1>
      <div>
        {{ itemsCount }} items
      </div>
      <hr>
      <div v-for="item in items" :key="item.key">
        <input class="pure-u-5-24" type="text" :placeholder="item.key" readonly>
        <input class="pure-u-5-24" type="text" v-model="item.value">
        <button class="pure-u-2-24 pure-button" v-on:click="edit(item.key, item.value)">
          edit
        </button>
        <button class="pure-u-2-24 pure-button" :data-clipboard-text="getUrl(targetName, item.key)">
          delete
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

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
    edit: function (key, value) {
      this.$store.dispatch('insertKV', {'key': key, 'value': value})
    }
  },
  mounted: function () {
    this.$store.dispatch('fetchKVs', this.targetName)
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
