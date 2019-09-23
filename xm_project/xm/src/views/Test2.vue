<template>
  <div>
    <ul class="nav" @click="change">
      <li><a href="javascript:;">a
        <img src="" alt="">
        </a></li>
      <li><a href="javascript:;">b<img src="" alt=""></a></li>
      <li><a href="javascript:;">c<img src="" alt=""></a></li>
      <li><a href="javascript:;">d<img src="" alt=""></a></li>
      <li><a href="javascript:;">e<img src="" alt=""></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  methods:{
    change(e){
      var a1=document.querySelectorAll(".nav img")
      for(var item of a1){
        item.src=""
        
        }
        if(e.target.nodeName=="A"){
          e.target.parentNode.style="position:relative"
          e.target.children[0].src="img/sj.png"
          //console.log(e.target.children[0])
      }
    }
  }
}
</script>
<style scoped>
  .nav{
    display:flex;
    
  }
  .nav li{
    width:40px;
    height:40px;
    background:yellow;
  }
  .nav li img{
    position:absolute;
    top:17px;
    left:0px;
  }
  
</style>
