<template>

  <div>
    <button @click="getcode" :disabled="time!=0?true:false">{{code}}</button>
    <template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
  </div>
</template>
<script>
export default {
  data(){
    return {
      code:"获取验证码",
      time:""
    }
  },
  methods:{
    getcode(){
      this.time=5
      this.code=`${this.time}s后获取验证码`
      var gettime=setInterval(()=>{
        this.time--;
        this.code=`${this.time}s后获取验证码`
        if(this.time==0){
        clearInterval(gettime)
        this.code=`获取验证码`
      }
      },1000)
      
    }
  }
}
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
  .el-carousel__arrow {
    top:20%;
  }

</style>
