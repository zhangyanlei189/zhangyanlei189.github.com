import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import App from './App.vue'
import router from './routers'
import store from './stores'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
