import Vue from 'vue'
import App from './App.vue'

Vue.component('grid', require('./components/Board.vue').default);
Vue.component('cell', require('./components/Cell.vue').default);

window.Event = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
