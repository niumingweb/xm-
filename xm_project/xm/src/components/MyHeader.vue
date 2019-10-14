<template>
  <div>
    <!-- 顶部 -->
<div class="top">
    <div class="contain">
      <div class="top_left">
        <a href="javascript:;">小米商城</a>
        <span>|</span>
        <a href="javascript:;">MIUI</a>
        <span>|</span>
        <a href="javascript:;">loT</a>
        <span>|</span>
        <a href="javascript:;">云服务</a>
        <span>|</span>
        <a href="javascript:;">金融</a>
        <span>|</span>
        <a href="javascript:;">有品</a>
        <span>|</span>
        <a href="javascript:;">小爱开放平台</a>
        <span>|</span>
        <a href="javascript:;">企业团购</a>
        <span>|</span>
        <a href="javascript:;">资质证照</a>
        <span>|</span>
        <a href="javascript:;">协议规则</a>
        <span>|</span>
        <a href="javascript:;">下载app</a>
        <span>|</span>
        <a href="javascript:;">Select Region</a>
      </div>
      <div class="top_car">
        <router-link :to="'/cart'">
          <img src="img/header/购物车空.png" alt="">
          <span> 购物车（0）</span>
        </router-link>  
      </div>
      <!-- 未登录时显示 -->
       <div class="top_user" v-show="this.$store.state.uname==null">
        <router-link :to="{path:'/user_log'}">登陆</router-link><span>|</span><router-link :to="{path:'/user_reg'}">注册</router-link><span>|</span><a href="javascript:;" id="top_user_msg">消息通知</a>
      </div>
       <!-- 登录时显示 -->
      <div class="top_user1" v-show="this.$store.state.uname!=null">
        <div class="user_container" @mouseover="arrow_orange" @mouseout="arrow_white">
        <a href="javascript:;" class="userid"><span class="username">{{uname}}</span> <svg v-show="active" t="1569056712353" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2689" width="20" height="20"><path d="M944.083879 289.536302c14.264888 18.286482 15.462157 41.208541 2.670829 51.196009l-417.191704 325.421604c-2.885723 2.261507-12.156878 7.828292-13.732769 9.578146-15.544021 17.181311-37.893029 22.338774-49.947576 11.461029l-392.908648-354.309538c-12.054547-10.887978-9.271154-33.666774 6.272867-50.889017 15.544021-17.21201 37.893029-22.349007 49.988508-11.471262l357.584118 322.443783 408.258241-318.463122C907.910005 264.516466 929.84969 271.260054 944.083879 289.536302z" p-id="2690" fill="#b0b0b0"></path></svg>
        <svg v-show="active==false" t="1569061963107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2870" width="20" height="20"><path d="M944.083879 289.536302c14.264888 18.286482 15.462157 41.208541 2.670829 51.196009l-417.191704 325.421604c-2.885723 2.261507-12.156878 7.828292-13.732769 9.578146-15.544021 17.181311-37.893029 22.338774-49.947576 11.461029l-392.908648-354.309538c-12.054547-10.887978-9.271154-33.666774 6.272867-50.889017 15.544021-17.21201 37.893029-22.349007 49.988508-11.471262l357.584118 322.443783 408.258241-318.463122C907.910005 264.516466 929.84969 271.260054 944.083879 289.536302z" p-id="2871" fill="#ff6700"></path></svg>
        </a>
        <ul class="user_drop">
          <li><a href="javascript:;">个人中心</a></li>
          <li><a href="javascript:;">评价晒单</a></li>
          <li><a href="javascript:;">我的喜欢</a></li>
          <li><a href="javascript:;">小米账号</a></li>
          <li><a href="javascript:;">用户登录</a></li>
        </ul>
        </div>
        <span>|</span>
         <a href="javascript:;">消息通知</a><span>|</span>
        <a href="javascript:;">我的订单</a><span>|</span>
      </div>
    </div> 
      
      
        
     
 
  </div> 
  <div class="header_container">  
    <div class="header_logo">
     <img src="img/header/index_logo.png" alt="">
    </div>
    <div class="header_nav">
     <ul>
       <li>
         <a href="">小米手机</a>
         <!-- 下拉菜单1 -->
         <div class="xiala">
           <ul>
             <li>
               <div>
                 <a href="">
                     <img src="img/header/小米手机1.png" alt="">
                 </a>
               </div>
               <a href="">小米cc9</a>
               <p>1799元起</p>
             </li>
             <li>
               <div>
                 <a href="">
                    <img src="img/header/小米手机2.png" alt="">
                 </a>
               </div>
                <a href="">小米cc9e</a>
                <p>1299元起</p>
               
             </li>
             <li>
               <div>
                 <a href="">
                   <img src="img/header/小米手机3.png" alt="">
                 </a>
               </div>
               <a href="">小米cc9m美图定制版</a>
               <p>2599元起</p>
               
             </li>
             <li>
               <div>
                 <a href="">
                   <img src="img/header/小米手机4.png" alt="">
                 </a>
               </div>
               <a href="">小米9</a>
               <p>2799元起</p>
               
             </li>
             <li>
               <div>
                 <a href="">
                   <img src="img/header/小米手机5.jpg" alt="">
                 </a>
               </div>
               <a href="">小米8屏幕指纹版</a>
               <p>1799元起</p>
               
             </li>
             <li>
               <div>
                 <a href="">
                   <img src="img/header/小米手机6.png" alt="">
                 </a>
               </div>
               <a href="">小米MIX3</a>
               <p>2599元起</p>
               
             </li>
           </ul>
         </div>
       </li>
       <li>
         <a href="">Redmin红米</a>
         <!-- 下拉菜单2 -->
         <div class="xiala2">
            <ul>
                <li>
                  <div>
                    <a href="">
                        <img src="img/header/red1.jpg" alt="">
                    </a>
                  </div>
                  <a href="">Redmi K20 Pro</a>
                  <p>2499元起</p>
                </li>
                <li>
                  <div>
                    <a href="">
                       <img src="img/header/red2.jpg" alt="">
                    </a>
                  </div>
                   <a href="">Redmi K20</a>
                   <p>1999元起</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/red3.jpg" alt="">
                    </a>
                  </div>
                  <a href="">Redmi 7A</a>
                  <p>549元起</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/red4.jpg" alt="">
                    </a>
                  </div>
                  <a href="">Redmi Note 7 Pro</a>
                  <p>1599元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/red5.png" alt="">
                    </a>
                  </div>
                  <a href="">Redmi Note 7</a>
                  <p>999元起</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/red6.png" alt="">
                    </a>
                  </div>
                  <a href="">Redmi 7</a>
                  <p>699元起</p>
                  
                </li>
              </ul>
          </div>
        </li>
       <li>
         <a href="">电视</a>
         <!-- 下拉菜单3 -->
         <div class="xiala3">
            <ul>
                <li>
                  <div>
                    <a href="">
                        <img src="img/header/tv1.jpg" alt="">
                    </a>
                  </div>
                  <a href="">小米壁画电视 65英寸</a>
                  <p>6999元</p>
                </li>
                <li>
                  <div>
                    <a href="">
                       <img src="img/header/tv2.jpg" alt="">
                    </a>
                  </div>
                   <a href="">小米全面屏电视E55A</a>
                   <p>1999元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/tv3.png" alt="">
                    </a>
                  </div>
                  <a href="">小米电视4A 32英寸</a>
                  <p>699元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/tv4.jpg" alt="">
                    </a>
                  </div>
                  <a href="">小米电视4A 55英寸</a>
                  <p>1899元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/tv5.jpg" alt="">
                    </a>
                  </div>
                  <a href="">小米电视4A 65英寸</a>
                  <p>2889元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/tv6.png" alt="">
                    </a>
                  </div>
                  <a href="">查看全部</a>
                  <a href="">小米电视</a>
                  
                </li>
              </ul>
          </div>
        </li>
       <li>
         <a href="">笔记本</a>
         <!-- 下拉菜单4 -->
         <div class="xiala4">
            <ul>
                <li>
                  <div>
                    <a href="">
                        <img src="img/header/bk1.png" alt="">
                    </a>
                  </div>
                  <a href="">RedmiBook 14</a>
                  <p>3999元起</p>
                </li>
                <li>
                  <div>
                    <a href="">
                       <img src="img/header/bk2.png" alt="">
                    </a>
                  </div>
                   <a href="">小米笔记本 Air 12.5"</a>
                   <p>3599元起</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/bk3.png" alt="">
                    </a>
                  </div>
                  <a href="">小米笔记本 Air 13.3"</a>
                  <p>4999元起</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/bk4.png" alt="">
                    </a>
                  </div>
                  <a href="">小米笔记本 15.6"</a>
                  <p>2899元起</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/bk5.png" alt="">
                    </a>
                  </div>
                  <a href="">小米笔记本 Pro 15.6"</a>
                  <p>4999元起</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/bk6.png" alt="">
                    </a>
                  </div>
                  <a href="">小米游戏本</a>
                  <p>6499元起</p>
                  
                </li>
              </ul>
          </div>
        </li>
       <li>
         <a href="">家电</a>
         <!-- 下拉菜单5 -->
         <div class="xiala5">
            <ul>
                <li>
                  <div>
                    <a href="">
                        <img src="img/header/jd1.png" alt="">
                    </a>
                  </div>
                  <a href="">米家互联网空调（一级能效）</a>
                  <p>2199元</p>
                </li>
                <li>
                  <div>
                    <a href="">
                       <img src="img/header/jd2.png" alt="">
                    </a>
                  </div>
                   <a href="">米家互联网洗烘一体机 10kg</a>
                   <p>1999元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/jd3.jpg" alt="">
                    </a>
                  </div>
                  <a href="">Redmi全自动波轮洗衣机1A</a>
                  <p>699元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/jd4.jpg" alt="">
                    </a>
                  </div>
                  <a href="">小米净水器</a>
                  <p>1999元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/jd5.jpg" alt="">
                    </a>
                  </div>
                  <a href="">米家扫地机器人</a>
                  <p>1699元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/jd6.jpg" alt="">
                    </a>
                  </div>
                  <a href="">烟灶套装</a>
                  <p>1999元</p>
                  
                </li>
              </ul>
         </div>
        </li>
       <li>
         <a href="">路由器</a>
         <!-- 下拉菜单6 -->
         <div class="xiala6">
            <ul>
                <li>
                  <div>
                    <a href="">
                        <img src="img/header/ly1.jpg" alt="">
                    </a>
                  </div>
                  <a href="">小米路由器 Mesh</a>
                  <p>999元</p>
                </li>
                <li>
                  <div>
                    <a href="">
                       <img src="img/header/ly2.jpg" alt="">
                    </a>
                  </div>
                   <a href="">小米路由器4A 千兆版</a>
                   <p>169元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/ly3.jpg" alt="">
                    </a>
                  </div>
                  <a href="">小米路由器 4C</a>
                  <p>99元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/ly4.jpg" alt="">
                    </a>
                  </div>
                  <a href="">小米路由器4A</a>
                  <p>119元</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/ly5.png" alt="">
                    </a>
                  </div>
                  <a href="">小米路由器 HD/Pro</a>
                  <p>499元起</p>
                  
                </li>
                <li>
                  <div>
                    <a href="">
                      <img src="img/header/ly6.png" alt="">
                    </a>
                  </div>
                  <a href="">查看全部小米路由器</a>
                  
                  
                </li>
              </ul>
         </div>
        </li>
       <li>
         <a href="">智能硬件</a>
          <!-- 下拉菜单7 -->
          <div class="xiala7">
              <ul>
                  <li>
                    <div>
                      <a href="">
                          <img src="img/header/yj1.jpg" alt="">
                      </a>
                    </div>
                    <a href="">小米米家智能摄像机云台版</a>
                    <p>189元</p>
                  </li>
                  <li>
                    <div>
                      <a href="">
                         <img src="img/header/yj2.jpg" alt="">
                      </a>
                    </div>
                     <a href="">小米小爱老师</a>
                     <p>499元</p>
                    
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <img src="img/header/yj3.jpg" alt="">
                      </a>
                    </div>
                    <a href="">小米米家智能门锁</a>
                    <p>1299元</p>
                    
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <img src="img/header/yj4.jpg" alt="">
                      </a>
                    </div>
                    <a href="">小米小爱触屏音箱</a>
                    <p>249元</p>
                    
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <img src="img/header/yj5.jpg" alt="">
                      </a>
                    </div>
                    <a href="">小爱万能遥控版</a>
                    <p>199元</p>
                    
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <img src="img/header/yj6.jpg" alt="">
                      </a>
                    </div>
                    <a href="">查看全部</a>
                    <a href="">智能硬件</a>
                    
                  </li>
                </ul>
           </div>
        </li>
       <li><a href="">服务</a></li>
       <li><a href="">社区</a></li>
     </ul>
    </div>
    <div class="search">
      <input type="text">
      <a href=""><img src="" alt=""><img src="img/header/放大镜.png" alt=""></a>
    </div>
  </div>
  
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  
  //获取用户名等信息
  computed://{
   mapState({
      uname: state => state.uname,   //将这个值赋值给变量uname
      uname:'uname',
      phone:state => state.phone,
      phone:"phone"
   }),
  //  user(){
  //    return this.$store.state.uname;
  //  }
  //  },
   data(){
     return {
       active:true
       
     }
   },
   mounted(){
     console.log(sessionStorage.uname)
     this.$store.state.uname=sessionStorage.uname
   },
   methods:{
     arrow_orange(){
       this.active=false
     },
     arrow_white(){
       this.active=true
     },

   }
   
}
</script>

