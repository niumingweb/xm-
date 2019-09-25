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
            <div class="user_container"><a href="javascript:;"><span>哈哈{{uname}}</span>svg</a>
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
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
/*头部*/
/*头部外层*/
  .head_container{
    min-width:1226px;
    margin:0 auto;
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
    margin-right:24px;
    position:relative;
  }
  .user_info{
    border:1px solid red;
    position:absolute;
    top:70px;
    left:-30px;
    width:118px;
    height:164px;
  }
  .user_info li{
    width:120px;
    height:30px;
    text-align: center;
  }
  .user_info li:first-child{
    margin-top:-28px;
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
