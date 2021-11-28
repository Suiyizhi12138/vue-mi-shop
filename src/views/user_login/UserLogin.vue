<template>
  <div class="user-login">
    <div class="fix-img">
      </div>
    <div class="login-container">
      <div class="login-header">
        <div class="login-header-left">
          <i class="iconfont iconxiaomi"></i>
          <span>小米账号</span>
        </div>
        <div class="login-header-right">
          <span >用户协议</span>
          <span>隐私政策</span>
          <span>帮助中心</span>
        </div>
      </div>
      <div class="login-content">
        <a href="javascript:" :class="{'link-active':isLogin}" @click="chooseRoute('login')">登录</a>
        <a href="javascript:" :class="{'link-active':isRegister}" @click="chooseRoute('register')">注册</a>
        <transition name="slide-fade">
          <login-form v-if="isLogin"></login-form>
          <register-form v-if="isRegister"></register-form>
        </transition>
      </div>
    </div>
    
  </div>
</template>

<script>
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
export default {
  data(){
    return {
      isLogin: true,//是否登录页
      isRegister: false,//是否注册页
    }
  },
  components:{
    LoginForm,
    RegisterForm
  },
  mounted(){
    this.initRoute();
  },
  methods:{
    initRoute(){
      this.chooseRoute(this.$route.params.action);
    },
    chooseRoute(action){
       if(action=="login"){
        this.isLogin = true;
        this.isRegister = false;
      }else if(action=="register"){
        this.isLogin = false;
        this.isRegister = true;
      }else{
        window.alert('请勿随意修改路由参数');
      }
    }
  }
};
</script>

<style lang="scss">
.user-login {
  height: auto;
  width: 100%;
  display: flex;
  .login-container {
    
    
    width: 66.7%;
    height: 600px;
  
    background-color: #f5f5f5;
    .login-header{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .login-header-left{
        .iconxiaomi{
          display: inline-block;
          color: #fff;
          background-color: #ff6700;
          width: 40px;
          height: 40px;
          font-size: 26px;
          line-height: 40px;
          text-align: center;
          border-radius: 10px;
          margin-left: 20px;
        }
        span{
          font-weight: 500;
          font-size: 26px;
          line-height: 40px;
          margin-left: 10px;
        }
      }
      .login-header-right{
        span{
          color: #666;
          margin-left: 10px;
        }
      }
    }
    .login-content {
      position: relative;
      border: 1px solid #fff;
      border-radius: 5px;
      width: 50%;
      height: 70%;
      margin: 10px auto 0;
      background-color: #fff;
      .link-active {
        font-weight: 500;
        border-bottom: 4px solid #ff6700;
        color: #333;
      }
      box-sizing: border-box;
      padding: 5%;
      a{
        font-size: 22px;
        font-weight: 400;
        color: #666;
        transition: all .5s;
        -webkit-transition: all .5s;
        margin-left: 16px;
      }


     
     
    }
  }
  .fix-img {
    width: 33.3%;
    height: 600px;
    top: 0px;
    background: url('https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.4994397e.jpg') no-repeat;
    background-size: cover;
    background-position: 25%; 
  }
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.slide-fade-enter-to {
  opacity: 1;
}
.slide-fade-leave {
  opacity: 1;
}
</style>