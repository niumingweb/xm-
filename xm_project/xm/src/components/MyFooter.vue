<template>
  <div>
    <!-- 底部服务栏 -->
    <div class="footer_sever">
      <ul>
        <li>
          <a href="">
            <p><img src="" alt="">预约维修服务</p>
          </a>
        </li>
        <li>
          <a href="">
            <p><img src="" alt="">7天无理由退货</p>
          </a>
        </li>
        <li>
          <a href="">
            <p><img src="" alt="">15天免费换货</p>
          </a>
        </li>
        <li>
          <a href="">
            <p><img src="" alt="">满150元包邮</p>
          </a>
        </li>
        <li>
          <a href="">
            <p><img src="" alt="">520余家售后服务</p>
          </a>
        </li>
      </ul>
    </div>
    
    <!-- 底部连接栏 -->
    <div class="footer_link">
      <ul>
        <li>帮助中心</li>
        <li><a href="">账户管理</a></li>
        <li><a href="">购物指南</a></li>
        <li><a href="">订单操作</a></li>
      </ul>
      <ul>
        <li>服务支持</li>
        <li><a href="">售后政策</a></li>
        <li><a href="">自助服务</a></li>
        <li><a href="">相关下载</a></li>
      </ul>
      <ul>
        <li>线下门店</li>
        <li><a href="">小米之家</a></li>
        <li><a href="">服务网点</a></li>
        <li><a href="">授权体验店</a></li>
      </ul>
      <ul>
        <li>关于小米</li>
        <li><a href="">了解小米</a></li>
        <li><a href="">加入小米</a></li>
        <li><a href="">投资者关系</a></li>
      </ul>
      <ul>
        <li>关注我们</li>
        <li><a href="">新浪微博</a></li>
        <li><a href="">官方微信</a></li>
        <li><a href="">联系我们</a></li>
      </ul>
      <ul>
        <li>特色服务</li>
        <li><a href="">F 码通道</a></li>
        <li><a href="">礼物码</a></li>
        <li><a href="">防伪查询</a></li>
      </ul>
      <!-- 底部连接栏右电话服务 -->
      <div class="serve_phone">
        <p>400-100-5678</p>
        <p>周一至周日 8:00-18:00</p>
        <p>（仅收市话费）</p>
        <a href="">人工服务</a>
      </div>
    </div>
    <!-- 底部消息 -->
    <div class="footer_contain">
      <div class="footer_info">
        <div class="footer_logo">
          <img src="img/header/index_logo.png" alt="">
        </div>
        <div class="info_text">
          <p>
          <a href="">小米商城 </a>|
          <a href="">MIUI </a>|
          <a href="">米家 </a>|
          <a href="">米聊 </a>|
          <a href="">多看 </a>|
          <a href="">游戏 </a>|
          <a href="">路由器 </a>|
          <a href="">米粉卡 </a>|
          <a href="">政企服务 </a>|
          <a href="">小米天猫店 </a>|
          <a href="">隐私政策 </a>|
          <a href="">商城用户协议 </a>|
          <a href="">账号协议 </a>|
          <a href="">问题反馈 </a>|
          <a href="">廉政举报 </a>|
          <a href="">诚信合规 </a>|
          <a href="">Select Location</a>
        </p>
        </div>
        <div class="info_link">
          <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号 </p>
          <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告 </p>
          <p>增值电信业务许可证  网络食品经营备案（京）【2018】WLSPJYBAHF-12   食品经营许可证 </p>
          <p>违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
        </div>
        <div class="footer_pic">
          <a href=""><img src="img/footer/truste.png" alt=""></a>
          <a href=""><img src="img/footer/v-logo-2.png" alt=""></a>
          <a href=""><img src="img/footer/v-logo-2.png" alt=""></a>
          <a href=""><img src="img/footer/v-logo-3.png" alt=""></a>
          <a href=""><img src="img/footer/ba10428a4f9495ac310fd0b5e0cf8370.png" alt=""></a> 
        </div>
        <div class="footer_font">
            探索黑科技，小米为发烧而生
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style <style scoped>


