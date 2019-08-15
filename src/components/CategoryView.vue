<template lang='pug'>
div#category
  router-link(to='/') Back
  h2 {{ categories[category].title }}
  div.entry(v-for='entry in categories[category].entries')
    div.details__wrapper
      img(:src='`/images/${entry.image_url}`')
      div.details
        h3 {{ entry.title }}
        h4 {{ entry.subtitle }}
    div.links__wrapper
      a.maps-link(:href='entry.maps_url') View on map
      a.web-link(:href='entry.url') Visit website
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CategoryView',
  props: ['category'],
  computed: mapState(['categories'])
}
</script>

<style lang='scss'>
h3 {
  font-size: 1.25rem;
  font-weight: bold;
}

h4 {
  font-weight: bold;
  color: #DD614A;
}



.links__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    display: inline-block;
    padding: 0.5rem 1rem;

    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
}

.maps-link {
  background-color: #246A73;
}

.web-link {
  background-color: #368F8B;
}
</style>