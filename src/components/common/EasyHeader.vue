<template>
  <div class="cart-header">
   <!-- 用户公用头  -->
    <div class="container clearbox">
      <div class="header-left">
        <router-link to="/">
          <img class="header-logo" src="../../assets/images/logo-mi2.png" alt="logo" />
        </router-link>
        <h2 class="header-title">{{headerTitle}}</h2>
        <!-- <span class="header-tips">温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</span> -->
      </div>
      <div class="header-right">
        <li class="user-info">
          <a href="javascript:">{{personalInfo.nick_name}}</a>
          <i class="iconfont iconarrowdown"></i>

          <ul class="user-hidden-list">
            <li class="user-hidden-item">
              <router-link :to="'/user/'+userInfo.id+'/protal'">个人中心</router-link>
            </li>
            <li class="user-hidden-item">
              <router-link :to="'/user/'+userInfo.id+'/comment'">评价晒单</router-link>
            </li>
            <li class="user-hidden-item">
              <router-link :to="'/user/'+userInfo.id+'/like'">我的喜欢</router-link>
            </li>
            <li class="user-hidden-item">
              <a href="/user/miaccount">小米账户</a>
            </li>
            <li class="user-hidden-item">
              <a href="javascript:" @click="userLogout">退出登录</a>
            </li>
          </ul>
        </li>
        <li class="user-orders">
          |
          <router-link :to="'/user/'+userInfo.id+'/orderlist'">我的订单</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import FetchAPI from '../../api/fetchApi';
export default {
  props:{
    'headerTitle':String,
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    },
    personalInfo() {
      return this.$store.getters.personalInfo;
    }
  },
  methods:{
    userLogout() {
      FetchAPI.logout()
        .then(res => {
          if (res.status == 200) {
            localStorage.removeItem("_user_token");
            this.$router.push({ name: "user_login" });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>

<style lang="scss">
.cart-header {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-bottom: 2px solid #ff6700;
  .container {
    width: 1226px;
    margin: 0 auto;
  }
  .header-left {
    float: left;
    height: 48px;
    margin-top: 26px;
    .header-logo {
      width: 48px;
      height: 48px;
      float: left;
      transition: all .2s linear;
      &:hover{
        transform: translateX(1px);
      }
    }
    .header-title {
      margin-bottom: 0px;
      font-size: 28px;
      font-weight: 400;
      color: #424242;
      float: left;
      text-align: center;
      margin-left: 40px;
    }
    .header-tips {
      font-size: 12px;
      float: left;
      margin-top: 20px;
      margin-left: 10px;
    }
  }
  .header-right {
    float: right;
    margin-top: 46px;
    .user-info {
      width: 110px;
      height: 40px;
      //display: inline-block;
      text-align: center;
      float: left;
      font-size: 12px;
      &:hover {
        background-color: #fff;
        color: #ff6700;
        .user-hidden-list {
          display: block;
        }
      }
      .iconarrowdown {
        vertical-align: middle;
        margin-left: 5px;
        font-size: 10px;
      }
      .user-hidden-list {
        display: none;
        position: absolute;
        z-index: 99;
        background-color: #fff;
        width: 110px;
        line-height: 30px;
        top: 70px;

        .user-hidden-item {
          font-size: 14px;
          width: 110px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          a {
            color: #666;
          }
          &:hover {
            background-color: #f5f5f5;
            a {
              color: #ff6700;
            }
          }
        }
      }
    }
    .user-orders {
      float: left;
      text-align: center;
      height: 40px;
      font-size: 12px;
      color: #bbb;
      a {
        font-size: 14px;
        &:hover {
          color: #ff6700;
        }
        margin-left: 14px;
      }
    }
  }
}
</style>