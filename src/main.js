import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Vuex)

/**********
 * ROUTER * 
 **********/

import Home from './components/Home'
import CategoryView from './components/CategoryView'

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:category',
      component: CategoryView,
      props: true
    }
  ]
})

/*********
 * STORE * 
 *********/

import categories from './assets/data.json'

const store = new Vuex.Store({
  state: {
    categories
  }
})

/***********
 * HELPERS * 
 ***********/

Vue.mixin({
  methods: {
    toTitleCase: (str) => {
      if (str) {
        str = str.toLowerCase().split(' ')
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        }
        return str.join(' ')
      }
      return ''
    }
  }
})

new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