<style scoped>
  
   /* 顶部背景不含内容 */
 /* .top{
  width:100%;
  background:#333;
} */
.top{
  background:#333;
}
/* 顶部背景包含内容 */
.contain{
  width:1226px;
  height:40px;
  
  margin:0 auto;
}
/* 顶部a标签设置 */
.contain a{
  color:#b0b0b0;
  font-size: 12px;
  line-height: 40px;
  display:inline-block;
}
/* 顶部a标签鼠标悬浮 */
.contain a:hover{
  color:#fff;
}
/* 顶部|设置 */
.top span{
  font-size: 12px;
  color:#424242;
  font-weight: lighter;
}
/* 顶部左侧|有外边距--- 需再调整 */
.top_left span{
  margin:0 7px;
}
/* 顶部左侧选项设置 */
.top_left{
  float:left;
}
/* 购物车 */
.top_car{
  float: right;
  display:block;
  height:40px;
  width:120px;
  text-align: center;
  background: #424242;
  position: relative;
}
.top_car img{
  position:absolute;
  left:17px;
  top:13px;
}
.top_car span{
  margin-left:20px;
  color:#b0b0b0;
}
/*未登录时*/
/* 注册、登陆 */
.top_user{
  float: right;
}
.top_user a{
  padding:0 5px;
}
#top_user_msg{
  padding:0 25px 0 10px;
  cursor: text;
}
/*登录后*/
.top_user1{
  float: right;
  display:flex;
  line-height: 40px;
  position:relative
}
.user_container:hover{
  background:#fff;
  height:212px;
  border:1px solid #e0e0e0;
  
}

