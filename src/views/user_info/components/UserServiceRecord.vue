<template>
  <div class="user-orderlist-page">
    <div class="order-list-box">
      <div class="order-head">
        <h1>我的服务单</h1>
      </div>
      
      
      <div class="order-content">
        <div class="order-box clearfix">
          <div class="order-list" v-if="orderAmount>0"></div>
          <div class="order-none" v-else>
            <h2  class="order-none-text">当前没有服务单</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      orderAmount: 0,
    }
  }
}
</script>

<style lang="scss">
  a.active{
    color: #ff6700;
  }
  .order-list-box{
    padding: 36px 48px;
    .order-head{
      h1{
        font-size: 30px;
        line-height: 68px;
        font-weight: 400;
        color: #757575;
        span{
          font-size: 12px;
          margin-left: 10px;
        }
        a{
          font-size: 12px;
          color: #ff6700;
          
        }
      }
    }
    
    .order-content{
      .order-box{
        margin: 40px auto;
        .order-none{
          line-height: 60px;
          text-align: center;
            .order-none-text{
              font-size: 18px;
              color: #bbb;
              font-weight: 400;
            }
        }
      }
    }
  }
</style>