<template>
  <!-- 未完成 -->
  <div>
    <h3 ref="top">页面滚动事件</h3>
    <div class="container">
      <div style="width:500px;" :class="scroll<=toph?'':scroll<=difference?'fix':'down'" ref="leftdiv">
        
        
          haha
       
      </div>
      <div style="width:500px;" :class="scroll<=difference?'toright':''" ref="rightdiv">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit blanditiis animi esse culpa illo dolore repellendus repudiandae ipsum? Exercitationem deserunt aliquid dignissimos cumque officia qui iusto iure molestiae voluptatem.

      </div>
      <div style="position:fixed;bottom:200px;right:0;">
        返回顶部
      </div>
      
    </div>
    <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam id beatae error in, itaque soluta commodi vero qui, ab perspiciatis, numquam adipisci doloribus consectetur iure officia ad neque veniam velit.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam id beatae error in, itaque soluta commodi vero qui, ab perspiciatis, numquam adipisci doloribus consectetur iure officia ad neque veniam velit.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam id beatae error in, itaque soluta commodi vero qui, ab perspiciatis, numquam adipisci doloribus consectetur iure officia ad neque veniam velit.
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      scroll:"",
      active:false,
      difference:"",
      toph:""
    }
  },
  methods:{
    //滚动事件的方法
    scrollchange(){
      //将距离顶部的滚动距离赋值给data里的scroll
      this.scroll=document.body.scrollTop||document.documentElement.scrollTop
      
      console.log(this.scroll)
      console.log(this.scroll<this.difference)
      console.log(this.difference)
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scrollchange)
    let lh=this.$refs.leftdiv.offsetHeight   //获得refs为leftdiv的元素的高度
    let rh=this.$refs.rightdiv.offsetHeight  //获得refs为rightdiv的元素的高度
    let toph=this.$refs.top.offsetHeight     //获得refs为top的元素的高度
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
    let difference=rh+toph-h    //获得高度差
    this.difference=difference  //将高度差赋值给different
    this.toph=toph              //将top的元素的高度赋值为toph
    
    console.log(lh,rh,h,difference)

    console.log(this.scroll<difference)
    
  }
  
}
</script>
<style scoped>
.container{
  display:flex;
  
}
  .container:after{
    content:"";
    display: block;
    clear:both;
  }
  
  .fix{
    position:fixed;
    margin-right:500px;
    top:0;
   
  }
  .down{
     position:absolute;
     bottom:90%;
  }
  .toright{
    margin-left:500px;
  }

</style>