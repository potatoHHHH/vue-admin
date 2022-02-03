// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'
import store from './store'
import '@/styles/index.scss'
import './permission' // permission control

Vue.config.productionTip = false
Vue.use(elementUi, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // components: { App },
  // template: '<App/>',
})
