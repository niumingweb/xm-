//引入express
const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由
var router=express.Router();

//手机注册步骤一路由：验证手机号是否存在
//验证网址http://127.0.0.1:4000/users/reg1/?phone=18624897407
router.get('/reg1',function(req,res){
  var $phone=req.query.phone
  //获取手机号码
  console.log($phone)
  //sql语句
  var sql="select uid from users where phone=?";  
  pool.query(sql,[$phone],function(err,result){
    if(err) throw err
    console.log(result)
    if(result.length==0){
      res.send('0')
    }else{
      res.send(result[0])
    }
  })
})
//如果手机号已注册进入登录操作
//验证http://127.0.0.1:4000/users/reg2_log/?phone=18624897407&upwd=123456
 router.get('/reg2_log',function(req,res){
  var $phone=req.query.phone
  var $upwd=req.query.upwd
  var sql="select uid,phone,uname from users where phone=? and upwd = md5(?)"
  pool.query(sql,[$phone,$upwd],function(err,result){
    if(err)throw err
    if(result.length==0){
      res.send('0')
    }else{
      var uid=result[0].uid
      req.session.uid=uid
      console.log(req.session)
      res.send(result)
    }
  })
 })
//如果手机号未被注册进入注册操作
//验证http://127.0.0.1:4000/users/reg3/?phone=18624897407&upwd=123456
router.get('/reg3',function(req,res){
  var $phone=req.query.phone
  var $upwd=req.query.upwd
  var sql=`insert into users values(null,null,md5(${$upwd}),${$phone},null,null)`;
  pool.query(sql,function(err,result){
    if(err) throw err
    if(result.effectedRows==0){
      res.send('0')
    }else{
      res.send('1')
    }
  })
})
//账号登录路由
  //验证网址:
  //http://localhost:4000/users/v1/login/dingding&123456
  //http://127.0.0.1:4000/users/login/?uname=dingding&upwd=123456
  router.get('/login',function(req,res){
    //获取数据用户名和密码
    var $uname=req.query.uname;
    var $upwd=req.query.upwd;
    console.log($uname)
    //声明查询sql语句
    var sql="select uname,uid,phone from users where uname=? and upwd = md5(?)";
    pool.query(sql,[$uname,$upwd],function(err,result){
      if(err) throw err;
      console.log(result);
      if(result.length==0){
        res.send('0');
      }else{
        var uid=result[0].uid
        req.session.uid=uid
        console.log(req.session)
        res.send(result)
      }
    })
  })
  //手机登陆路由
  router.get('/phonelogin',(req,res)=>{
    var $phone=req.query.phone
    console.log($phone)
    var sql="select uid,phone,uname from users where phone=?";
    pool.query(sql,[$phone],function(err,result){
      if(err) throw err
      console.log(result)
      if(result.length==0){
        res.send('0')
      }else{
        var uid=result[0].uid
        req.session.uid=uid
        console.log(req.session)
        res.send(result)
      }
    })
  })



//导出路由
module.exports=router;