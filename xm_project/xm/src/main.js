import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'  !!!!
import axios from 'axios'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//先注册再创建存储对象vuex
import Vuex from 'vuex' 
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(Vuex)
axios.defaults.withCredentials=true
Vue.prototype.axios=axios
axios.defaults.baseURL="http://127.0.0.1:4000"
Vue.config.productionTip = false
Vue.component("my-footer",MyFooter)
Vue.component("my-header",MyHeader)
//1.11创建存储对象
var store=new Vuex.Store({
  state:{//集中管理数据方法
    uname:"",  //用户名
    phone:""  //用户手机号 
  },
  mutations:{//集中修改数据函数属性
    //修改函数:调用修改用户名函数传参
    updateuname(state,uname){
      state.uname=uname
    },
    updatephone(state,phone){
      state.phone=phone
    }
  }
})

new Vue({
  router,
  store,    //!!!!
  render: h => h(App)
}).$mount('#app')
