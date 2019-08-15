<template lang='pug'>
div#home
  div.welcome
    h2 Welcome to
    h1 Austin
  router-link.title-card(:to='key', v-for='(category, key, index) in categories', :key='key', v-if='index === 0', :style='{ "background-image": `url("/images/${category.image_url}")` }') 
    h2 {{ category.title }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: mapState(['categories'])
}
</script>

<style lang='scss'>
.welcome {
  margin: 2rem 0;

  h1 {
    font-family: 'Barriecito', sans-serif;
    font-size: 6rem;
    color: #EE2677;
  }

  h2 {
    position: relative;
    top: 0.5rem;

    font-family: 'Caveat', cursive;
    font-size: 2.25rem;
    font-weight: bold;
    color: #38281a;
  }
}
</style>