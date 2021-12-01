<template>
  <div class="register-form">
    <form>
      <input autofocus type="text" name="account" v-model="userName" placeholder="输入昵称"  class="text" id="user-account">
    <p class="alert-message">{{nameAlertMsg}}</p>
    <input autofocus type="text" name="account" v-model="userAccount" placeholder="输入邮箱"  class="text" id="user-account">
    <p class="alert-message">{{accountAlertMsg}}</p>
    <input type="password" name="password" id="password" v-model="userPassword" placeholder="输入密码"  class="text" >
    <p class="alert-message">{{passwordAlertMsg}}</p>
    <input type="password" name="repassword" id="re-password" v-model="cPassword" placeholder="再次输入密码" class="text">
    <p class="alert-message">{{cPasswordMsg}}</p>
   <input type="button" value="注册" class="input-btn" @click="handleRegister">
    </form>
    
  </div>
</template>

<script>
import axios from 'axios'
import FetchAPI from '@/api/fetchApi';
import Config from '@/config/env.js'
export default {
  data(){
    return {
      userName:'',
      nameAlertMsg: '',
      userAccount: '',
      userPassword: '',
      cPassword: '',
      accountAlertMsg:'',
      passwordAlertMsg: '',
      cPasswordMsg: ''

    }
  },
  methods: {
    handleRegister(){
      let checkMail = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let checkPassword = /^(\w){6,20}$/;
      //前端验证
      if(this.userName == ""){
        this.nameAlertMsg = '请输入昵称';
      }else if (this.userAccount == "") {
        this.accountAlertMsg = "请输入邮箱";
        return;
      } else if (!checkMail.test(this.userAccount)) {
        this.accountAlertMsg = "邮箱格式不正确";
        return;
      } else if (this.userPassword == "") {
        this.passwordAlertMsg = "请输入密码";
        return;
      } else if (!checkPassword.test(this.userPassword)) {
        this.passwordAlertMsg = "密码只能由6-20个字母、数字、下划线组成";
        return;
      } else if(this.userPassword!==this.cPassword){
        this.cPasswordMsg = '前后输入密码不一致';
      } else if(this.cPassword==""){
        this.cPasswordMsg = "请再次输入密码";
      }else if(!checkPassword.test(this.cPassword)){
        this.cPasswordMsg = "密码只能由6-20个字母、数字、下划线组成";
      }
      else {
        let data = {
          name: this.userName,
          email: this.userAccount,
          password: this.userPassword,
          c_password: this.cPassword
        };

        FetchAPI.register(data)
        .then((res)=>{
          localStorage.removeItem('_user_token');
          localStorage.setItem('_user_token',res.data.access_token);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
          window.location.href = (Config.DOMAIN);
        })
        .catch((e)=>{
          console.log(e);
        })
        
      }
    }
  }

}
</script>

<style lang="scss">
  .register-form{
    position: absolute;
    width: 360px;
    height: 280px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); 
   input{
     width: 100%;
     height: 40px;
     line-height: 40px;
     font-size: 16px;
     box-sizing: border-box;
     margin-top: 20px;
     border: none;
     border-radius: 5px;
      &:focus{
      outline: none;
      
     }
   }
   input.text{
     text-align: left;
     padding-left: 20px;
     background-color: rgb(252,242,242);
    
   }
    .input-btn{
      cursor: pointer;
      color: #fff;
      background-color: #f06c11;
      &:hover{
        background-color: #f04645;
      }
        
    }
   .alert-message{
     color: #f04645;
     font-size: 12px;
   }

    
  }
</style>