.user_container:hover .username{
  color:#ff6700;
}
.user_container{
  width:100px;
  height:40px;
  z-index:100;
  position: absolute;
  left:-94px;
  overflow: hidden;
}
.userid .username{
  display:block;
  width:40px;
  float:left;
  color:#e0e0e0;
  overflow: hidden;/*自动隐藏文字*/
  text-overflow: ellipsis;/*文字隐藏后添加省略号*/
  display: -webkit-box;
  -webkit-line-clamp:1; /*想要显示的行数*/
  -webkit-box-orient: vertical;
  
}

.userid{
  margin-left:10px;
}

.top_user1 a{
  padding:0 15px;
}
/*用户名鼠标悬浮颜色*/ 
.user_container a:hover{
  color:#ff6700 !important;
}
/*用户下拉菜单*/

.user_drop{
  width:100px;
  padding:7px 0;
  color:#333;
  font-size:10px;
}
.user_drop li{
  height:30px;
  text-align: center;
}
/* 头部设置--另写响应式 */
.header_container{
  width:1226px;
  height:100px;
  margin:0 auto;
  /* 下拉菜单的相对定位 */
  position:relative;
}
/* 头部logo */
.header_logo{
 width:55px;
 background-color: #ff6700;
 padding-top:2px;
 margin-top:22px;
 float: left;
}
/* 头部导航设置 */
.header_nav{
  float:left;
}
.header_nav>ul{
  float: left;
  margin:12px 0 0 200px;
}
.header_nav li{
 float: left;
}
.header_nav>ul>li>a{
  font-size: 16px;
  color:#333;
  display:block;
  padding:26px 10px 41px;
}
/* 头部div坍塌 */
.header_nav::after{
  content:"";
  display:block;
  clear:both;
}  
/* 头部搜索 */
.search{
  margin-top:25px;
  float:right;
  display:flex;
}
.search input{
  width:245px;height:50px;
  border: 1px solid #e0e0e0;
}
.search a{
  display:block;
  width:52px;height:50px;
  border:1px solid #e0e0e0;
 
}
/* 搜索放大镜鼠标悬浮 */
.search a:hover{
  background:#f25807;
}
.search a img{
  padding:9px 0 0 5px; ;
}
/* 头部导航栏鼠标悬浮变色 */
.header_nav>ul>li>a:hover{
  color:#ff6700;
}
/* 下拉菜单 */
/* 小米手机下拉菜单1 */
/* 触发元素相对定位1.2.3.. */
/* #d1,#d2{
  position: relative;---------------------
} */
/* 下拉菜单设置 */
.xiala,.xiala2,.xiala3,.xiala4,.xiala5,.xiala6,.xiala7{
  background:#fff;
  
  width:1349px;
  /* height:230px; */
  height:0;
  overflow:hidden;
  /* 下拉动画 */
  transition:height .2s .3s;

  z-index: 100;
   /* display:none;  */
  
}
/* 下拉菜单绝对定位所有 */
.xiala,.xiala2,.xiala3,.xiala4,.xiala5,.xiala6,.xiala7{
  position: absolute;
  left:-50px;
  top:100px;
}

