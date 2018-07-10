import Vue from 'vue'
import router from './router';
import App from './App.vue'
import { MdButton, MdApp, MdTabs, MdToolbar, MdCard, MdAvatar, MdIcon, MdField, MdDialog } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(MdButton)
Vue.use(MdApp)
Vue.use(MdTabs)
Vue.use(MdToolbar)
Vue.use(MdCard)
Vue.use(MdAvatar)
Vue.use(MdIcon)
Vue.use(MdField)
Vue.use(MdDialog)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
