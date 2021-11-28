<template>
  <div class="user-cashlist-page">
    <!-- 用户评价页 -->
    <div class="cash-list-box">
      <div class="cash-head">
        <h1>我的现金账户</h1>
      </div>
      
      <div class="cash-content">
        <div class="cash-box clearfix">
          <div class="cash-open">
            <h2 class="open-title">您现在还没有开通小米现金账户</h2>
            <h4>使用现金账户会让您在小米网购物、支付更加便捷</h4>
            <div class="btn-open disabled">免费安全开通</div>
          </div>
          <div class="cash-introduction">
            <div class="introduction-item">
              <img src="https://s1.mi.com/zt/2013/my/cash-welcome-safe.png" alt="logo-fail">
              <p>采用顶级数据加密方案、保障现金账户、出入账记录的绝对安全，您可以放心使用</p>
            </div>
            <div class="introduction-item">
              <img src="https://s1.mi.com/zt/2013/my/cash-welcome-fast.png" alt="">
              <p>退款、快递补偿等服务可在通过审核后立即到账您的现金账户，免去等待。（目前仅支持快递补偿的入账服务）</p>
            </div>
            <div class="introduction-item">
              <img src="https://s1.mi.com/zt/2013/my/cash-welcome-easy.png" alt="">
              <p>现金账户中记录您每一笔入账和支出，方便查找和管理日常交易。</p>
            </div>
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
      cashAmount: 0
    }
  }
}
</script>

<style lang="scss">
  a.active{
    color: #ff6700;
  }
  .cash-list-box{
    padding: 36px 48px;
    .cash-head{
      h1{
        font-size: 30px;
        line-height: 68px;
        font-weight: 400;
        color: #757575;
        
      }
    }
    
    .cash-content{
      .cash-box{
        margin: 0 auto;
        .cash-open{
          margin-top: 60px;
          text-align: center;;
          h2{
            font-size: 30px;
            color: #333;
            font-weight: 400;

          }
          h4{
            font-size: 14px;
            font-weight: 400;
            padding: 6px 0;

          }
        .btn-open{
            width: 120px;
            height: 40px;
            padding: 6px 10px;
            color: #b0b0b0;
            background-color: #e0e0e0;
            border-color: #e0e0e0;
            box-shadow: none;
            margin: 0 auto;
            text-align: center;
            line-height: 40px;
          }
        }
        .cash-introduction{
          display: flex;
          text-align: center;
          margin-top: 80px;
          img{
            margin-bottom: 40px;
          }
          p{
            font-size: 12px;
            line-height: 1.5;
          }
          .introduction-item{
            padding: 0 40px;
          }
        }
      }
    }
  }
</style>