<template>
  <div>{{ title }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'headComp',
  computed: mapGetters({
    // ゲッターを異なる名前でマッピング (via: https://vuex.vuejs.org/ja/getters.html
    title: 'getTitle'
  })
}
</script>
