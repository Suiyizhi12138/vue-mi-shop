<template>
  <div class="pay-order-page">
    <!-- 支付订单页 -->
    <easy-header :headerTitle="'支付订单'"></easy-header>
    <div class="pay-container">
      <div class="section-order">
        <div class="order-top clearfix">
          <div class="order-top-left">
            <div class="sure-icon">
              <i class="iconfont icongougou"></i>
            </div>
          </div>
          <div class="order-top-right clearfix">
            <div class="pay-info">
              <h2 class="info-head">订单提交成功！ 去付款咯~</h2>
              <p class="info-text">
                请在
                <span class="order-time">{{0}}小时{{14}}分钟</span>内完成支付，超时后将取消订单
              </p>
            </div>
            <div class="pay-num">
              <p class="pay-amount">
                <span class="toal-label">应付总额：</span>
                <span class="total-num">
                  <b class="total-amount">{{order.total_amount}}</b>元
                </span>
              </p>
              <a href="javascript:" @click="toggleDetail">
                订单详情
                <i class="iconfont iconarrowdown"></i>
              </a>
            </div>
            <div class="order-bottom order-detail">
              <transition name="slide-down" mode="out-in">
                <div class="order-info" v-if="!isDetail" :key="0">
                  <p class="info-p">
                    <span class="info-label">收货信息：</span>
                    <span class="info-content">萝卜 131****3017 广东 深圳市 龙岗区 龙华街道 瓦窑排村九栋二巷</span>
                  </p>
                </div>

                <div class="order-detail" v-else :key="1">
                  <p class="p-order-no detail-item">
                    <span class="item-label">订单号：</span>
                    <span class="item-content" style="color: #ff6700">{{order.no}}</span>
                  </p>
                  <p class="p-order-info detail-item">
                    <span class="item-label">收货信息：</span>
                    <span
                      class="item-content"
                    >{{order.address.contact_name+' '+order.address.contact_phone.slice(0,3)+'****'+order.address.contact_phone.slice(7)+' '+order.address.address.replace('_',' ')}}</span>
                  </p>
                  <p
                    class="p-order-product detail-item"
                    v-for="(item,index) in products"
                    :key="index"
                    style="line-height: 20px;"
                  >
                    <span class="item-label" >{{index==0?'商品名称：':' '}}</span>
                    <span class="item-content" style="font-size:13px ">{{item}}</span>
                  </p>
                  <p class="p-order-invoice detail-item">
                    <span class="item-label">发票信息：</span>
                    <span class="item-content">电子普通发票 个人</span>
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="section-pay clearfix">
        <h2 class="section-title">
          选择以下支付方式付款
          <span style="color: #999; font-size: 12px; font-weight: normal">(当前只支持支付宝沙箱测试)</span>
        </h2>
        <div class="payment-box clearfix">
          <h3 class="payment-title">支付平台</h3>
          <ul class="payment-list">
            <li class="payment-item">
              <a href="javascript:" @click="goAlipay">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png"
                  alt="支付宝"
                />
              </a>
            </li>
            <li class="payment-item">
              <a href="javascript:">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a4f743d0bdb5c048ad9803914a4ea83.jpg"
                  alt="小米钱包"
                />
              </a>
            </li>
            <li class="payment-item">
              <a href="javascript:">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg"
                  alt="微信支付"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="payment-box clearfix">
          <h3 class="payment-title">银行借记卡及信用卡</h3>
          <ul class="payment-list">
            <li class="payment-item" v-for="(item,index) in showCards" :key="index">
              <a href="javascript:">
                <img :src="item" alt />
              </a>
            </li>
            <li
              v-if="showCards.length<=11"
              class="payment-item"
              style="cursor: pointer"
              @click="showAllCards"
            >
              <span>查看更多</span>
            </li>
            <li v-else class="payment-item" style="cursor: pointer" @click="showPartCards">
              <span>收起更多</span>
            </li>
          </ul>
        </div>
        <div class="payment-box">
          <h3 class="payment-title">
            快捷支付
            <span
              class="sub-title"
              style="font-size:12px;color: #999;font-weight: normal"
            >（支持以下各银行信用卡以及部分银行借记卡）</span>
          </h3>
          <ul class="payment-list">
            <li class="payment-item" v-for="(item,index) in fastCards" :key="index">
              <a href="javascript:">
                <img :src="item" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="section-pay-seprate clearfix">
        <div class="payment-box">
          <h3 class="payment-title">分期付款</h3>
          <ul class="payment-list">
            <li class="payment-item">
              <a href="javascript:">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c924147efb783abb94fde84a07a5e89b.jpg"
                  alt="信用卡分期"
                />
              </a>
            </li>
            <li class="payment-item">
              <a href="javascript:">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b97500cce80cfb46d4ff6d8d1015db03.png"
                  alt="花呗分期"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import EasyHeader from "../../components/common/EasyHeader";
