<template>
  <div>
    <div class="head_container">
      <div class="head_content">
        <div class="head_left">
          <div class="logo">
            <img src="img/header/index_logo.png" alt="">
          </div>
          <div class="cart_title">
            <h1>我的购物车</h1>
          </div>
          <div class="notice">
            温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
          </div>
        </div>
        <div class="head_right">
          <div>
            <div class="user_container" @mouseover="getW" @mouseout="getO"><a href="javascript:;"><span>{{uname}}</span><svg v-show="getw" style="text-align=left;" t="1569418787423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474" width="20" height="20"><path d="M512 724.992c-12.288 0-23.552-9.728-31.744-18.432L154.624 380.928c-17.408-17.408-6.656-35.328 11.264-52.736 16.384-16.384 32.256-31.744 52.736-11.264l293.888 293.888L805.888 317.44c17.408-17.408 32.768-6.144 51.2 12.288 17.408 17.408 29.696 33.792 12.288 51.2L543.744 706.56c-8.192 8.704-19.456 18.432-31.744 18.432z" fill="#424242" p-id="2475"></path></svg>
            <svg v-show="getw==false" t="1569585103741" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2455" width="20" height="20"><path d="M944.083879 289.536302c14.264888 18.286482 15.462157 41.208541 2.670829 51.196009l-417.191704 325.421604c-2.885723 2.261507-12.156878 7.828292-13.732769 9.578146-15.544021 17.181311-37.893029 22.338774-49.947576 11.461029l-392.908648-354.309538c-12.054547-10.887978-9.271154-33.666774 6.272867-50.889017 15.544021-17.21201 37.893029-22.349007 49.988508-11.471262l357.584118 322.443783 408.258241-318.463122C907.910005 264.516466 929.84969 271.260054 944.083879 289.536302z" p-id="2456" fill="#ff6700"></path></svg>
            </a>
              <p class="shelter"></p> 
              <ul class="user_info">
                <li><a href="javascript:;">个人中心</a></li>
                <li><a href="javascript:;">评价晒单</a></li>
                <li><a href="javascript:;">我的喜欢</a></li>
                <li><a href="javascript:;">小米账号</a></li>
                <li><a href="javascript:;">退出登录</a></li>
              </ul>
            </div>
          </div>
          <div class="deal">
            <span>| </span>
            <a href="javascript:;">我的订单</a>
          </div>
        </div>
      </div>
    </div>
    <div class="cart_content">
      
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  //获取用户名等信息
  computed: mapState({
      uname: state => state.uname,   //将这个值赋值给变量uname
      uname:'uname'
      //phone:state => state.phone,
      //phone:"phone"
   }),
  data(){
    return {
      getw:true,
      
    }
  },
  methods:{
    getW(){
      this.getw=false
    },
    getO(){
      this.getw=true
    }
  }
}
</script>
<style scoped>
/*头部*/
/*头部外层*/
  .head_container{
    min-width:1226px;
    margin:0 auto;
    border-bottom:2px solid #f00;
  }
  /*头部内容div*/
  .head_content{
    width:1226px;
    height:102px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
    line-height: 102px;
  }
  /*头部左侧*/
  .head_left{
    display:flex
  }
  /*头部右侧*/
  .head_right{
    display:flex;
  }
  /*头部logo设置*/
  .logo{
    width:48px;
    height:48px;
    background:#ff6700;
    margin-top:23px;
    margin-right:40px;
  }
  .logo img{
    width:48px;
    margin-bottom:7px;
  }
  /*购物车字*/
  .cart_title h1{
    color:#424242;
    font-size:28px;
    font-weight:normal;
    margin-right:10px;
  }
  /*温馨提示*/
  .notice{
    color:#747474;
    font-size:12px;
    margin-top:6px;
  }
  /*用户*/
  .user_container{
    width:120px;
    height:70px;
    position:relative;
    background:#fff;
    z-index:2;
  }
  /* .user_container>a{
    margin-top:50px;
  } */
  .user_container a{
    /* display: block; */
    
    width:118px;
    height:34px;
    /* z-index: 100; */
    text-align:center;
  }
  .user_container a:hover{
    color:#ff6700;
  }
  .user_container span{
    float: left;
    /* display:block; */
    /* height:40px; */
    width:50px;
    margin-left:20px;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .shelter{
    background:#fff;
    position:absolute;
    width:118px;
    height:7px;
    z-index:10;
    top:63px;
    
  }
  .user_info{
    /* padding-top:11px; */
    position:absolute;
    top:69px;
    left:0px;
    width:118px;
    background:#fff;
    box-shadow: 0 2px 10px rgba(0,0,0,.15);
    z-index: 1; 
    overflow: hidden;
    transition: .3s;
    height:0;
  }
  .user_container:hover .user_info{
    height:164px;
  }
  .user_info li{
    width:120px;
    height:30px;
    text-align: center;
    line-height: 30px;
  }
  
  .user_container a{
    font-size:12px;
    color:#424242;
  }
  .deal{
    color:#e0e0e0;
    font-size:12px;
  }
  .deal a{
    color:#757575;
    font-size: 12px;
  }
</style>
