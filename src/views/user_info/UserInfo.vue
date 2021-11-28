<template>
  <div class="user-page">
    <!-- 用户个人中心 -->
    <common-header></common-header>
    <common-nav></common-nav>
    <div class="page-container clearfix">
      <div class="page-content">
        <h4 class="user-bread">
          <router-link to="/">首页</router-link>/个人中心
        </h4>
        <div class="user-nav clearfix">
          <ul class="menu-list">
            <h2 class="menu-title">订单中心</h2>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/orderlist'">我的订单</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/comment'">评价晒单</router-link>
            </li>
            <li class="menu-item">
              <a href="javascript:">话费充值订单</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">以旧换新订单</a>
            </li>
          </ul>
          <ul class="menu-list">
            <h2 class="menu-title">个人中心</h2>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/protal'">我的个人中心</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/msg'">消息通知</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/buyallow'">购买资格</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/cashaccount'">现金账户</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/presentcard'">小米礼品卡</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/cashcoupon'">现金券</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/like'">喜欢的商品</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/coupon'">优惠券</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/address'">收货地址</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/redpackets'">红包</router-link>
            </li>
          </ul>
          <ul class="menu-list">
            <h2 class="menu-title">售后服务</h2>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/servicerecord'">服务记录</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/servicerequest'">申请服务</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/'+userInfo.id+'/expresssolute'">领取快递报销</router-link>
            </li>
          </ul>
          <ul class="menu-list">
            <h2 class="menu-title">账户管理</h2>
            <li class="menu-item">
              <router-link :to="'/user/user_account/'+userInfo.id+'/personalinfo'">个人信息</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="'/user/user_account/'+userInfo.id+'/safeandlogin'">修改密码</router-link>
            </li>
          </ul>
        </div>
        <div class="user-content clearfix">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <common-fix-nav></common-fix-nav>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/common/CommonHeader";
import CommonNav from "@/components/common/common_nav/CommonNav";
import CommonFooter from "@/components/common/CommonFooter";
import CommonFixNav from "@/components/common/CommonFixNav";
export default {
  components: {
    CommonHeader,
    CommonNav,
    CommonFooter,
    CommonFixNav
  },
  computed: {
    userInfo(){
      return this.$store.getters.userInfo;
    }
  }
};
</script>

<style lang="scss">
.user-page {
  .page-container {
    width: 100%;
    height: auto;
    background-color: #f5f5f5;
    min-width: 1226px;
    .page-content {
      width: 1226px;
      margin: 0 auto;

      h4.user-bread {
        font-size: 12px;
        font-weight: 400;
        height: 40px;
        line-height: 40px;
        text-align: left;
        a {
          font-size: 12px;
          font-weight: 400;
        }
      }
      .user-nav {
        width: 234px;
        height: 950px;
        float: left;
        box-sizing: border-box;
        padding: 36px 0px;
        background-color: #fff;

        .menu-list {
          margin: 0 48px 12px;
          .menu-title {
            width: 138px;
            height: 52px;
            line-height: 52px;
            font-size: 16px;
            font-weight: 400;
            color: #333;
          }
          .menu-item {
            padding: 6px 0;
            a {
              color: #757575;
              &:hover {
                color: #333;
              }
            }
            .router-link-active {
              color: #ff6700;
            }
          }
        }
      }
      .user-content {
        width: 978px;
        background-color: #fff;
        float: left;
        margin-left: 14px;
      }
    }
  }
}
</style>