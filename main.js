import Vue from 'vue'
import App from './App'

import links from './pages/links/links.vue'
Vue.component('links',links)

import alarms from './pages/alarms/alarms.vue'
Vue.component('alarms', alarms)

import load from './pages/load/load.vue'
Vue.component('load', load)

import setting from './pages/setting/setting.vue'
Vue.component('setting', setting)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



