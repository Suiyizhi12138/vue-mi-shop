<template>
  <div class="userinfo-page">
    <div class="info-header">
      <div class="header-container">
        <div class="header-left">
          <router-link to="/">
          <img src="@/assets/images/logo-mi2.png" class="info-logo" alt="fail" />
          </router-link>
          <h1 class="info-title">小米账号</h1>
        </div>
        <div class="header-right">
          <ul class="right-list clearfix">
            <li class="list-item">
              <a href="javascript:">用户协议</a>
            </li>
            <li class="list-item">
              <a href="javascript:">隐私政策</a>
            </li>
            <li class="list-item">
              <a href="javascript:">帮助中心</a>
            </li>
            <li class="list-item">|</li>
            <li class="list-item item-lang">
              <a href="javaScript:">
                中文（简体）
                <i class="iconfont iconarrowdown"></i>
              </a>
              <transition name="slide-down">
                <ul class="lang-list">
                  <li class="lang-item">中文（繁体）</li>
                  <li class="lang-item">English</li>
                </ul>
              </transition>
            </li>
            <li class="list-item list-last">
              <a href="javascript:" @click="userLogout()">退出</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-content clearfix">
      <div class="info-container clearfix">
        <div class="info-left clearfix">
          <div class="nav-head">
            <img :src="personalInfo.avatar" alt="this is a avatar">
            <h2 class="user-nickname">{{personalInfo.nick_name?personalInfo.nick_name:"请设置用户昵称"}}</h2>
            <h2 class="user-phone">{{userInfo.phone?'+86 '+userInfo.phone:''}}</h2>
          </div>
          <div class="nav-content">
            <ul class="nav-list">
              <router-link :to="'/user/user_account/'+userInfo.id+'/safeandlogin'" class="list-item">登录与安全</router-link>
              <router-link :to="'/user/user_account/'+userInfo.id+'/personalinfo'" class="list-item">个人信息</router-link>
              <router-link :to="'/user/user_account/'+userInfo.id+'/securecenter'" class="list-item">隐私中心</router-link>
              <router-link to="/verify_phone" class="list-item">绑定授权</router-link>
              <a href="javascript:"  class="list-item" @click="confirmSkip">帮助中心</a>
            </ul>
          </div>
        </div>
        <div class="info-right">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FetchAPI from '@/api/fetchApi';
export default {
  computed:{
    userInfo(){
      return this.$store.getters.userInfo;
    },
    personalInfo(){
      return this.$store.getters.personalInfo;
    }
  },
  data(){
    return {
      
    }
  },
  methods: {
    confirmSkip(){
      if(window.confirm('即将跳转到小米网站，你确定吗？')){
        window.location.href = "https://account.xiaomi.com/helpcenter";
      }
    },
    userLogout(){
      FetchAPI.logout()
      .then((res)=>{
        if(res.status==200){
          localStorage.removeItem('_user_token');
          this.$router.push({name:"user_login",params: {action:"login"}});
        }
      })
      .catch((e)=>{
        console.log(e);
      })
    }
  },
  mounted(){
    
  }




};
</script>

<style lang="scss">
.userinfo-page {
  .info-header {
    width: 100%;
    height: 80px;
    background-color: #fcfcfc;
    box-sizing: border-box;
    padding: 20px 20px;
    .header-left {
      height: 40px;
      line-height: 40px;
      text-align: center;
      float: left;
      .info-logo {
        width: 40px;
        height: 40px;
        float: left;
      }
      .info-title {
        float: left;
        font-size: 26px;
        color: #333;
        margin-left: 14px;
      }
    }
    .header-right {
      float: right;
      .right-list {
        .list-item {
          height: 40px;
          line-height: 40px;
          float: left;
          color: #838383;
          margin-left: 10px;
          margin-right: 10px;
          a {
            color: #838383;
            font-size: 14px;
            font-weight: 400;
            &:hover {
              color: #ff6700;
            }
          }
          i.iconarrowdown {
            font-size: 12px;
          }
        }
        .list-last {
          a {
            color: #ff6700;
          }
        }
        .item-lang {
          
          transition: height .5s ease;
          height: 40px;
          overflow: hidden;
          &:hover {
            height: 140px;
          }
          .lang-list{
            .lang-item{
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .info-content{
    width: 100%;
    background-color: #fcfcfc;
    .info-container{
      max-width: 1440px;
      margin: 20px auto;
      box-sizing: border-box;
      padding: 0 40px;
      background-color: #fcfcfc;
      .info-left{
        width: 260px;
        position: absolute;
        .nav-head{
          width: 260px;
          height: 245px;
          padding: 40px 20px;
          box-sizing: border-box;
          
          background: url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/background.75b99c80.png");
          background-size: cover;
          img{
            margin: 0 auto;
            width: 80px;
            height: 80px;
            display: block;
            border-radius: 50%;
          }
          h2{
            width: 210px;
            height: 40px;
            color: #333;
            font-size: 19px;
            margin: 0 auto;
            line-height: 40px;
            text-align: center;

            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          h2.user-nickname{
            margin: 5px auto 0px;
          }
          
        }
        .nav-content{
          width: 260px;
          .nav-list{
            margin-top: 20px;
            background-color: #fff;
            a.list-item{
              display: block;
              width: 100%;
              height: 60px;
              line-height: 60px;
              box-sizing: border-box;
              padding-left: 70px;
              font-size: 17px;
              font-weight: 500;
              color: #333;
              
            
            }
            .router-link-active{
              background-color: #fff3e6;
              border-left: 5px solid #ff6700;
            }
          }
        }
      }
      .info-right{
        margin-left: 280px;
      }
    }
  }
  
}
</style>