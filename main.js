import Vue from 'vue'
import App from './App'
import uniPop from './components/uni-popup/uni-popup.vue'
// @import './common/uni.js';
Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('uni-pop', uniPop) 
const app = new Vue({
    ...App
})
app.$mount()
