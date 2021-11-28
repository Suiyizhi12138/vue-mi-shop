<template>
  <div class="order-view-component">
    <div class="order-view-box">
      <common-header :title="'订单详情'" :subTitle="'请谨防钓鱼链接或诈骗电话'" :subLink="'了解更多>'"></common-header>
      <nav class="nav-server">
        <p>
          <span class="order-no">订单号：{{order.no}}</span>
          <a href="javascript:void(0)" class="btn-server">联系客服</a>
        </p>
      </nav>
      <div class="order-content">
        <h2 class="order-status">{{order.closed?'已关闭':''}}</h2>
        <div class="order-progress">
          <ul class="progress-list">
            <li class="progress-item">
              <p class="progress-box">
                <a class="progress-status" :class="{'status-active':order.paid_at==false&&order.closed==true}">下单</a>
              </p>

              <p class="progress-time">{{order.created_at}}</p>
            </li>
            <li class="progress-item">
              <p class="progress-box">
                <a class="progress-status" :class="{'status-active':order.paid_at==null&&order.closed==false}">付款</a>
              </p>
              <p class="progress-time">{{order.paid_at?order.paid_at:''}}</p>
            </li>
            <li class="progress-item">
              <p class="progress-box">
                <a class="progress-status" :class="{'status-active':order.paid_at&&order.ship_status=='pending'}">配货</a>
              </p>
              <p class="progress-time">{{order.ship_status=='pending'?'正在配货':'已配货'}}</p>
            </li>
            <li class="progress-item">
              <p class="progress-box">
                <a class="progress-status" :class="{'status-active':order.ship_status=='delivered'}">出库</a>
              </p>
              <p class="progress-time">{{order.ship_status=='delivered'?'已出库':'未出库'}}</p>
            </li>

            <li class="progress-item">
              <p class="progress-box">
                <a class="progress-status" :class="{'status-active':order.ship_status=='received'}">交易成功</a>
              </p>
              <p class="progress-time">{{'挖个坑'}}</p>
            </li>
          </ul>
        </div>
        <div class="order-list-box clearfix">
          <ul class="order-list clearfix">
            <li class="order-item" v-for="item in order.items" :key="item.id">
              <router-link to="/" class="link-product">
                <img
                  :src="item.product.image_url"
                  alt="This is a product img"
                />
              </router-link>
              <div class="product-name">
                <router-link to>{{item.product.zh_name}}</router-link>
              </div>
              <div class="product-number">{{item.product_sku.price*1}}x{{item.amount}}</div>
            </li>
           
          </ul>
        </div>
        <div class="express-info section-info">
          <h2 class="express-title section-title">收货信息</h2>
          <div class="user-info">
            <p class="info-item">
              <span class="info-label">姓名：</span>
              <span class="info-content">{{order.address.contact_name}}</span>
            </p>
            <p class="info-item">
              <span class="info-label">联系电话：</span>
              <span class="info-content">{{order.address.contact_phone}}</span>
            </p>
            <p class="info-item">
              <span class="info-label">收货地址：</span>
              <span class="info-content">
                {{order.address.address}}
              </span>
            </p>
          </div>
        </div>
        <div class="pay-info section-info">
          <h2 class="section-title">支付方式</h2>
          <div class="section-content">
            <p class="info-item">
              <span class="info-label">支付方式：</span>
              <span class="info-content">{{'在线支付'}}</span>
            </p>
          </div>
        </div>
        <div class="invoice-info section-info">
          <h2 class="section-title">发票信息</h2>
          <div class="section-content">
            <p class="info-item">
              <span class="info-label">发票头：</span>
              <span class="info-content">个人</span>
            </p>
             <p class="info-item">
              <span class="info-label">发票类型：</span>
              <span class="info-content">电子普通发票</span>
            </p>
             <p class="info-item">
              <span class="info-label">发票单位：</span>
              <span class="info-content">个人</span>
            </p>
          </div>
        </div>
        <div class="order-detail-right">
            
            <p class="detail-item">
              <span class="item-title">商品总价：</span>
              <span class="item-content">{{order.total_amount}}元</span>
            </p>
           
            
            <p class="detail-item">
              <span class="item-title">运费</span>
              <span class="item-content">{{0.00}}元</span>
            </p>
            <p class="detail-item detail-total-fee">
              <span class="item-title">应付总额：</span>
              <span class="item-content total-fee">{{order.total_amount}}元</span>
            </p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
