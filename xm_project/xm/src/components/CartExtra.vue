<template>
  <div style="margin-top:50px">
    <div class="p_list_container">
      <div class="title">
        <h1>
          <span>购买购物车商品的人还买了</span>
        </h1>
      </div>
      <!-- 商品 -->
      <ul class="p_list" >
        <li class="product" v-for="(item,i) of list" :key="i">
          <div class="pic">
            <img :src="item.edpic" alt="">
          </div>
          <div class="pname" v-text="item.ename">
             
          </div>
          <div class="price">
            {{item.eprice}}元
          </div>
          <div class="p_add">
            <a href="javascript:;" @click="addcart(i)">加入购物车</a>
          </div>
        </li>
        
      </ul>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  methods:{
    
    loadMore1(){
        var url="/cart/cart_extra"
        this.axios.get(url).then(res=>{
        console.log(res.data)
        if(res.data.code==1){
          this.list=res.data.data
          console.log(this.list)
        }else{
          console.log("查询失败")
        }
      })
    },
    
    // 添加购物车商品
    addcart(i){
      var eid=this.list[i].eid
      var ename=this.list[i].ename
      var eprice=this.list[i].eprice
      var dpic1=this.list[i].edpic
      var url="/cart/addcart"
      var data={eid,ename,eprice,dpic1}
      console.log(data)
      this.axios.get(url,{params:data}).then(res=>{
        if(res.data.code==1){
          alert("添加成功")
          this.$router.go(0)
        }else{
          alert("添加失败")
        }
      })
    }
  },
  created(){
    this.loadMore1()
  }
}
</script>

<style scoped>
  /* 外层div */
  .p_list_container{
    
    min-width:1226px;
    
    margin:0 auto;
    background:#f5f5f5;
  }
  .title h1{
    text-align: center;
  }
  .title h1 span{
    color:#757575;
  }
  /* 商品 */
  .p_list{
    flex-wrap: wrap;
    width:1240px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
  }
  .product{
    width:194px;
    height:300px;
    margin-top:50px;
    padding:40px 20px 0;
    background:#fff;
    text-align:center;
  }
  /* 图片 */
  .pic{
    margin-bottom: 15px;
  }
  .pic img{
    width:140;
  }
  .pname{
    color:#333;
    font-size:14px;
    width:100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .price{
    color:#ff6700;
    font-size:14px;
    margin: 10px 0;
  }
  
  .p_add a{
    display:block;
    width:122px;
    height:30px;
    margin:0 auto;
    border:1px solid #ff6700;
    color:#ff6700;
    font-size:14px;
    line-height:30px;
  }
</style>
