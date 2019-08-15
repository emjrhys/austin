<template lang='pug'>
div#home
  h1 Austin Cheat Sheet
  div.category(v-for='(category, key) in categories', :key='key')
    router-link(:to='key') {{ category.title }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: mapState(['categories'])
}
</script>

<style lang='scss'>
</style>