import CommonFooter from "../../components/common/CommonFooter";
import FetchApi from '../../api/fetchApi';
export default {
  data() {
    return {
      isDetail: false, //是否显示订单详情
      //银行卡图片
      cards: [
        "https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_gsyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_jsyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_jtyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_jtyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_zgyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_youzheng.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_gfyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_pufa.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_gdyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_xyyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_msyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_shyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_bjnsyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_nbyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_hzyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_shnsyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_fcyh.png",
        

      ],
      showCards:[],
      //快捷支付银行卡
      fastCards:[
        "https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_jtyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_jsyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_gsyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_zxyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_gdyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_zgyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_shncsyyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_xyyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_nyyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_payh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_hyyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_gfyh.png",
        "https://s01.mifile.cn/i/banklogo/payOnline_bjyh.png"
      ],
      order: '',//订单信息
     
    };
  },
  computed: {
   
    products(){
      let pArrays = [];
      this.order.items.forEach((item)=>{
        pArrays.push(item.product.zh_name + ' ' +item.product_sku.name);
      })

      return pArrays;
    }
    
  },
  components: {
    EasyHeader,
    CommonFooter
  },
  mounted(){
    this.showCards = this.cards.slice(0,11);
    //根据路由参数获取订单
    FetchApi.getOrder(this.$route.params.no)
    .then((res)=>{
      this.order = res.data[0];
    })

  },
  methods: {
    toggleDetail() {
      this.isDetail = !this.isDetail;
    },
    showAllCards(){
      this.showCards = this.cards;
    },
    showPartCards(){
      this.showCards = this.cards.slice(0,11)
    },
    goAlipay(){
      window.location.href = "http://mi-shop.test/payment/"+ this.order.id+'/alipay';
    }
    
  }
};
</script>

<style lang="scss">
.pay-order-page {
  .pay-container {
    min-width: 1226px;
    margin: 0 auto;
    height: auto;
    overflow: hidden;
    background-color: #f5f5f5;
    padding: 40px 20px 20px 20px;
    .section-order {
      width: 1226px;
      margin: 0 auto;
      .order-top {
        padding: 36px;
        width: 1226px;
        box-sizing: border-box;
        background-color: #fff;
        .order-top-left {
          float: left;
          padding-left: 20px;
          .sure-icon {
            width: 80px;
            height: 80px;

            float: left;
            border-radius: 50%;
            border: 1px solid greenyellow;
            line-height: 80px;
            text-align: center;
            i {
              font-size: 36px;
              color: greenyellow;
            }
          }
        }
        .order-top-right {
          float: left;
          width: 995px;
          margin-left: 50px;

          .pay-info {
            float: left;

            .info-head {
              font-size: 24px;
              font-weight: 400;
              margin-bottom: 10px;
              margin-top: 10px;
            }
            
          }
          .pay-num {
            float: right;
            margin-top: 10px;
            p.pay-amount {
              span.total-num {
                color: #ff6700;
                b.total-amount {
                  font-size: 24px;
                  font-weight: normal;
                }
              }
              margin-bottom: 10px;
            }
          }
          .order-bottom {
            width: 995px;
            margin-top: 80px;
            .order-detail {
              border-top: 1px solid #eee;
              padding-top: 10px;

              p.detail-item {
                line-height: 40px;
                .item-label {
                  display: inline-block;
                  width: 85px;
                }
              }
            }
          }
        }
      }
    }
    .section-pay,
    .section-pay-seprate {
      width: 1226px;
      margin: 20px auto;
      box-sizing: border-box;
      padding: 20px 30px;
      background-color: #fff;
      .section-title {
        font-size: 18px;
        color: #424242;
        font-weight: normal;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
      }
      .payment-box {
        box-sizing: border-box;
        padding-top: 20px;
        h3.payment-title {
          font-size: 16px;
          color: #616161;
          padding: 20px 0;
        }
        .payment-list {
          margin-left: -14px;
          .payment-item {
            float: left;
            height: 60px;
            line-height: 60px;
            text-align: center;
            width: 176px;
            border: 1px solid #e0e0e0;
            margin-left: 14px;
            margin-bottom: 14px;
            transition: all 0.2s linear;
            &:hover {
              border-color: #ff6700;
            }
            img {
              width: 176px;
            }
          }
        }
      }
    }
    .section-pay-seprate {
      box-sizing: border-box;
    }
  }
  .slide-down-enter-active {
    transition: all 0.3s ease;
  }
  .slide-down-leave-active {
    transition: all 0.3s ease;
  }
  .slide-down-enter,
  .slide-down-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>