/*所有a悬浮效果*/
a:hover{
  color:#ff6700;
}
  /* 底部服务栏设置 */
/* div设置 */
.footer_sever{
  width:1226px;
  border-bottom:1px solid #e6e6e6;
  margin:0 auto;
  padding:27px 0;
}
/* ul设置 */
.footer_sever>ul{
 
  display:flex;
  justify-content:space-around;
  
}
/* li设置 */
.footer_sever li{
  width:242.73px;
  border-right:1px solid #e6e6e6;
  height:25px;
}
/* 最后一个li有边距没有 */
.footer_sever li:last-child{
  border-right:none;
}
/* a设置 */
.footer_sever a{
  font-size: 16px;
  color:#616161;
  text-align:center;
  line-height:25px;
}
/* 鼠标悬停a */
.footer_sever a:hover{
  color:#ff6700;
}
/* 底部连接栏设置 */
/* footer_link 的div设置 */
.footer_link{
  display:flex;
  width:1226px;
  margin:0 auto;
  padding:40px 0;
}
/* footer_link 的ul设置 */
.footer_link ul{
  width:160px;
  height:112px;
}
/* footer_link 的第一个li设置 */
.footer_link ul li:first-child{
  margin-bottom: 26px;
  font-size:14px;
}
.footer_link ul li:first-child a{
  color:#545454;
}
/* footer_link 的除了第一个li设置 */
.footer_link ul li:not(:first-child){
  margin-top:10px;
  font-size:12px;
}
.footer_link ul li:not(:first-child) a{
  color:#757575;
}
/* 底部连接栏右电话服务div设置 */
.serve_phone{
  width:252px;
  text-align:center;
  /* 先设置个通用字体 */
  color:#616161;
  font-size:12px;
}
/* 底部连接栏右电话服务第一个p设置 */
.serve_phone p:first-child{
  margin-bottom:5px;
  color:#ff6700;
  font-size:22px;
  margin-bottom:5px;
}
/* 底部连接栏右电话服务第3个p设置 */
.serve_phone p:nth-child(3){
  margin:16px;
  color:#616161;
  font-size:12px;
  margin:0 0 16px;
}
/* 底部人工服务a设置 */
.serve_phone a{
  display:block;
  width:118px;
  padding:6px 0;
  border:1px solid #ff6700;
  margin:0 auto;
  color:#ff6700;
  transition:all .4s;

}
/* a鼠标悬浮 */
.serve_phone a:hover{
  color:#fff !important;
  background:#ff6700;
}
/* 底部消息div */
/* 底部最大div设置 */
.footer_contain{
  min-width:1226px;
  height:232px;
  margin:0 auto;
  background:#fafafa;
}
/* 清除高度溢出 */
.footer_contain::before{
  display:table;
  content:"";
}
/* 底部有内容部分div设置 */
.footer_info{
  width:1226px;
  margin:auto;
}
/* logo div设置 */
.footer_logo{
  width:55px;
 background-color: #ff6700;
 padding-top:2px;
 margin-top:22px;
 float: left;
}
/* info_text设置 */
.info_text{
  margin:20px 10px 0;
  float:left;
  font-size: 12px;
  color:#b0b0b0;
}
/* info_text中a设置 */
.info_text a{
  font-size:12px;
  color:#656565;
}
/* info_link的设置 */
.info_link{
  float:left;
  margin:0 0 0 8px;
  font-size:12px;
  color:#b0b0b0;
}
/* 最底层图片链接 */
.footer_pic{
  width:500px;
  float:left;
  margin-left:60px;
}
/* 图片的大小设置 */
.footer_pic img{
  width:85px;
  height:28;
}
/* 最底层字 */
.footer_font{
  width:1226px;
  text-align:center;
  float: left;
  margin-top:30px;
  color:#333333;
  font-size:14px;
}
/*所有a悬浮效果*/
a:hover{
  color:#ff6700 !important;
}
</style>
