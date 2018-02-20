<template>
  <div>
    <div class="field columns">
      <div class="column is-12">
        <a class="button is-link is-small" v-if="!isAdd" v-on:click="isAdd = !isAdd">
          <icon name="plus"></icon>
          <span class="is-right">
            add
          </span>
        </a>
      </div>
    </div>
    <div v-if="isAdd" class="field columns">
      <div class="column control is-5">
        <input class="input is-small is-link" type="text" placeholder="key" v-model="addItem.key">
      </div>
      <div class="column control is-5">
        <input class="input is-small is-link" type="text" placeholder="value" v-model="addItem.value">
      </div>
      <div class="column">
        <a class="button is-small is-primary is-link" v-on:click="edit(addItem.key, addItem.value)">
          <icon name="check"></icon>
          <span>
            add
          </span>
        </a>
        <a class="button is-small is-primary is-link is-outlined" v-on:click="isAdd = false">
          <span>
            cancel
          </span>
          <icon name="times"></icon>
        </a>
      </div>
    </div>

    <div v-for="item in items" :key="item.key" class="field columns">
      <div class="column control is-5">
        <input class="input is-small" type="text" :placeholder="item.key" readonly>
      </div>
      <div class="column control is-5">
        <input class="input is-small" type="text" v-model="item.value">
      </div>
      <div class="column">
        <a class="button is-small is-primary" v-on:click="edit(item.key, item.value)">
          <icon name="check"></icon>
          <span>
            edit
          </span>
        </a>
        <a class="button is-small is-danger" v-on:click="del(item.key)">
          <span>
            delete
          </span>
          <icon name="times"></icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Config from '@/../config/api'
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
      return Config.BaseURL + username + '/' + key
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
