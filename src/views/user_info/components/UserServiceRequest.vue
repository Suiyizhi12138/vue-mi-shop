<template>
  <div class="user-requestlist-page">
    <div class="request-list-box">
      <div class="request-head">
        <h1>选择申请方式</h1>
      </div>
      
      
      <div class="request-content">
        <div class="request-box clearfix">
          <div class="request-fast request-item">
            <i class="iconfont iconplanec"></i>
            <h2 class="request-title">快速申请</h2>
            <p class="request-description">小米网/小米商城App购买的订单</p>
            <p class="request-description">支持通过订单快速申请</p>
            <a class="btn-fast">快速申请</a>
          </div>
          <div class="request-lower request-item">
            <i class="iconfont iconpen_"></i>
            <h2 class="request-title">填写申请单</h2>
            <p class="request-description">其他渠道购买的商品</p>
            <p class="request-description">通过唯一识别码和购买凭证申请售后</p>
            <a class="btn-lower">申请售后</a>
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
      requestAmount: 0,
    }
  }
}
</script>

<style lang="scss">
  a.active{
    color: #ff6700;
  }
  .request-list-box{
    padding: 36px 48px;
    .request-head{
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
    
    .request-content{
      .request-box{
        margin: 40px auto;
        .request-item{
          width: 50%;
          float: left;
          text-align: center;
          i{
            font-size: 80px;
            color: rgb(139,195,74);
          }
          h2{
            font-size: 18px;
            font-weight: normal;
            margin: 10px 0;
          }
          p{
            padding: 2px 0;
          }
         a{
           display: block;
            width: 160px;
            height: 40px;
            color: rgb(139,195,74);
           border: 1px solid rgb(139,195,74);
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            margin: 20px auto 0 auto;
            transition: all .4s linear;
            -webkit-transition: all .4s linear;
            &:hover{
              color: #fff;
              background-color: rgb(139,195,74);
            
            }
            
          }
        }
      }
    }
  }
</style>