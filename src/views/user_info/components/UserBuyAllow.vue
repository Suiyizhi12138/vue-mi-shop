<template>
  <div class="user-orderlist-page">
    <!-- 用户购买资格页 -->
    <div class="order-list-box">
      <div class="order-head">
        <h1>购买资格</h1>
      </div>
      <div class="order-nav clearfix">
        <div class="nav-left">
          <ul class="nav-list">
            <li class="nav-item nav-first"><a href="javascript:" class="active">未使用</a></li>
            
            <li class="nav-item nav-last"><a href="javascript:">已使用/过期</a></li>
          </ul>
        </div>
        
      </div>
      <hr class="clear-line">
      <div class="order-content">
        <div class="order-box clearfix">
          <div class="order-list" v-if="orderAmount>0"></div>
          <div class="order-none" v-else>
            <h2  class="order-none-text">您没有可以显示的购买资格</h2>
          </div>
        </div>
      </div>
      <hr class="clear-line">
      <div class="allow-tips clearfix">
        <div class="tips-box">
          <h2 class="tips-title">什么是购买资格？</h2>
          <p>购买资格是优先购买新品的特权。</p>
          <p>拥有新品的购买资格可以无需预约或抢购，直接下单购买。</p>
          <p>每个购买资格只可使用一次，商品加入购物车后购买资格即刻失效，请勿将其从购物车中删除。</p>
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
    hr.clear-line{
        border-bottom:1px solid #bbb;
        border-top: 0;
      
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
    .allow-tips{
      margin: 20px 0;
      .tips-box{
        h2{
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }
        p{
          font-size: 14px;
          padding: 6px 0;
          color: #757575;
        }
      }
    }
  }
</style>