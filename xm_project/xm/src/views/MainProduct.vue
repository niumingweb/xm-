<template>
  <div>
   <my-header></my-header>
   <!-- 固定头部标题 -->
   <div class="nav_container">
     <div class="nav_fix">
       <div class="nav_name">
         小米净水器600G
       </div>
       <div class="appraise">
         <a href="javascript">用户评价</a>
       </div>
     </div>
   </div>
   <div class="nav_log_container">
   <!-- 登录标题 -->
   <div class="nav_log" v-show="active_log==true">
      为方便您购买，请提前登录 
      <router-link to="/user_log">立即登录</router-link>
      <a href="javascript:;" @click="log_out"><img src="img/details/cross.png" alt=""></a>
    </div>
   </div>
   <!-- 商品主页面 -->
   <div class="product_intr">
     <!-- 轮播图 -->
     <!-- <div class="carousel">
       <el-carousel indicator-position="outside" height=560px>
         <el-carousel-item v-for="item in pics" :key="item.id">
           
           <img :src="item.pic" style="width:100%">
         </el-carousel-item>
       </el-carousel> -->
       <div class="carousel">
       <el-carousel indicator-position="outside" height=560px>
         <el-carousel-item v-for="(item,index) of pics" :key="index">
           <!-- <h3>{{ item.pic }}</h3> -->
           <img :src="item" style="width:100%">
         </el-carousel-item>
       </el-carousel>
     </div>
     <!-- 产品详情 -->
     <div class="product_detail">
       <h2 class="product_name" v-text="p_details.ename"></h2>
       <p class="p_desc" v-text="p_details.edesc"></p>
       <div class="product_main">
         <p class="aftersale" v-text="p_details.aftersale"></p>
         <div class="price">
           ￥<em>{{p_details.eprice}}元&nbsp;&nbsp;</em>
           <s class="changeprice"></s>
         </div>
         <div class="useraddress">
           <p>
             <span>北京</span>
             <span>北京市</span>
             <span>东城区</span>
             <span>安定门街道</span>
             <span class="switch_choose">修改</span>
           </p>
           <p class="isonsale" v-text="p_details.issale"></p>
         </div>
         <div>
           <p class="select_title">选择颜色</p>
           <ul class="select_list">
             <li class="active"> 
               <a href="" v-text="p_details.especs">
                 <img src="" alt="">
               </a>
             </li>
           </ul>
         </div>
         <div class="productlist">
           <p>{{p_details.ename}} {{p_details.especs}} 
             <span>{{p_details.eprice}}元</span>
             <s></s>
           </p>
           <p class="totalprice">总计 : {{p_details.eprice}}元</p>
         </div>
         <div class="probuybox">
           <a class="probuy" href="javascript:;">登录后购买</a>
           <a class="prolike" href="javascript:;"><img src="" alt="">喜欢</a>
           
         </div>
         <div class="policy">
           <a href="">
             <img src="img/main_product/duihao.png" alt="">小米自营
           </a>
           <a href="">
             <img src="img/main_product/duihao.png" alt="">小米发货
           </a>
           <a href="">
             <img src="img/main_product/duihao.png" alt="">支持7天无理由退货(安装后不支持)
           </a>
           <a href="">
             <img src="img/main_product/duihao.png" alt="">运费说明
           </a>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active_log:true,
      p_details:[],
      // pics:[
      //   {id:0,pic:"img/details/e1.jpg"},
      //   {id:1,pic:"img/details/e2.jpg"},
      //   {id:2,pic:"img/details/e3.jpg"},
      //   {id:3,pic:"img/details/e4.jpg"}]

      pics:[]
    }
  },
  props:["eid"],
  created(){
    this.onload()
  },
  methods:{
    log_out(){
      this.active_log=false;
    },
    onload(){
      var url="/product/main_detail";
      this.axios.get(url,{params:{eid:this.eid}}).then(res=>{
      console.log(res.data)
      this.p_details=res.data[0]
      console.log(this.p_details.dpic1)
      this.pics=[]
      this.pics.push(
        this.p_details.dpic1,
        this.p_details.dpic2,
        this.p_details.dpic3,
        this.p_details.dpic4)
      
      console.log(this.pics)
    })
    }
  },
  watch:{
    eid(){
      this.onload()
    }
  }
}
</script>
<style scoped>
  /*头部固定标题*/
  .nav_container{
    min-width:1224px;
    border-top:1px solid #ccc;
    box-shadow:#ccc 0px 5px 5px -2px; 
  }
  .nav_fix{
    width:1224px;
    display:flex;
    margin:0 auto;
    justify-content: space-between;
  }
  /*商品名设置*/
  .nav_name{
    height:60px;
    color:#212121;
    line-height:60px;
    font-size:18px;
  }
  /*评价设置*/
  .appraise{
    height:60px;
    color:#616161;
    line-height:60px;
  }
  .appraise a{
    color:#616161;
    font-size:18px;
    font-size:14px;
  }
  /*鼠标悬浮*/
  .appraise a:hover{
    color:#ff6700;
  }
  /*登录标题设置*/
  .nav_log_container{
    min-width:1226px;
    background:#f7f7f7;
    margin-top:5px;
  }
  .nav_log{
    text-align:center;
    height:50px;
    line-height:50px;
    font-size:14px;
    font-size:14px;
  }
  .nav_log a{
    color:#ff6700;
    font-size:14px;
    margin-left:20px;
  }
  /* 叉号设置 */
  .nav_log img{
    width:12px;
  }
  /*产品介绍div */
  .product_intr{
    min-width:1226px;
    margin:32px auto 0;
    display:flex;
    justify-content: space-around
  }
  /* 左侧轮播图 */
  .carousel{
    width:606px;
    height:560px;
    
  }
  /*右侧产品详情*/
  .product_detail{
    width:606px;
    height:831px;
    
  }
  /*产品名称*/
  .product_name{
    color:#212121;
    font-size:24px;
    font-weight:normal;
  }
  /* 场频介绍 */
  .p_desc{
    color: #b0b0b0;
    font-size:14px;
    padding-top:8px;
  }
  /* 是否自营 */
  .aftersale{
    color: #ff6700;
    font-size: 14px;
    margin:14px 0;
  }
  /* 价格 */
  .price{
    font-size: 18px;
    color: #ff6700;
    margin-top:-2px;
    padding-bottom:15px;
    border-bottom:1px solid #e0e0e0;
  }
  /* 变动前价格 */
   .changeprice{
     color:#b0b0b0;
     margin-left:1px;
     
   }
   /* 用户地址 */
   /* 用户地址外层div */
   .useraddress{
     margin:35px 0;
     border:1px solid #e0e0e0;
     background:#fafafa;
     padding:20px 20px;
   }
   /* 地址字体样式 */
   .useraddress span{
     color:#333;
     font-size:14px;
     margin-right:14px;
   }
   /* 修改字体样式 */
   .useraddress .switch_choose{
     color:#ff6700
   }
   /* 有无库存 */
   .useraddress .isonsale{
     color:#ff6700;
     font-size:14px;
   }
   /* 商品样式标题 */
   .select_title{
     font-size:18px;
     color:#333;
   }
   /* 商品样式选择列表ul设置 */
    .select_list{
      margin:20px 0;
    }
    /* 每个商品样式选择列表的li（未选中） */
    .select_list li{
      width:300px;
      height:44px;
      border:1px solid #ccc;
      text-align:center;
      line-height:44px;
    }
    /* 商品样式选择列表li（选中） */
    .select_list li.active{
      border:1px solid#ff6700;
      color:#ff6700;
    }
    /* 商品样式选择列表a标签（选中） */
    .select_list li.active a{
      color:#ff6700;
    }
    /* 商品列表 */
    /* 商品列表div设置 */
    .productlist{
      padding:30px;
      background:#f9f9fa;
      margin-bottom:30px;
      font-size:14px;
      color:#616161;
    }
    .productlist span{
      margin-left:60%;
    }
    /* 商品总价 */
    .totalprice{
      font-size:20px;
      color:#ff6700;
      margin-top:20px;
    }
    /* 购买 div设置*/
    .probuybox{
      margin-bottom:15px;
    }
    /* 购买按钮设置 */
    a.probuy{
      display:inline-block;
      width:300px;
      height:54px;
      text-align: center;
      line-height:54px;
      background:#ff6700;
      color:#fff;
      margin-right:10px;
      opacity:.8;
      transition:color .4s;
    }
    a.probuy:hover{
      opacity: 1;
    }
    /* 加入喜欢按钮 */
    a.prolike{
      display:inline-block;
      width:142px;
      height:54px;
      text-align: center;
      line-height:54px;
      background:#b0b0b0;
      opacity:.8;
      color:#fff;
      transition:color .4s;
    }
    a.prolike:hover{
      opacity:1;
    }
    /* 售后政策 */
    .policy a{
      font-size:14px;
      color:#ccc;
      display:inline-block;
      height:30px;
      line-height:30px;
      margin-right:10px;
    } 
    
    .policy img{
      display:inline-block;
      width:18px;
      line-height:18px;
      vertical-align: middle;
      margin:0 5px;
    }  
     /* lunbo箭头位置 */
  .el-carousel__arrow--left{
    left:10px ;
  }
</style>
<style>
 
</style>
