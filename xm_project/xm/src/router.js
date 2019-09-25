import Vue from 'vue'
import Router from 'vue-router'
import User_log from './views/User_log'
import Index from './views/Index'
import MainProduct from './views/MainProduct'
import Test from './views/Test'
import User_reg from './views/User_reg'
import User_reg2 from './views/User_reg2'
import User_reg3 from './views/User_reg3'
import Cart from './views/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/user_log",component:User_log},
    {path:"/index",component:Index},
    {path:"/mainproduct/:eid",component:MainProduct,props:true},
    {path:"/test",component:Test},
    {path:"/user_reg",component:User_reg},
    {path:"/user_reg2",name:'user_reg2',component:User_reg2},
    {path:"/user_reg3",name:'user_reg3',component:User_reg3},
    {path:"/cart",component:Cart}
  ]
})
