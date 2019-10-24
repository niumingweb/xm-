import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'  
import axios from 'axios'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
import CartExtra from './components/CartExtra'
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//先注册再创建存储对象vuex
//import Vuex from 'vuex' 
Vue.use(MintUI)
Vue.use(ElementUI)
//Vue.use(Vuex)
axios.defaults.withCredentials=true
Vue.prototype.axios=axios
//不上线地址!!!!!!
axios.defaults.baseURL="http://127.0.0.1:4000"
//上线改动!!!!!!!!!! 注释上条代码

Vue.config.productionTip = false
Vue.component("my-footer",MyFooter)
Vue.component("my-header",MyHeader)
Vue.component("cart-extra",CartExtra)
//1.11创建存储对象


new Vue({
  router,
  store,    //!!!!
  render: h => h(App)
}).$mount('#app')