/* 鼠标悬浮打开下拉菜单1-6 （两种：一.使用display：none和block。二.使用height：0，overflow：hidden和height：230px） */
.header_nav li:hover .xiala{
  /* display:block; */
  height:230px;
  
}
 .header_nav li:hover .xiala2{
  
  height:230px;
} 
.header_nav li:hover .xiala3{
  
  height:230px;
} 
.header_nav li:hover .xiala4{
  
  height:230px;
} 
.header_nav li:hover .xiala5{
  
  height:230px;
} 
.header_nav li:hover .xiala6{
  
  height:230px;
} 
.header_nav li:hover .xiala7{
  
  height:230px;
} 
/* 下拉菜单居中 */
.xiala ul,.xiala2 ul,.xiala3 ul,.xiala4 ul,.xiala5 ul,.xiala6 ul,.xiala7 ul{
  display:flex;
   justify-content:center; 
}
/* 图片大小 */
.xiala li img,.xiala2 li img,.xiala3 li img,.xiala4 li img,.xiala5 li img,.xiala6 li img,.xiala7 li img{
  width:160px;
  height:110px;
  margin:10px 0 5px;
}
/* 列表li的设置 */
.xiala li,.xiala2 li,.xiala3 li,.xiala4 li,.xiala5 li,.xiala6 li,.xiala7 li{
  text-align:center;
  font-size:12px;
  color:#ff6700;
  margin:20px;
}
/* 列表a标签 */
.xiala li a,.xiala2 li a,.xiala3 li a,.xiala4 li a,.xiala5 li a,.xiala6 li a,.xiala7 li a{
  color:#333;
}
/* 列表p标签 */
.xiala li p,.xiala2 li p,.xiala3 li p,.xiala4 li p,.xiala5 li p,.xiala6 li p,.xiala7 li p{
  margin-top:5px;
}
</style>
