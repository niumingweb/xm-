<template>
 <div>
  <div id="logo">
       <a href="javascript:;"><img src="img/user_log/mistore_logo.png" alt=""></a>
  </div>
     <!-- 背景 -->
     <div id="bg">
       <!-- 登录窗口 -->
       <div id="log_window">
         <div>
           <p class="login_p">
             <a href="javascript:;" :style="a3==true?'color:#ff6700':''" @click="change(1,$event)">账号登录</a>
             <span>|</span>
             <a href="javascript:;" :style="a4==false?'color:#ff6700':''" @click="change(2,$event)">扫码登录</a>
           </p>
         </div>
            <!-- 账号登录div -->
            <div class="tab" v-show="a1==true">
              <div class="reg_log" v-if="unameLogin==false">
                <div>
                  <input type="text" id="uname" placeholder="邮箱/手机号码/小米ID" v-model="uname" @focus="getf"> 
                  <input type="password" id="upwd" placeholder="密码" v-model="upwd" @focus="getf"><br>
                  <span>{{msg}}</span>
                  <button @click="Log" class="log_btn">登录</button>
                </div>
                <div id="log_type_link">
                  <a href="javascript:;" @click="phone_login">手机短信登录/注册</a>
                  <span>
                    <a href="javascript:;">立即注册</a>
                    <span>|</span>
                    <a href="javascript:;">忘记密码?</a> 
                  </span>
                </div> 
              </div>
              <div class="reg_log" v-else>
                <div class="phone_contain">
                  
                    <button class="county_number">86</button>
                    <input v-model="phone" class="phone_number" type="text" placeholder="手机号码">
                  
                </div>
                <div class="get_msg"> 
                  <label for="">
                    <input v-model="phonecode" class="msg_number" type="text" placeholder="短信验证码">
                    <button class="get_number" @click="getcode" :disabled="time!=0?true:false">{{code}}</button>
                  </label>
                </div>
                <span>{{anothermsg}}</span>
                <button class="phone_btn" @click="anotherLog">立即登录注册</button>
                <div class="back">
                  <a href="javascript:;" @click="uname_login">用户名密码登录</a>
                </div>
              </div>
              <div class="other">————————其他方式登陆————————</div>
              <div id="log_link">
                <div id="tu1"></div>
                <div id="tu2"></div>
                <div id="tu3"></div>
                <div id="tu4"></div>
              </div>
            </div>
            <!-- 扫码登录div -->
            <div class="tab" style="font-size:14px;color:#757575;" v-show="a2==true">
              <img src="img/user_log/erweima.png" alt="">
              <p>使用 <span style="color:#ff6700;">小米商城APP</span> 扫一扫</p>
              <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
            </div>
         </div>
        </div>
      <div class="footer">
        <ul>
          <li>
            <a href="">简体</a>|
          </li>
          <li>
            <a href="">繁体</a>|
          </li>
          <li>
            <a href="">English</a>|
          </li>
          <li>
            <a href="">常见问题</a>|
          </li>
          <li>
            <a href="">隐私设置</a>
          </li>
        </ul>
       
        <p>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
      </div>
      
</div>
</template>
<script>
export default {
  
  /*登录功能*/
  data() {
    return {
      uname: "",
      upwd: "",
      phone:"",
      phonecode:"",
      a1:true,
      a2:false,
      a3:true,
      a4:true,
      unameLogin:false,
      time:"",
      code:"获取验证码",
      msg:"",
      anothermsg:""
    }
  },
  methods: {
    /*验证码功能*/
    getcode(){
      this.time=5
      this.code=`5s后再次点击`
      var gettime=setInterval(() => {
        this.time--;
        this.code=`${this.time}s后再次点击`
        if(this.time==0){
          clearInterval(gettime)
          this.code="获取验证码"
        }
      },1000);
    },
    /*账号登陆 手机注册登陆切换*/
    phone_login(){
      this.unameLogin=true;
    },
    uname_login(){
      this.unameLogin=false;
    },
    /*账号登陆|二维码登陆切换*/
    change(n,e){
      e.target.style="color:#ff6700"
      if(n==1){
        this.a1=true;
        this.a2=false;
        this.a3=true;
        this.a4=true
      }else{
        this.a1=false;
        this.a2=true;
        this.a3=false;
        this.a4=false
      }
    },
    getf(){
      this.msg=""
    },
    //账号登陆功能
    Log() {
      var uname = this.uname;
      var upwd = this.upwd;
      if(uname==""){
        this.msg="用户名不能为空"
        return
      }
      if(upwd==""){
        this.msg="密码不能为空"
        return
      }
      var url = "/users/login";
      var data = { uname, upwd };
      this.axios.get(url, { params: data }).then(res => {
        //console.log(res.data.uid);
        if (res.data == 0) {
          alert("用户名或密码错误");
        } else {
            //console.log(res.data[0].uid);
            var uname1=res.data[0].uname
            var phone1=res.data[0].phone
            
            this.$store.commit("updateuname",uname1)
            this.$store.commit("updatephone",phone1)
            console.log(sessionStorage.uname)
            this.$messagebox("提示", "登录成功").then(res => {
            this.$router.replace("/index");
          });
           
        }
      });
    },
    //手机登陆功能
    anotherLog(){
      var phone=this.phone
      var phonecode=this.phonecode
      var reg=/^1[3-9]\d{9}$/
      if(phone==""){
        this.anothermsg="请输入手机号"
        return
      }
      if(phonecode==""){
        this.anothermsg="请输入验证码"
        return
      }
      if(!reg.test(phone)){
        this.anothermsg="手机号格式不正确"
        return
      }
      var url="/users/phonelogin"
      var data={phone}
      this.axios.get(url,{ params: data }).then(res=>{
        console.log(res.data)
        if(res.data==0){
          //留着用手机号直接注册并登陆
          alert("手机号不正确")
        }else{
          console.log(res.data)
          var uname1=res.data[0].uname
          var phone1=res.data[0].phone
          this.$store.commit("updateuname",uname1)
          this.$store.commit("updatephone",phone1)
          this.$messagebox("消息","登陆成功").then(res=>{
            // this.$router.replace({path:'/index'})
            this.$router.go(-1)
          })
        }
      })
    }
  },
  
};
</script>
<style scoped>
/* logo设置 --另做响应式*/
#logo {
  width: 200px;
  height: 98px;
  margin-left: 8%;
}
/* 背景设置 --另做响应式*/
#bg {
  width: 100%;
  height: 588px;
  background-image: url(../assets/img/login_background.jpg);
  /* background-size:100%; */
  background-repeat: no-repeat;
  background-position: 51% 0;
}
/* 登录窗口框整体 --另做大中屏响应式,小屏不做*/
#log_window {
  background: #fff;
  margin-top: 31px;
  margin-left: 62%;
  width: 410px;
  height: 524px;
  text-align: center;
  padding-bottom: 34px;
}
/* 解决溢出 */
#bg::before {
  content: "";
  display: table;
}
/* 主要登录方式 */
.login_p {
  padding: 27px 0 24px;
  font-size: 24px;
}
.login_p a {
  color: #666;

  padding: 0 24px;
}
.login_p span {
  color: #ddd;
  font-weight: lighter;
}


