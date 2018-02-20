<template>
  <div>
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
</style>
