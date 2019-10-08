//引入express
const express=require('express')
//引入连接池
const pool=require('../pool.js')
//创建路由
var router=express.Router()


//查询购物车信息
//验证网址：http://localhost:4000/cart/cart_info
router.get('/cart_info',function(req,res){
  var uid=req.session.uid
  if(!uid){
    res.send({code:-1,msg:"请先登录"})
    return
  }
  var sql="select eid,ename,epic,eprice,ecount from cart where uid=?"
  pool.query(sql,[uid],function(err,result){
    if(err) throw err
    res.send({code:1,msg:"查询成功",data:result})
  }) 
})

//删除购物车内容
//http://localhost:4000/cart/cart_del/?eid=1
router.get('/cart_del',function(req,res){
  //获取商品的eid
  var $eid=req.query.eid
  var sql="delete from cart where eid=?";
  pool.query(sql,[$eid],function(err,result){
    if(err) throw err
    console.log(result)
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-2,msg:"商品删除失败"})
    }
  })
})



//导出路由
module.exports=router;