/*用户名登录方式 用户名框 密码框 */
#log_window #uname,#log_window #upwd {
  width: 306px;
  padding: 13px 16px 13px 14px;
  margin-bottom: 14px;
  outline-style: none;
  color: #4a4a4a;
  border: 1px solid #ddd;
}
/* 提示框下提示 */
#msg {
  display: block;
  width: 338px;
  margin: 0 auto;
  text-align: left;
  color: #f56600;
  font-size: 14px;
}
/* 登录按键 */
.reg_log .log_btn {
  width: 348px;
  height: 50px;
  background-color: #ff6700;
  display: block;
  margin: 14px auto 14px;
  color: #fff;
  font-size: 14px;
  border: 0 none;
}
/* 注册登录方式 */
#log_type_link {
  width: 348px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
#log_type_link > a {
  display: block;
  color: #ff6700;
}
#log_type_link > span,
#log_type_link > span a {
  color: #999;
}
/* 底部其他登录方式 */

.other {
  margin-top: 137px;

  height: 19px;
  color: #bbb;
  font-size: 14px;
  margin-bottom: 14px;
}
#log_link div {
  width: 30px;
  height: 30px;
  background-image: url(../assets/img/HHLPHM7T1.png);
  background-repeat: no-repeat;
}
#log_link {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#log_link div {
  margin: 0 17px;
}
#log_link #tu1 {
  background-position: -56px -19px;
}
#log_link #tu2 {
  background-position: -120px -19px;
}
#log_link #tu3 {
  background-position: -184px -19px;
}
#log_link #tu4 {
  background-position: -248px -19px;
}
/* 最底部 */
.footer {
  width: 100%;
  height: 73px;
  text-align: center;
  padding-top: 80px;
}
.footer > ul {
  display: flex;
  list-style: none;
  margin-left: 35%;
}
.footer > ul a {
  padding: 0 10px;
  color: #757575;
  font-size: 14px;
}
.footer li {
  font-size: 14px;
  color: #757575;
}
.footer p {
  padding: 10px;
  margin: 0;
  font-size: 14px;
  color: #757575;
}
/*登录方式下几个共同div设置*/
#log_window .tab{
  width:410px;
  height:411px;
}
/*手机短信验证登录*/
#log_window .reg_log{
  width:410px;
  height:211px;
}
#log_window .phone_contain{
  width:348px;
  height:48px;
  display:flex;
  align-items: center;
  margin:0 auto;
  border:1px solid #e0e0e0;
}

.reg_log .county_number{
  width:54px;
  height:48px;
  background-color: rgb(255,255,255);
  display:inline-block;
  color: #333;
  font-size: 14px;
  border: 0 none;
}
#log_window .reg_log .phone_number{
  width:263px;
  height:22px;
  padding: 13px 16px 13px 14px;
  margin-bottom: 0px;
  outline-style: none;
  color: #4a4a4a;
  border: 1px solid #ddd;
}
.reg_log .msg_number{
  width:203px;
  height:22px;
  
  padding: 13px 16px 13px 14px;
  margin-bottom: 0px;
  outline-style: none;
  color: #4a4a4a;
  border: 1px solid #ddd;
}
.reg_log .get_number{
  width:111px;
  height: 48px;
  background-color: rgb(255,255,255);
  display: inline-block;
  color: #333;
  font-size: 14px;
  border: 0 none;
  
}
.reg_log .get_msg{
  width:348px;
  display:flex;
  align-items: center;
  border:0.5px solid #e0e0e0;
  margin:14px auto 0;
}
.reg_log .back{
  text-align:left;
  width:338px;
  margin:5px auto;
}
.reg_log .back a{
  font-size:14px;
  color:#ff6700;

}
.reg_log .phone_btn{
  width: 348px;
    height: 50px;
    background-color: #ff6700;
    display: block;
    margin: 14px auto 14px;
    color: #fff;
    font-size: 14px;
    border: 0 none;
}
</style>
