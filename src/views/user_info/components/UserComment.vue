<template>
  <div class="user-orderlist-page">
    <!-- 用户评价页 -->
    <div class="order-list-box">
      <div class="order-head">
        <h1>订单评价</h1>
      </div>
      
      <div class="order-content">
        <div class="order-box clearfix">
          <div class="order-list" v-if="orderAmount>0"></div>
          <div class="order-none" v-else>
            <h2  class="order-none-text">暂无数据</h2>
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
      orderAmount: 0
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
    .order-nav{
      height: 56px;
      .nav-left{
        float: left;
        .nav-list{
          height: 56px;
          padding: 18px 0;
          box-sizing: border-box;
          li.nav-first{
            padding-left: 0;
            
          }
          li.nav-last{
            border-right: 0;
          }
          .nav-item{
            float: left;
            height: 20px;
            line-height: 20px;
            text-align: center;
            padding:0 20px;
            border-right: 1px solid #757575;
            a{
              font-size: 16px;
            }
          }
        }
      }
      .nav-right{
        float: right;
        line-height: 42px;
        height: 42px;
        width: 262px;
        text-align: center;
        border: 1px solid #b5b5b5;
        input{
          border: none;
          outline: none;
          width: 220px;
          float: left;
          height: 42px;
          box-sizing: border-box;
          padding-left: 10px;
          border-right: 1px solid #757575;
        }
        i{
          width: 40px;
          height: 40px;
          font-size: 20px;;
          cursor: pointer;
          font-weight: 400;
          color: #757575;
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