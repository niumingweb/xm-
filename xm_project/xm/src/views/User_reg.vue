<template>
  <div>
    <div class="wrapper">
      <div class="reg_container">
        <div class="reg_logo">
          <img src="img/header/index_logo.png" alt />
        </div>
        <div class="reg_title">
          <h4>注册小米账号</h4>
        </div>
        <div>
          <div class="reg_box">
            <p>国家地区</p>
            <div class="selectbox">
              <p class="selected">中国</p>
              <div class="dropbtn">
                <img src="img/user_reg/downarrow.png" alt />
              </div>
              <ul class="dropdown"></ul>
            </div>
            <p class="notice">成功注册账号后，国家、地区将不能被修改</p>
            <p class="phone_notice">手机号码</p>
            <div class="phone_container">
              <div class="area_num">
                <p class="select_num">+86</p>

                <img src="img/user_reg/downarrow2.png" alt />
              </div>
              <label class="phone_input" for>
                <input @focus="getf" v-model="phone_number" type="text" placeholder="请输入手机号" />
              </label>
              
            </div>
            <div>
              <span v-text="phone_msg"></span>
            </div>
            <div class="reg_btnbox">
              <a class="reg_btn" href="javascript:;" @click="reg1">立即注册</a>
            </div>
          </div>
          <div class="reg_msg">
            <p>
              已阅读并同意：小米
              <a href="javascript:;">用户协议</a>和
              <a href="javascript:;">隐私政策</a>
            </p>
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
      phone_number:"",
      phone_msg:""
    }
  },
  methods:{
    getf(){
      this.phone_msg=""
    },
    reg1(){
      
      var phone=this.phone_number;
      
      var reg=/^1[3-9]\d{9}$/;
      if(phone==""){
        this.phone_msg="手机号不能为空"
        return
      }
      if(!reg.test(phone)){
        this.phone_msg="手机号格式不正确"
        return
      }
      var url="/users/reg1";
      var data={phone};
      this.axios.get(url,{params:data}).then(res=>{
        console.log(res.data);
        if(res.data==0){
          this.$router.push({path:'/user_reg3',name:'user_reg3',params:{phone}})
        }else{
          var uid=res.data.uid
          this.$router.push({path:`/user_reg2`,name:'user_reg2',params:{phone,uid}})
        }
      })
    }
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
/* 注册部分 */
/* 整体div设置 */
.reg_box {
  width: 332px;
  height: 306px;
  margin: 0 auto;
}
.reg_box p {
  font-size: 14px;
  margin-bottom: 5px;
}
/* 国家选择 */
.selectbox {
  width: 327px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #e8e8e8;
}
/* 选中的框 */
.selected {
  height: 40px;
  display: inline-block;
  width: 270px;
  margin-left: 10px;
  line-height: 40px;
  border-right: 1px solid #e8e8e8;
}
/* 下拉图标设置 */
.dropbtn {
  width: 40px;
}
.dropbtn img {
  width: 16px;
  margin: 11px 15px 0;
}
/* 提示 */
.notice {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}
/* 提示输入手机号 */
.phone_notice {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
/* 输入手机号整体div */
.phone_container {
  width: 328px;
  height: 40px;
  border: 1px solid #e8e8e8;
  display: flex;
}
/* 左侧区号div */
.area_num {
  display: flex;
  width: 70px;
  height: 42px;
  border-right: 1px solid #e8e8e8;
}
/* p设置 */
.select_num {
  width: 38px;
  height: 42px;
  line-height: 42px;
  padding-left: 5px;
  color: #555555;
}
/* 实心下箭头 */
.area_num img {
  width: 10px;
  height: 10px;
  margin-top: 15px;
}
/* 输入框设置 */
.phone_input input {
  width: 200px;
  height: 40px;
  border: 0 none;
  padding-left: 10px;
  outline: none;
}
/* 注册按钮设置 */
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
/* 注册协议 */
.reg_msg {
  text-align: center;
  color: #9d9d9d;
  font-size: 14px;
}
.reg_msg a {
  color: #333;
  font-weight: bold;
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