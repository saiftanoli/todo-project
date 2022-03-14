import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import $ from 'jquery'


Vue.config.productionTip = false
import "@/assets/css/bootstrap-grid.css"
import "@/assets/css/bootstrap-reboot.css"
import "@/assets/css/bootstrap.css"
import "@/assets/css/styles.css"

new Vue({
  $,
  render: h => h(App),
}).$mount('#app')
