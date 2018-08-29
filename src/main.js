// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //var App = require('./App')等价
import router from './router/index.js'

Vue.config.productionTip = false

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
};

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
