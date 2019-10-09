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
            <div class="user_container" @mouseover="getW" @mouseout="getO"><a href="javascript:;"><span>{{$store.state.uname}}</span><svg v-show="getw" style="text-align=left;" t="1569418787423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474" width="20" height="20"><path d="M512 724.992c-12.288 0-23.552-9.728-31.744-18.432L154.624 380.928c-17.408-17.408-6.656-35.328 11.264-52.736 16.384-16.384 32.256-31.744 52.736-11.264l293.888 293.888L805.888 317.44c17.408-17.408 32.768-6.144 51.2 12.288 17.408 17.408 29.696 33.792 12.288 51.2L543.744 706.56c-8.192 8.704-19.456 18.432-31.744 18.432z" fill="#424242" p-id="2475"></path></svg>
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
    <div class="cart_background">
      <div class="cart_container">
        <div class="cart_info">
          <div class="allselect">
            
            <i>√</i>    
            全选
          </div>
          <div class="p_holder"></div>
          <div class="p_title">商品名称</div>
          <div class="p_price">单价</div>
          <div class="p_count">数量</div>
          <div class="p_total">小计</div>
          <div class="p_handle">操作</div>
        </div>
        <div class="cart_item_container" v-for="(item,index) of list" :key="index">
          <div class="cart_item">
            <div class="item_select">
              
              <i>
                √
              </i>
            </div>
            <div class="item_img">
              <img :src="item.epic" alt="">
            </div>
            <div class="item_title">
              <a href="" v-text="item.ename">	
               
              </a>
            </div>
            <div class="item_price">
              {{item.eprice}}元
            </div>
            <div class="item_count">
            <a href="javascript:;" @click="minus(index)">-</a>
            <input type="text" :value="item.ecount">
            <a href="javascript:;" @click="plus(index)">+</a>
            </div>
            <div class="item_total">
              {{item.ecount*item.eprice}}元
              </div>
            <div class="item_handle" @click="Del(index)">
              x
            </div>
          </div>
          <div class="extend_buy_box">
            <div class="extend_buy">
              <svg t="1570093702506" class="icon first" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3090" width="36" height="36"><path d="M63.79008 512c0 247.54176 200.66816 448.20992 448.20992 448.20992S960.20992 759.54176 960.20992 512s-200.66816-448.20992-448.20992-448.20992S63.79008 264.45824 63.79008 512z m512.16896-255.82592l0 191.86688 191.86688 0L767.82592 575.95904l-191.86688 0L575.95904 767.82592 448.04096 767.82592l0-191.86688L256.17408 575.95904l0-127.91808 191.872 0 0-191.86688 127.91296 0z" fill="#fd5c02" p-id="3091"></path></svg>
              意外保障服务 9元
              <a href="javascript:;">了解意外保护
                <svg t="1570089532371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3907" width="22" height="22"><path d="M323.01725661 172.11508068c-10.4406554 9.89759614-10.4406554 25.95777177-2e-8 35.85615816l320.49208132 304.03113267-320.49208132 304.02006618c-10.4406554 9.90391963-10.44065539 25.95856201 0 35.8624824 10.43512217 9.90312939 27.36008257 9.90312939 37.79520474 0l333.83300708-316.72228391c0 0 14.16618605-13.12591476 14.16618605-23.16026391 0-9.24782161-14.16618604-23.16579714-14.16618605-23.16579714L360.81325157 172.11508068C350.37733917 162.21116106 333.45237876 162.21116105 323.01725661 172.11508068z" p-id="3908" fill="#ff6700"></path></svg>
              </a>
            </div>
            <div class="extend_repair">
              <svg t="1570093702506" class="icon first" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3090" width="36" height="36"><path d="M63.79008 512c0 247.54176 200.66816 448.20992 448.20992 448.20992S960.20992 759.54176 960.20992 512s-200.66816-448.20992-448.20992-448.20992S63.79008 264.45824 63.79008 512z m512.16896-255.82592l0 191.86688 191.86688 0L767.82592 575.95904l-191.86688 0L575.95904 767.82592 448.04096 767.82592l0-191.86688L256.17408 575.95904l0-127.91808 191.872 0 0-191.86688 127.91296 0z" fill="#fd5c02" p-id="3091"></path></svg>
              延长报修服务 29元
              <a href="javascript:;">了解延长报修
                <svg t="1570089532371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3907" width="22" height="22"><path d="M323.01725661 172.11508068c-10.4406554 9.89759614-10.4406554 25.95777177-2e-8 35.85615816l320.49208132 304.03113267-320.49208132 304.02006618c-10.4406554 9.90391963-10.44065539 25.95856201 0 35.8624824 10.43512217 9.90312939 27.36008257 9.90312939 37.79520474 0l333.83300708-316.72228391c0 0 14.16618605-13.12591476 14.16618605-23.16026391 0-9.24782161-14.16618604-23.16579714-14.16618605-23.16579714L360.81325157 172.11508068C350.37733917 162.21116106 333.45237876 162.21116105 323.01725661 172.11508068z" p-id="3908" fill="#ff6700"></path></svg>
              </a>
            </div>
          </div>
          <!-- <div class="cart_item">
            <div class="item_select">
              
              <i>
                √
              </i>
            </div>
            <div class="item_img">
              <img src="" alt="">
            </div>
            <div class="item_title">
              <a href="">	
                Redmi Note 8 6GB+64GB 曜石黑 64GB
              </a>
            </div>
            <div class="item_price">
              1199元
            </div>
            <div class="item_count">
            <a href="javascript:;">-</a>
            <input type="text" value="1">
            <a href="javascript:;">+</a>
            </div>
            <div class="item_total">
              1199元
              </div>
            <div class="item_handle">
              x
            </div>
          </div>
          <div class="extend_buy_box">
            <div class="extend_buy">
              <svg t="1570093702506" class="icon first" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3090" width="36" height="36"><path d="M63.79008 512c0 247.54176 200.66816 448.20992 448.20992 448.20992S960.20992 759.54176 960.20992 512s-200.66816-448.20992-448.20992-448.20992S63.79008 264.45824 63.79008 512z m512.16896-255.82592l0 191.86688 191.86688 0L767.82592 575.95904l-191.86688 0L575.95904 767.82592 448.04096 767.82592l0-191.86688L256.17408 575.95904l0-127.91808 191.872 0 0-191.86688 127.91296 0z" fill="#fd5c02" p-id="3091"></path></svg>
              意外保障服务 9元
              <a href="javascript:;">了解意外保护
                <svg t="1570089532371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3907" width="22" height="22"><path d="M323.01725661 172.11508068c-10.4406554 9.89759614-10.4406554 25.95777177-2e-8 35.85615816l320.49208132 304.03113267-320.49208132 304.02006618c-10.4406554 9.90391963-10.44065539 25.95856201 0 35.8624824 10.43512217 9.90312939 27.36008257 9.90312939 37.79520474 0l333.83300708-316.72228391c0 0 14.16618605-13.12591476 14.16618605-23.16026391 0-9.24782161-14.16618604-23.16579714-14.16618605-23.16579714L360.81325157 172.11508068C350.37733917 162.21116106 333.45237876 162.21116105 323.01725661 172.11508068z" p-id="3908" fill="#ff6700"></path></svg>
              </a>
            </div>
            <div class="extend_repair">
              <svg t="1570093702506" class="icon first" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3090" width="36" height="36"><path d="M63.79008 512c0 247.54176 200.66816 448.20992 448.20992 448.20992S960.20992 759.54176 960.20992 512s-200.66816-448.20992-448.20992-448.20992S63.79008 264.45824 63.79008 512z m512.16896-255.82592l0 191.86688 191.86688 0L767.82592 575.95904l-191.86688 0L575.95904 767.82592 448.04096 767.82592l0-191.86688L256.17408 575.95904l0-127.91808 191.872 0 0-191.86688 127.91296 0z" fill="#fd5c02" p-id="3091"></path></svg>
              延长报修服务 29元
              <a href="javascript:;">了解延长报修
                <svg t="1570089532371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3907" width="22" height="22"><path d="M323.01725661 172.11508068c-10.4406554 9.89759614-10.4406554 25.95777177-2e-8 35.85615816l320.49208132 304.03113267-320.49208132 304.02006618c-10.4406554 9.90391963-10.44065539 25.95856201 0 35.8624824 10.43512217 9.90312939 27.36008257 9.90312939 37.79520474 0l333.83300708-316.72228391c0 0 14.16618605-13.12591476 14.16618605-23.16026391 0-9.24782161-14.16618604-23.16579714-14.16618605-23.16579714L360.81325157 172.11508068C350.37733917 162.21116106 333.45237876 162.21116105 323.01725661 172.11508068z" p-id="3908" fill="#ff6700"></path></svg>
              </a>
            </div>
          </div> -->
        </div>
      </div>
      <div class="cart_clear">
        <div class="choose">
          <a href="javascript:;">继续购物</a>
          <span>|</span>
          <span>共<i>{{totalcount}}</i>件商品，已选择<i>1</i>件商品</span>
        </div>
        <div class="checkout">
          <span>合计：<em>{{totalprice}}</em>元</span>
          <a href="javascript:;">去结算</a>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      getw:true,
      list:[],
      
    }
  },
  computed:{
    totalprice(){
      var total=0;
      for(var i=0;i<this.list.length;i++){
        total+=this.list[i].ecount*this.list[i].eprice
        
      }
      return total
    },
    totalcount(){
      var totalnum=0;
      for(var i=0;i<this.list.length;i++){
        totalnum+=this.list[i].ecount
      }
      return totalnum
    } 
  },
  methods:{
     
    getW(){
      this.getw=false
    },
    getO(){
      this.getw=true
    },
    //数量-
    minus(index){
      var ecount=this.list[index].ecount
      if(ecount>1){
        var eid=this.list[index].eid
        var data={eid}
        console.log(ecount)
        var url="/cart/cart_minus"
        this.axios.get(url,{params:data}).then(res=>{
          console.log(res.data.code)
          if(res.data.code=1){
            this.loadMore()
          }
        })
      }
    },
    //数量+1
    plus(index){
      var eid=this.list[index].eid
      var data={eid}
      console.log(data)
      var url="/cart/cart_plus"
      this.axios.get(url,{params:data}).then(res=>{
        console.log(res.data.code)
        if(res.data.code=1){
          this.loadMore()
        }
      })
    },
    
    Del(i){
      //获取商品的eid
      console.log(this.list[i].eid)
      this.$messagebox.confirm("是否删除当前商品").then(res=>{
        var eid=this.list[i].eid
        var url="/cart/cart_del";
        var data={eid}
        this.axios.get(url,{params:data}).then(res=>{
          console.log(res.data)
          if(res.data.code==1){
            alert("删除成功")
            this.loadMore()  //刷新
          }else{
            alert("删除失败")
          }
        })
      }).catch(err=>{})
    },
    //加载购物车信息
    loadMore(){
      var url="/cart/cart_info"
      this.axios.get(url).then(res=>{
        if(res.data.code==-1){
          this.$messagebox("消息","请先登录").then(res=>{
            this.$router.push('/user_log')
          })
        }else{
          console.log(res)
          this.list=res.data.data
          console.log(this.list)
          
        }
      })
    }
  },
  
  created(){
    this.loadMore()
    
  },
  mounted(){
    
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
    margin-bottom:48px;
  }
  /*购物车字*/
  .cart_title h1{
    color:#424242;
    font-size:28px;
    font-weight:normal;
    margin-right:10px;
    line-height: 102px;
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

  /*购物车下部背景*/
  .cart_background{
    min-width:1226px;
    background:#f5f5f5;
    padding:35px 0;
  }
  .cart_background:before{
    content:"";
    display:table;
  }
  /*购物车容器*/
  .cart_container{
    width:1226px;
    margin:0 auto;
    background:#fff;
  }
  /*购物车头信息*/
  div.cart_info{
    height:70px;
    padding-right:26px;
    border-bottom:1px solid #eee;
  }
  /*每个div设为行内块*/
  div.cart_info div{
    display:inline-block;
    
    line-height:70px;
    font-size:14px;
    color:#424242;
  }
  /*cart_info 下每个div快递*/
  /*全选宽度*/
  div.allselect{
    width:110px;
    text-align: center;
    
    
  }
  div.p_holder{
    width:120px;
  }
  div.p_title{
    width:380px;
  }
  div.p_price{
    width:158px;
    text-align: center;
  }
  div.p_count{
    width:150px;
    text-align: center;
  }
  div.p_total{
    width:200px;
    text-align: center;
  }
  div.p_handle{
    width:80px;
    text-align: center;
  }
  /*具体购物内容*/
  /*宽度*/
  div.cart_item{
    width:1226px;
  }
  /*cart_item 下的所有div*/
  div.cart_item div{
    display:inline-block;
    height:86px;
    vertical-align: middle;
    line-height: 86px;
  }
  /*cart_item 每个div宽度*/
  .item_select{
    width:110px;
    text-align: center;
   
  }
  .item_img{
    width:120px;
  }
  .item_img img{
    width:80px;
  }
  .item_title{
    width:380px;
  }
  .item_title a{
    color:#424242;
    font-size:18px;
    white-space: nowrap;
    
  }
  .item_price{
    width:158px;
    text-align: center;
    
  }
  .item_count{
    width:150px;
    text-align: center;
  }
  .item_total{
    width:201px;
    text-align: center;
    color:#ff6700;
  }
  .item_handle{
    width:80px;
    text-align: center;
    cursor: pointer;
  }
  /*设置对号*/
  /*不懂原理*/
  .cart_container i{
    display:inline-block;
    width:20px;
    height:20px;
    background:#ff6700;
    color:#fff;
    cursor: pointer;
    line-height: 20px;  /*！！！*/
  }
  .item_select i{
    margin-left:-32px;
  }
  /*单个商品数量*/
  
  .item_count a,.item_count input{
    display:inline-block;
    height:36px;
    width:36px;
    
  }
  .item_count input{
    width:72px !important;
    outline:none;
    border-width:0;
    text-align:center;
    
    
  }
  .item_count a{
    color:#757575;
    font-size:20px;
    line-height: 35px;
    border:1px solid #f5f5f5;
  }
   /*增加的服务*/
   .extend_buy_box{
     margin-left:110px;
     padding-bottom: 20px;
    
   }
   .extend_buy{
     width:1100px;
     height:50px;
     border:1px solid #f5f5f5;
     line-height: 50px;
     padding-left:20px;
     color:#424242;
     font-size:14px;
   }
   .extend_buy a {
     color:#ff6700;
   }
   .extend_repair{
     margin-top:20px;
     width:1100px;
     height:50px;
     border:1px solid #f5f5f5;
     line-height: 50px;
     padding-left:20px;
     color:#424242;
     font-size:14px;
   }
   .extend_repair a {
     color:#ff6700;
   }
   /*结算*/
   .cart_clear{
     display:flex;
     justify-content: space-between;
     width:1226px;
     height:50px;
     background:#fff;
     margin:20px auto;
     line-height: 50px;
   }
   .cart_clear i{
     color:#ff6700;
   }
   .choose{
     color:#757575;
     font-size:14px;
   }
   .choose a{
     color:#757575;
     margin-left:32px;
   }
   .choose span{
     margin-left:16px;
   }
   .checkout{
     display:flex;
     justify-content: space-between;
     width:350px;
   }
   .checkout a{
     display:block;
     width:205px;
     height:50px;
     background:#ff6700;
     text-align:center;
     color:#fff;
   }
   .checkout span{
     color:#ff6700;
     font-size:14px;
   }
   .checkout em{
     font-size:30px !important;
   }
   /*加号的图片*/
   .first{
     width:22px !important;
     height:22px !important;
     vertical-align: -0.5em !important;
   }
</style>
