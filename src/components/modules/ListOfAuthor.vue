<template>
  <div>
    <div class="field columns">
      <div class="column is-12">
        <a class="button is-link" v-if="!isAdd" v-on:click="isAdd = !isAdd">
          <span class="is-right">
            <icon name="plus"></icon>
            add
          </span>
        </a>
      </div>
    </div>
    <div v-if="isAdd" class="field columns">
      <div class="column control is-5">
        <input class="input is-link" type="text" placeholder="key" v-model="addItem.key">
      </div>
      <div class="column control is-5">
        <input class="input is-link" type="text" placeholder="value" v-model="addItem.value">
      </div>
      <div class="column">
        <a class="button is-primary is-link" v-on:click="edit(addItem.key, addItem.value)">
          <span>
            <icon name="check"></icon>
            add
          </span>
        </a>
        <a class="button is-primary is-link is-outlined" v-on:click="isAdd = false">
          <span>
            cancel
            <icon name="times"></icon>
          </span>
        </a>
      </div>
    </div>

    <div v-for="item in items" :key="item.key" class="field columns">
      <div class="column control is-5">
        <input class="input" type="text" :placeholder="item.key" readonly>
      </div>
      <div class="column control is-5">
        <input class="input" type="text" v-model="item.value">
      </div>
      <div class="column">
        <a class="button is-primary" v-on:click="edit(item.key, item.value)">
          <span>
            <icon name="check"></icon>
            edit
          </span>
        </a>
        <a class="button is-danger" v-on:click="del(item.key)">
          <span>
            delete
            <icon name="times"></icon>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      isAdd: false,
      addItem: {},
      flg: false,
      targetName: this.$route.params.userId
    }
  },
  methods: {
    edit: function (key, value) {
      this.$store.dispatch('insertKV', {'key': key, 'value': value}).then(() => {
        this.$store.dispatch('fetchKVs', this.targetName)
      }).then(() => {
        this.isAdd = false
      }).catch((err) => {
        console.log(err)
      })
    },
    del: function (key) {
      this.$store.dispatch('deleteKV', {'key': key}).then(() => {
        this.$store.dispatch('fetchKVs', this.targetName)
      }).catch((err) => {
        console.log(err)
      })
    }
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
