<template>
  <div>
    <div class="field columns">
      <div class="column is-12">
        <button class="button is-link" v-if="!isAdd" @click="isAdd = !isAdd">
          <span class="is-right">
            <icon name="plus"></icon>
            add
          </span>
        </button>
      </div>
    </div>
    <div v-if="isAdd" class="field columns">
      <div class="column control is-5">
        <input class="input is-link" type="text" placeholder="key" v-model="additionItem.key">
      </div>
      <div class="column control is-5">
        <input class="input is-link" type="text" placeholder="value" v-model="additionItem.value">
      </div>
      <div class="column">
        <button class="button is-primary is-link" @click="edit(additionItem.key, additionItem.value)" :disabled="!formIsValid">
          <span>
            <icon name="check"></icon>
            add
          </span>
        </button>
        <button class="button is-primary is-link is-outlined" @click="cancel()">
          <span>
            cancel
            <icon name="times"></icon>
          </span>
        </button>
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
        <button class="button is-primary" @click="edit(item.key, item.value)">
          <span>
            <icon name="check"></icon>
            edit
          </span>
        </button>
        <button class="button is-danger" @click="del(item.key)">
          <span>
            delete
            <icon name="times"></icon>
          </span>
        </button>
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
      additionItem: {},
      flg: false,
      targetName: this.$route.params.userId
    }
  },
  methods: {
    cancel: function () {
      this.isAdd = false
      this.additionItem = {}
    },
    del: function (key) {
      this.$store.dispatch('deleteKV', {'key': key}).then(() => {
        this.$store.dispatch('fetchKVs', this.targetName)
      }).catch((err) => {
        console.log(err)
      })
    },
    edit: function (key, value) {
      this.$store.dispatch('insertKV', {'key': key, 'value': value}).then(() => {
        this.$store.dispatch('fetchKVs', this.targetName)
      }).then(() => {
        this.isAdd = false
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    formIsValid () {
      return this.additionItem.key !== undefined &&
             this.additionItem.value !== undefined &&
             String(this.additionItem.key).length > 0 &&
             String(this.additionItem.value).length > 0 &&
             // http://www-creators.com/archives/1827
             // 記号は許可しない
             !/^!"#$%&'()\*\+-\.,\/:;<=>?@\[\\\]^_`{|}~]+/.test(this.additionItem.key)
    },
    ...mapGetters([
      'items',
      'itemsCount'
    ])
  }
}
</script>
