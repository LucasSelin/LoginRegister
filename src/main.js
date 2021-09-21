import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './config/router'
import vuetify from './config/vuetify'
import store from './config/store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.prototype.$axios = axios
Vue.router = router
Vue.use(VueSweetalert2)

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
