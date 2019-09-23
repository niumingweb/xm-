//引入express
const express=require('express');
//引入body-parser
const bodyParser=require('body-parser');
const cors=require("cors");
const session=require('express-session');
//引入users路由
const userRouter=require('./routes/users.js');
const productRouter=require('./routes/product.js')
//创建服务器
var app=express();
//设置监听
app.listen(4000);
//静态委托
app.use(express.static('public'));
//使用中间件body-parser
app.use(bodyParser.urlencoded({
  extended:false
}));
//验证网址
//http://localhost:4000/users/v1/login/dingding&123456
app.use(cors({
  origin:["http://localhost:8080","http://127.0.0.1:8080","http://127.0.0.1:5500"],//不能用*
  credentials:true
}));//从此所有响应，自动带Access-Control-Allow-Origin:http://127.0.0.1:5500
//万一客户端浏览器地址发生变化，只改这里origin一处即可！
//session配置一定要在所有请求之前
app.use(session({
  secret:"128位字符串",  //安全字符串
  resave:true,          //每次请求保存数据
  saveUninitialized:true//保存初始化数据
}))
//使用路由
app.use('/users',userRouter);  //用户路由
app.use('/product',productRouter);  //商品路由


