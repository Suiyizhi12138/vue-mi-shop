<template>
  <div class="user-orderlist-page">
    <div class="order-list-box">
      <div class="order-head">
        <h1>
          我的订单
          <span>请谨防钓鱼或诈骗电话</span>
          <a href="javascript">了解更多></a>
        </h1>
      </div>
      <div class="order-nav clearfix">
        <div class="nav-left">
          <ul class="nav-list">
            <li class="nav-item nav-first">
              <a href="javascript:" :class="{active: isAllOrder}" @click="showOrders('all')">全部有效订单</a>
            </li>
            <li class="nav-item">
              <a href="javascript:" :class="{active: isWaitOrder}" @click="showOrders('wait')">待支付</a>
            </li>
            <li class="nav-item">
              <a href="javascript:" :class="{active: isPaidOrder}" @click="showOrders('paid')">待收货</a>
            </li>
            <li class="nav-item nav-last">
              <a
                href="javascript:"
                :class="{active: isRabbishOrder}"
                @click="showOrders('rabbish')"
              >订单回收站</a>
            </li>
          </ul>
        </div>
        <div class="nav-right clearfix">
          <input type="text" placeholder="输入商品名称 订单号" />
          <i class="iconfont iconsearch"></i>
        </div>
      </div>
      <div class="order-content">
        <div class="order-box clearfix">
          <div class="order-list-box" v-if="true">
            <div class="order-show-box" v-show="isAllOrder">
              <ul class="order-list">
                <li class="order-item clearfix" v-for="order in orders" :key="order.id">
                  <div class="order-header clearfix">
                    <h2 class="order-title">{{order.paid_at?'等待收货':'等待付款'}}</h2>
                    <p class="sub-title">
                      <span class="sub-detail">
                        {{order.created_at}}
                        <b>|</b>{{userInfo.personal_info.nick_name}}
                        <b>|</b>订单号：{{order.no}}
                        <b>|</b>在线支付
                      </span>
                      <span class="sub-price">
                        订单金额：
                        <b class="price">{{order.total_amount}}元</b>元
                      </span>
                    </p>
                  </div>
                  <div class="order-content clearfix">
                    <div class="content-left" v-for="item in order.items" :key="item.id">
                      <img :src="item.product.image_url" alt />
                      <div class="product-info">
                        <p>
                          <a href="javascript:">{{item.product.zh_name}}</a>
                        </p>
                        <p>
                          <a href="javascript:">{{item.product_sku.price*1+"x"+item.amount}}</a>
                        </p>
                      </div>
                    </div>
                    <div class="content-right">
                      <router-link class="active" :to="'/express/'+order.no" v-if="order.paid_at">查看物流</router-link>
                      <router-link class="active" :to="'/payorder/'+order.no" v-else>立即付款</router-link>
                      <router-link :to="'/user/'+userInfo.id+'/orderview/'+order.no">订单详情</router-link>
                      <a href="javascript:">联系客服</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="pagenate clearfix">
                <ul class="pagenate-list clearfix">
                  <li class="pagenate-item pagenate-first">
                    <a href="javascript:" class="btn-first">
                      <i class="iconfont iconarrowleft"></i>
                    </a>
                  </li>
                  <li class="pagenate-item">
                    <a href="javascript:" class="btn-page current">1</a>
                  </li>
                  <li class="pagenate-item" v-show="false">
                    <a href="javascript:" class="btn-page">2</a>
                  </li>
                  <li class="pagenate-item pagenate-last">
                    <a href="javascript:" class="btn-last">
                      <i class="iconfont iconarrowright"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="order-show-box" v-show="isWaitOrder">
              <ul class="order-list">
                <li class="order-item clearfix" v-for="order in waitOrders" :key="order.id">
                  <div class="order-header clearfix">
                    <h2 class="order-title">{{order.paid_at?'已付款':'等待付款'}}</h2>
                    <p class="sub-title">
                      <span class="sub-detail">
                        {{order.created_at}}
                        <b>|</b>{{userInfo.personal_info.nick_name}}
                        <b>|</b>订单号：{{order.no}}
                        <b>|</b>在线支付
                      </span>
                      <span class="sub-price">
                        订单金额：
                        <b class="price">{{order.total_amount}}元</b>元
                      </span>
                    </p>
                  </div>
                  <div class="order-content clearfix">
                    <div class="content-left" v-for="item in order.items" :key="item.id">
                      <img :src="item.product.image_url" alt />
                      <div class="product-info">
                        <p>
                          <a href="javascript:">{{item.product.zh_name}}</a>
                        </p>
                        <p>
                          <a href="javascript:">{{item.product_sku.price*1+"x"+item.amount}}</a>
                        </p>
                      </div>
                    </div>
                    <div class="content-right">
                      <router-link :to="'/payorder/'+order.no" class="active">立即付款</router-link>
                      <router-link :to="'/user/'+userInfo.id+'/orderview/'+order.no">订单详情</router-link>
                      <a href="javascript:">联系客服</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="pagenate clearfix">
                <ul class="pagenate-list clearfix">
                  <li class="pagenate-item pagenate-first">
                    <a href="javascript:" class="btn-first">
                      <i class="iconfont iconarrowleft"></i>
                    </a>
                  </li>
                  <li class="pagenate-item">
                    <a href="javascript:" class="btn-page current">1</a>
                  </li>
                  <li class="pagenate-item" v-show="false">
                    <a href="javascript:" class="btn-page">2</a>
                  </li>
                  <li class="pagenate-item pagenate-last">
                    <a href="javascript:" class="btn-last">
                      <i class="iconfont iconarrowright"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="order-show-box" v-show="isPaidOrder">
              <ul class="order-list">
                <li class="order-item clearfix" v-for="order in paidOrders" :key="order.id">
                  <div class="order-header clearfix">
                    <h2 class="order-title">待收货</h2>
                    <p class="sub-title">
                      <span class="sub-detail">
                        {{order.created_at}}
                        <b>|</b>{{userInfo.personal_info.nick_name}}
                        <b>|</b>订单号：{{order.no}}
                        <b>|</b>在线支付
                      </span>
                      <span class="sub-price">
                        订单金额：
                        <b class="price">{{order.total_amount}}元</b>元
                      </span>
                    </p>
                  </div>
                  <div class="order-content clearfix">
                    <div class="content-left" v-for="item in order.items" :key="item.id">
                      <img :src="item.product.image_url" alt />
                      <div class="product-info">
                        <p>
                          <a href="javascript:">{{item.product.zh_name}}</a>
                        </p>
                        <p>
                          <a href="javascript:">{{item.product_sku.price*1+"x"+item.amount}}</a>
                        </p>
                      </div>
                    </div>
                    <div class="content-right">
                      <router-link to='/' class="active">查看物流</router-link>
                      <router-link :to="'/user/'+userInfo.id+'/orderview/'+order.no">订单详情</router-link>
                      <a href="javascript:">联系客服</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="pagenate clearfix">
                <ul class="pagenate-list clearfix">
                  <li class="pagenate-item pagenate-first">
                    <a href="javascript:" class="btn-first">
                      <i class="iconfont iconarrowleft"></i>
                    </a>
                  </li>
                  <li class="pagenate-item">
                    <a href="javascript:" class="btn-page current">1</a>
                  </li>
                  <li class="pagenate-item" v-show="false">
                    <a href="javascript:" class="btn-page">2</a>
                  </li>
                  <li class="pagenate-item pagenate-last">
                    <a href="javascript:" class="btn-last">
                      <i class="iconfont iconarrowright"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="order-show-box" v-show="isRabbishOrder">
              <ul class="order-list">
                <li class="order-item clearfix" v-for="order in rabbishOrders" :key="order.id">
                  <div class="order-header clearfix">
                    <h2 class="order-title">{{order.closed?'已关闭':'等待付款'}}</h2>
                    <p class="sub-title">
                      <span class="sub-detail">
                        {{order.created_at}}
                        <b>|</b>{{userInfo.personal_info.nick_name}}
                        <b>|</b>订单号：{{order.no}}
                        <b>|</b>在线支付
                      </span>
                      <span class="sub-price">
                        订单金额：
                        <b class="price">{{order.total_amount}}元</b>元
                      </span>
                    </p>
                  </div>
                  <div class="order-content clearfix">
                    <div class="content-left" v-for="item in order.items" :key="item.id">
                      <img :src="item.product.image_url" alt />
                      <div class="product-info">
                        <p>
                          <a href="javascript:">{{item.product.zh_name}}</a>
                        </p>
                        <p>
                          <a href="javascript:">{{item.product_sku.price*1+"x"+item.amount}}</a>
                        </p>
                      </div>
                    </div>
                    <div class="content-right" v-if="false">
                      <a href="javascript" class="active">立即付款</a>
                      <a href="javascript:">订单详情</a>
                      <a href="javascript:">联系客服</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="pagenate clearfix">
                <ul class="pagenate-list clearfix">
                  <li class="pagenate-item pagenate-first">
                    <a href="javascript:" class="btn-first">
                      <i class="iconfont iconarrowleft"></i>
                    </a>
                  </li>
                  <li class="pagenate-item">
                    <a href="javascript:" class="btn-page current">1</a>
                  </li>
                  <li class="pagenate-item" v-show="false">
                    <a href="javascript:" class="btn-page">2</a>
                  </li>
                  <li class="pagenate-item pagenate-last">
                    <a href="javascript:" class="btn-last">
                      <i class="iconfont iconarrowright"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="order-none" v-else>
            <h2 class="order-none-text">当前没有待支付订单。</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FetchApi from "@/api/fetchApi";
