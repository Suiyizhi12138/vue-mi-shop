<template>
  <div class="user-orderlist-page">
    <div class="order-list-box">
      <div class="order-head">
        <h1>
          <router-link to="/user/:id/expresssolute/requestform">领取进度报销</router-link>|
          <router-link to="/user/:id/expresssolute/requestquery">报销进度查询</router-link>
        </h1>
      </div>

      <div class="order-content clearfix">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderAmount: 0
    };
  }
};
</script>

<style lang="scss">
a.active {
  color: #ff6700;
}
.order-list-box {
  padding: 36px 48px;
  .order-head {
    h1 {
      font-size: 30px;;
      color: #757575;
      font-weight: normal;
      a{
        font-size: 30px;
        line-height: 68px;
        font-weight: normal;
        color: #bbb;
        
      }
      .router-link-active{
        color: #757575;
      }

     
    }
  }

  
}
</style>