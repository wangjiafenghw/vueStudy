import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  router: [
    {
      path: '/',
      redirect: './page1'
    },
    {
      path: '/',
      component: resolve => require(['./page1.vue'], resolve),
      meta: { title: 'page1' },
      children:[
        {
          path: '/page2',
          component: resolve => require(['./page1.vue'], resolve),
          meta: { title: 'page2' }
        },
        {
          path: '/page2',
          component: resolve => require(['./page2.vue'], resolve),
          meta: { title: 'page2' }
        }
      ]
    }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
