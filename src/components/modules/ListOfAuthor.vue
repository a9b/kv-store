<template>
  <form class="pure-form">
    <fieldset>
      <h1>Mypage</h1>
      <div>
        {{ itemsCount }} items
      </div>
      <hr>
      <div>
        <button class="pure-u-2-24 pure-button" v-on:click="isAdd = !isAdd" style="margin-bottom:10px;">
          add
        </button>
        <div v-if="isAdd">
          <input class="pure-u-5-24" type="text" placeholder="key" v-model="addItem.key">
          <input class="pure-u-5-24" type="text" placeholder="value" v-model="addItem.value">
          <button class="pure-u-2-24 pure-button" v-on:click="edit(addItem.key, addItem.value)">
            add
          </button>
          <button class="pure-u-2-24 pure-button" v-on:click="isAdd = false">
            delete
          </button>
        </div>
      </div>

      <div v-for="item in items" :key="item.key">
        <input class="pure-u-5-24" type="text" :placeholder="item.key" readonly>
        <input class="pure-u-5-24" type="text" v-model="item.value">
        <button class="pure-u-2-24 pure-button" v-on:click="edit(item.key, item.value)">
          edit
        </button>
        <button class="pure-u-2-24 pure-button" v-on:click="del(item.key)">
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
      isAdd: false,
      addItem: {},
      targetName: this.$route.params.userId
    }
  },
  methods: {
    getUrl: function (username, key) {
      return 'https://api.status.96over.com/' + username + '/' + key
    },
    edit: function (key, value) {
      this.$store.dispatch('insertKV', {'key': key, 'value': value})
    },
    del: function (key) {
      this.$store.dispatch('deleteKV', {'key': key})
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