export default {
  data() {
    return {
      orderAmount: 1,
      orders: [], //查询的订单
      waitOrders: [], //待支付订单
      paidOrders: [], //待收货订单
      rabbishOrders: [],//回收订单
      isAllOrder: true, //是否显示全部订单
      isWaitOrder: false, //是否待支付订单
      isPaidOrder: false, //是否已经支付订单
      isRabbishOrder: false //是否回收订单
    };
  },
  computed:{
    userInfo(){
      return this.$store.getters.userInfo;
    }
  },
  mounted() {
    //获取订单列表信息
    FetchApi.getOrders()
      .then(res => {
        res.data.forEach(item => {
          //添加未关闭订单到订单列表中
          if (!item.closed) {
            this.orders.push(item);
          }else{
            this.rabbishOrders.push(item);
          }
          
          //添加待支付的订单到待支付数组中 
          if (!item.paid_at&&!item.closed) {
            this.waitOrders.push(item);
          }
          //已支付的加入待收货数组中
          if(item.paid_at&&!item.closed){
            this.paidOrders.push(item);
          }
        });
      })
      .catch(e => console.log(e));
  },
  methods: {
    showOrders(key) {
      switch (key) {
        case "all":
          this.isAllOrder = true;
          this.isWaitOrder = false;
          this.isPaidOrder = false;
          this.isRabbishOrder = false;
          break;

        case "wait":
          this.isAllOrder = false;
          this.isWaitOrder = true;
          this.isPaidOrder = false;
          this.isRabbishOrder = false;
          break;

        case "paid":
          this.isAllOrder = false;
          this.isWaitOrder = false;
          this.isPaidOrder = true;
          this.isRabbishOrder = false;
          break;

        case "rabbish":
          this.isAllOrder = false;
          this.isWaitOrder = false;
          this.isPaidOrder = false;
          this.isRabbishOrder = true;
          break;
      }
    }
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
      font-size: 30px;
      line-height: 68px;
      font-weight: 400;
      color: #757575;
      span {
        font-size: 12px;
        margin-left: 10px;
      }
      a {
        font-size: 12px;
        color: #ff6700;
      }
    }
  }
  .order-nav {
    height: 56px;
    .nav-left {
      float: left;
      .nav-list {
        height: 56px;
        padding: 18px 0;
        box-sizing: border-box;
        li.nav-first {
          padding-left: 0;
        }
        li.nav-last {
          border-right: 0;
        }
        .nav-item {
          float: left;
          height: 20px;
          line-height: 20px;
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid #757575;
          a {
            font-size: 16px;
          }
        }
      }
    }
    .nav-right {
      float: right;
      line-height: 42px;
      height: 42px;
      width: 262px;
      text-align: center;
      border: 1px solid #b5b5b5;
      input {
        border: none;
        outline: none;
        width: 220px;
        float: left;
        height: 42px;
        box-sizing: border-box;
        padding-left: 10px;
        border-right: 1px solid #757575;
      }
      i {
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        font-weight: 400;
        color: #757575;
      }
    }
  }
  .order-content {
    .order-box {
      margin: 40px auto 0px;
      .order-list-box {
        padding: 0;
        ul.order-list {
          .order-item {
            border: 1px solid #ff6700;
            margin-bottom: 20px;
            .order-header {
              background-color: #fffaf7;
              padding: 25px 30px 5px;
              border-bottom: 1px solid #ff9988;
              h2.order-title {
                font-size: 18px;
                color: #ff6700;
                font-weight: normal;
              }
              .sub-title {
                color: #757575;
                font-weight: 400;
                span {
                  display: inline-block;
                  line-height: 46px;
                  text-align: left;
                  //竖线
                  b {
                    font-weight: normal;
                    padding: 0 5px;
                    color: #bbb;
                  }
                }
                span.sub-detail {
                  float: left;
                  padding-top: 5px;
                }
                span.sub-price {
                  float: right;
                  .price {
                    color: #333;
                    font-weight: 500;
                    font-size: 28px;
                  }
                }
              }
            }
            .order-content {
              padding: 25px 30px 10px 30px;
              .content-left {
                float: left;
                margin-top: 14px;
                img {
                  width: auto;
                  height: 80px;
                  float: left;
                }
                .product-info {
                  width: 422px;
                  margin-top: 22px;
                  p {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    line-height: 22px;
                  }
                }
              }
              .content-right {
                float: right;
                a {
                  display: block;
                  border: 1px solid #757575;
                  background-color: #ffffff;
                  width: 118px;
                  height: 27px;
                  line-height: 30px;
                  text-align: center;
                  color: #757575;
                  font-size: 12px;
                  margin-bottom: 10px;
                }
                a.active {
                  color: #fff;
                  background-color: #ff6700;
                  border-color: #ff6700;
                }
              }
            }
          }
        }
        .pagenate {
          margin-top: 30px;
          ul.pagenate-list {
            max-width: 882px;
            display: flex;
            justify-content: center;
            .pagenate-item {
              float: left;
              a.btn-page {
                background-color: #fff;
                color: #757575;
                border: 1px solid #757575;
                width: 48px;
                height: 24px;
                display: inline-block;
                line-height: 24px;
                text-align: center;
                padding: 3px 0;
                margin: 0 5px;
              }
              a.btn-first,
              a.btn-last {
                line-height: 24px;
                text-align: center;
                i {
                  display: inline-block;
                  line-height: 24px;
                  text-align: center;
                  font-size: 36px;
                  font-weight: 400;
                  margin-top: 4px;
                  color: #757575;
                }
              }
              a.current {
                background-color: #757575;
                color: #fff;
              }
            }
          }
        }
      }
      .order-none {
        line-height: 60px;
        text-align: center;
        .order-none-text {
          font-size: 18px;
          color: #bbb;
          font-weight: 400;
        }
      }
    }
  }
}
</style>