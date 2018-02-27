<template>
  <div>
    <ListOfAuthor v-if="isAuthor"></ListOfAuthor>
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
      isAuthor: false,
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

    this.$store.dispatch('getCurrentUser').then((res) => {
      this.isAuthor = this.targetName === res.username
    }).catch(() => {
      this.isAuthor = false
    })
  },
  computed: {
    ...mapGetters([
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
