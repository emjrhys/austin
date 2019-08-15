<template lang='pug'>
div#category
  router-link.title-card(to='/', :style='{ "background-image": `url("${publicPath}images/${categories[category].image_url}")` }') 
    div.back Back
    h2 {{ categories[category].title }}
  div.entries__wrapper
    div.entry(v-for='(entry, index) in categories[category].entries', :key='index')
      div.details__wrapper(:class='{ reverse: index % 2 === 0 }')
        div.image__wrapper
          img(:src='`${publicPath}images/${entry.image_url}`')
        div.details
          h3 {{ entry.title }}
          h4 {{ entry.subtitle }}
      div.links__wrapper
        a.maps-link(:href='entry.maps_url') 
          img(:src='`${publicPath}icons/maps.png`')
          span View on map
        a.web-link(:href='entry.url') 
          img(:src='`${publicPath}icons/web.png`')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CategoryView',
  props: ['category'],
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  computed: mapState(['categories'])
}
</script>

<style lang='scss' scoped>
.title-card {
  margin-bottom: 1rem;
}

.entries__wrapper {
  padding: 0 0.5rem 3rem;
}

.entry {
  margin-bottom: 2rem;
}

.details__wrapper {
  display: flex;
  align-items: flex-end;

  border: 1px solid #ebeef5;
  border-radius: 0.35rem;
  
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .15);

  overflow: hidden;

  &.reverse {
    flex-direction: row-reverse;
  }

  .image__wrapper {
    flex: 0 0 30%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      flex-shrink: 0;
      width: 100%;
      height: auto;
    }
  }

  .details {
    flex: 1;
    padding: 1rem;

    text-align: left;

    h4 {
      margin-top: .25rem;

      font-weight: 500;
      color: #DD614A;
    }
  }
}

.links__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  a {
    display: inline-block;
    padding: 0.5rem 1rem;

    border-radius: 2rem;
    color: #fff;
    font-weight: bold;
    text-decoration: none;

    box-shadow: 0 2px 3px rgba(0, 0, 0, .15);

    cursor: pointer;

    img {
      width: 1rem;
      height: auto;
    }
  }

  .maps-link {
    background-color: #1B998B;

    img {
      position: relative;
      top: 2px;
      width: .8rem;
      margin-right: 0.5rem;
    }
  }

  .web-link {
    margin-left: 0.5rem;
    padding: 0.4rem 0.5rem;
    background-color: #2D3047;
  }
}
</style>