//user 子组件下header
import CommonHeader from "@/components/common/CommonHeader";
import FetchApi from '@/api/fetchApi';
export default {
  components: {
    CommonHeader
  },
  data() {
    return {
      order: '',//订单信息
    };
  },
  computed:{
    userInfo(){
      return this.$store.getters.userInfo;
    }
  },
  mounted(){

    //获取订单
    FetchApi.getOrder(this.$route.params.no)
    .then((res)=>{
      if(res.status==200){
        this.order = res.data[0];
      }
    })
    .catch(e=>{
      console.log(e);
    })

  }
};
</script>

<style lang="scss">
.order-view-component {
  .order-view-box {
    padding: 48px 36px;
    .nav-server {
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
      p {
        display: flex;
        justify-content: space-between;
        span.order-no {
          font-size: 18px;
        }
        a {
          display: inline-block;
          width: 118px;
          height: 28px;
          border: 1px solid #b0b0b0;
          line-height: 28px;
          text-align: center;
          color: #757575;
          &:hover {
            background-color: #757575;
            color: #fff;
          }
          transition: all 0.2s linear;
        }
      }
    }
    .order-content {
      h2.order-status {
        font-size: 18px;
        color: #b0b0b0;
        font-weight: normal;
        margin: 20px 0;
      }
      .order-progress {
        .progress-list {
          display: flex;
          justify-content: space-between;

          .progress-item {
            text-align: center;
            width: 20%;
            p.progress-box {
              background-color: #eee;
            }
            a {
              color: #333;

              display: inline-block;
              width: 100%;
              height: 20px;
              line-height: 20px;
              background-color: #eee;
            }
            a.status-active {
              background-color: #83c44e;
              color: #fff;
              border-radius: 12px;
            }
            a.status-last {
              border-radius: 0 12px 12px 0;
            }

            p.progress-time {
              font-size: 11px;
              color: #757575;
              margin: 14px 0;
            }
          }
        }
      }
      .order-list-box {
        .order-list {
          margin-top: 0px;
         
          .order-item {
            height: 100px;
            box-sizing: border-box;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            img {
              float: left;
              height: 80px;
              height: 80px;
            }
            .product-name {
              float: left;
              line-height: 20px;
              margin: 30px 0;
              width: 350px;
            }
            .product-number {
              float: left;
              line-height: 20px;
              margin: 30px 0;
              width: 312px;
            }
          }
        }
      }
      .section-info{
        border-bottom: 1px solid #eee;
        padding-bottom: 14px;
        h2.section-title{
          font-size: 18px;
          color: #000;
          font-weight: normal;
          margin: 20px 0 14px 0;
        }
        p.info-item{
          padding: 5px 0;
          .info-label{
            color: #666;
            font-weight: 600;
          }
          .info-content{
            color: #757575;
          }
        }
      }
      .order-detail-right {
        padding: 30px 0;
        float: right;
        .detail-item {
          width: 250px;
          height: 28px;
          span.item-title {
            text-align: right;
            color: #757575;
          }
          span.item-content {
            float: right;
            color: #ff6700;
          }
          
        }
        p.detail-total-fee{
          margin-top: 30px;
          span.item-title{
            display: inline-block;
            height: 40px;
            padding-top: 20px;
            box-sizing: border-box;
          }
          span.item-content{
            font-size: 30px;
            font-weight: 200;
          }
        }
      }
    }
  }
}
</style>