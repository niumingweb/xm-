<template>
  <div>
    <div class="wrapper">
      <div class="reg_container">
        <div class="reg_logo">
          <img src="img/header/index_logo.png"/>
        </div>
        <div class="reg_title">
          <h4>登录小米账号</h4>
        </div>
        <div class="reg_box">
          <div class="user_info">
            <div class="user_pic">
              <img src="img/user_reg/head.png" alt="">  
            </div>
            <p class="uname" v-text="uid"></p>
            <p class="uphone" v-text="phone"></p>
          </div>  
          <div>
            <p class="reged">此号码已经注册小米帐号，请输入密码登录</p>
            <div class="input_pwd">
              <input v-model="upwd" type="password">  
            </div>
          </div>
          <span>{{upwd_msg}}</span>
          <div class="reg_btnbox">
            <a class="reg_btn" href="javascript:;" @click="reg2_log">登录</a>
            <a class="forgot" href="javascript:;">忘记密码</a>
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
  
  data(){
    return {
      phone:"",
      uid:"",
      upwd:"",
      upwd_msg:""
    }
  },
  methods:{
    reg2_log(){
      var phone=this.phone
      var upwd=this.upwd
      if(upwd==""){
        this.upwd_msg="请输入密码"
        return
      }
      var url="/users/reg2_log";
      var data={phone,upwd};
      this.axios.get(url,{params:data}).then(res=>{
        console.log(res.data)
        if(res.data==0){
          alert("密码错误")
        }else{
          this.$messagebox("提示", "登录成功").then(res => {
            this.$router.push({ path: "/index" });
          });
        }
      })
    }
  },
  created(){
    this.phone=this.$route.params.phone
    this.uid=this.$route.params.uid
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
/* 用户信息 */
.user_info{
    width:332px;
    margin: 0 auto;
    text-align: center;
    font-size:14px;
}
.reged{
  font-size:14px;
  color:#333; 
  margin:10px 0; 
}
/* 输入框 */
.input_pwd{
  width:332px;
  height:40px;
  border:1px solid #e8e8e8;
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
  margin-top: 30px;
  text-align: center;
  line-height: 42px;
  background: #ff6700;
  color: #fff;
  font-size: 14px;
}
.forgot{
  display: inline-block;
  width: 330px;
  height: 42px;
  margin-top: 10px;
  text-align: center;
  line-height: 42px;
  background:#fff;
  color: #333;
  font-size: 14px;
  border:1px solid #ddd;   
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