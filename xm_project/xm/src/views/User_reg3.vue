<template>
  <div>
    <div class="wrapper">
      <div class="reg_container">
        <div class="reg_logo">
          <img src="img/header/index_logo.png"/>
        </div>
        <div class="reg_title">
          <h4>注册小米账号</h4>
        </div>
        <div class="reg_box">
          <div class="reg_notice">
            <h4>您注册的手机号为<span>{{phone}}</span></h4>
            <p>请设置您的密码：</p>
          </div>  
          <div class="input_pwd">
            <input type="password" placeholder="请输入密码" v-model="upwd1" @focus="getf1">
          </div>
          <span v-text="upwd1_msg"></span>
          <div class="input_pwd">
            <input type="password" placeholder="请再次输入密码" v-model="upwd2" @focus="getf2">
          </div>
          <span v-text="upwd2_msg"></span>
          <div class="pwd_notice">
            <p>密码长度8~16位，数字、字母、字符至少包含两种</p>
          </div>
          <div class="reg_btnbox">
            <a class="reg_btn" href="javascript:;" @click="reg3">提交</a>
          </div>
        </div>
      </div>
      <div class="lang_select">
        <ul>
          <li class="active">简体</li>
          <li>繁体</li>
          <li>english</li>
          <li>常见问题</li>
        </ul>
      </div>
      <div class="foot_intro">
        <p>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'',
  data(){
    return {
      phone:"",
      upwd1:"",
      upwd2:"",
      upwd1_msg:"",
      upwd2_msg:""
    }
  },
  methods:{
    getf1(){
      this.upwd1_msg=""
    },
    getf2(){
      this.upwd2_msg=""
    },
    reg3(){
      var phone=this.phone
      var upwd=this.upwd1
      if(this.upwd1==""){
        this.upwd1_msg="请输入密码"
        return
      }
      if(this.upwd2==""){
        this.upwd2_msg="请再次输入密码"
        return
      }
      if(this.upwd1!=this.upwd2){
        this.upwd2_msg="请两侧输入的密码保持一致"
        return
      }
      var url="/users/reg3"
      var data={phone,upwd}
      this.axios.get(url,{params:data}).then(res=>{
        console.log(res.data)
        if(res.data==0){
          alert("注册失败")
        }else{
          this.$messagebox("消息","注册成功").then(res=>{
            this.$router.push({path:'/user_log'})
          })
        }
      })
    }
  },
  created(){
			this.phone=this.$route.params.phone
		}
};
</script>
<style scoped>
/* 背景颜色 */
.wrapper {
  background: #f9f9f9;
  height: 100%;
}
/* 注册container设置 */
.reg_container {
  width: 854px;
  height: 548px;
  margin: 0 auto;
  background: #fff;
}
/* logo */
.reg_logo {
  width: 49px;
  height: 48px;
  background: #f56600;
  margin: 0 auto 40px;
}
/* 注册标题 */
.reg_title h4 {
  text-align: center;
  font-size: 30px;
  color: #333;
  font-weight: normal;
  margin-bottom: 30px;
}
/* 注册内容设置 */
.reg_box {
  width: 332px;
  height: 306px;
  margin: 0 auto;
}
/* 输入的手机号提示 */
.reg_notice>h4>span{
    color:#ff6700;
}
/* 输入框设置 */
.input_pwd{
  width:330px;
  height:40px; 
  border:1px solid #e8e8e8;
  margin:10px 0;
}
.input_pwd input{
  width:300px;
  height:40px;
  border:0 none;
  outline:none;
  padding-left:10px;
}
/* 提交按钮设置 */
.reg_btn {
  display: inline-block;
  width: 330px;
  height: 42px;
  margin-top: 25px;
  text-align: center;
  line-height: 42px;
  background: #ff6700;
  color: #fff;
  font-size: 14px;
}
/* 语言选择 */
.lang_select {
  min-width: 1226px;
  margin-top: 10px;
}
.lang_select ul {
  width: 282px;
  margin: 0 auto;
  display: flex;
}
.lang_select ul li {
  padding: 0 10px;
  height: 19px;
  font-size: 14px;
  color: #757575;
  border-right: 1px solid #9d9d9d;
}
.lang_select ul li.active {
  color: #333 !important;
}
.lang_select ul li:nth-child(4) {
  border: none;
}
/* 版权 */
.foot_intro {
  text-align: center;
  color: #9d9d9d;
  font-size: 14px;
  margin-top: 20px;
}
</style>