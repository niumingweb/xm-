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
//http://localhost:4000/cart/cart_del?eid=1
router.get('/cart_del',function(req,res){
  //获取商品的eid
  var $eid=req.query.eid
  var uid=req.session.uid
  var sql="delete from cart where eid=? and uid=?";
  pool.query(sql,[$eid,uid],function(err,result){
    if(err) throw err
    console.log(result)
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-2,msg:"商品删除失败"})
    }
  })
})
//购物车产品数量增1
router.get('/cart_plus',function(req,res){
  var eid=req.query.eid
  var uid=req.session.uid
  var i=req.query.i
  var sql=`update cart set ecount=ecount+1 where eid=${eid} and uid=${uid}`;
  pool.query(sql,function(err,result){
    if(err) throw err
    if(result.affectedRows>0){
      res.send({code:1,msg:"增加成功"})
    }else{
      res.send({code:-3,msg:"增加失败"})
    }
  })
})
//购物车产品数量减1
router.get('/cart_minus',function(req,res){
  var eid=req.query.eid
  var uid=req.session.uid
  var i=req.query.i
  var sql=`update cart set ecount=ecount-1 where eid=${eid} and uid=${uid}`;
  pool.query(sql,function(err,result){
    if(err) throw err
    if(result.affectedRows>0){
      res.send({code:1,msg:"减少成功"})
    }else{
      res.send({code:-3,msg:"减少失败"})
    }
  })
})


//导出路由
module.exports=router;