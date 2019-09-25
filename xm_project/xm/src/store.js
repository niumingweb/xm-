import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
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

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
