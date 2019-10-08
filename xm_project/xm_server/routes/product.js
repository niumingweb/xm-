//引入express
const express=require('express')
//引入连接池
const pool=require('../pool.js')
//创建路由
var router=express.Router()

//主页商品路由
//验证网址http://localhost:4000/product/indexproduct
router.get('/indexproduct',function(req,res){
  //创建sql语句
  //var sql1="select aid,aname from main_page";
  var sql="select aid,aname from main_page;select eid,aid,epic,ename,espec,eprice,echange,ehref from electric;select spic,sname,specs,sprice from star_product;select tid,aid,tpic,tname,tspec,tprice,tchange from tv";
  //运行sql语句
  pool.query(sql,[],function(err,result){
    if(err)throw err
    console.log(result)
    //var uid=req.session.uid
    if(result.length==0){
      res.send(0)
    }else{
      res.send(result)
    }
  })
})
//主要页面商品详情页面
//验证网址
//http://127.0.0.1:4000/product/main_detail/?eid=1
router.get('/main_detail',function(req,res){
  //获取eid
  var eid=req.query.eid
  console.log(eid)
  //sql语句
  var sql="select eid,dpic1,dpic2,dpic3,dpic4,ename,edesc,aftersale,issale,especs,eprice from electric_details where eid=?";
  pool.query(sql,[eid],function(err,result){
    if(err) throw err;
    console.log(result)
    //var uid=req.session.uid
    if(result.length==0){
      res.send(0)
    }else{
      res.send(result)
    }
  })
})






//导出路由
module.exports=router;