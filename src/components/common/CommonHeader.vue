<template>
  <div class="common-header">
    <div class="header-container">
      <div class="header-left">
        <router-link to="/">小米商城</router-link>
        <span>|</span>
        <a href>MIUI</a>
        <span>|</span>
        <a href>loT</a>
        <span>|</span>
        <a href>天星数科</a>
        <span>|</span>
        <a href>有品</a>
        <span>|</span>
        <a href>小爱开放平台</a>
        <span>|</span>
        <a href>企业团购</a>
        <span>|</span>
        <a href>资质证照</a>
        <span>|</span>
        <a href>协议规则</a>
        <span>|</span>
        <a href>下载App</a>
        <span>|</span>
        <a href>智能生活</a>
        <span>|</span>
        <a href>Select Location</a>
      </div>
      <div class="header-middle" v-if="!logined">
        <router-link to="/user/login/login">登录</router-link>
        <span>|</span>
        <router-link to="/user/login/register">注册</router-link>
        <span>|</span>
        <a href>消息通知</a>
      </div>
      <div class="header-middle" v-else>
        <li class="user-info">
          {{userInfo.name}}
          <i class="iconfont iconarrowdown"></i>
          <ul class="user-hidden-list">
            <li class="user-hidden-item">
              <router-link :to="'/user/'+userInfo.id+'/protal'">个人中心</router-link>
            </li>
            <li class="user-hidden-item">
              <router-link :to="'/user/'+userInfo.id+'/comment'">评价晒单</router-link>
            </li>
            <li class="user-hidden-item">
              <router-link :to="'/user/'+userInfo.id+'/like'">我的喜欢</router-link>
            </li>
            <li class="user-hidden-item">
              <a href="/user/miaccount">小米账户</a>
            </li>
            <li class="user-hidden-item">
              <a href="javascript:" @click="userLogout">退出登录</a>
            </li>
          </ul>
        </li>
        <li class="user-msg">
          <a href>
            <span>|</span>消息通知
          </a>
          <router-link :to="'/user/'+userInfo.id+'/orderlist'">
            <span>|</span>我的订单
          </router-link>
        </li>
      </div>
      <div class="header-cart clearfix">
        <a href  class="btn-cart" :class="{'btn-active':cartItems.length>0}">
          <i class="iconfont iconcart"></i>
          <span class="cart-text">购物车</span>
          <span>({{cartItems.length}})</span>
        </a>
        <!-- <transition name="slide-down"> -->
        <div class="cart-hidden">
          
          <div class="cart-message">
            <div class="cart-text" v-if="cartItems.length<=0&&cartLoadStatus==2||!logined">购物车中还没有物品，快去购物吧！</div>
            <div class="cart-list-box" v-else>
              <div class="loading-container" v-if="cartLoadStatus==1">
                <loading containerSize="'min'"></loading>
              </div>
              <div class="cart-list-container clearfix" v-else>
                <ul class="cart-list">
                  <li class="cart-item clearfix" v-for="item in cartItems" :key="item.id">
                    <a href="javascript:" class="clearfix">
                      <div class="item-left clearfix">
                        <img :src="item.product_sku.product.image_url" alt class="product-img" />
                      </div>
                      <div class="item-center">
                        <p class="item-name">{{item.product_sku.product.zh_name}}</p>
                        <p class="item-sku">{{item.product_sku.name}}</p>
                      </div>
                      <div class="item-right">
                        <p
                          class="item-price"
                        >{{parseInt(item.product_sku.price)}} &nbsp; x &nbsp; {{item.amount}}</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="box-bottom clearfix" v-if="cartLoadStatus==2">
                  <div class="box-bottom-left">
                    <p class="price-label">
                      共
                      <em>{{cartItems.length}}</em>件商品
                    </p>
                    <p class="price-number">
                      <em>{{totalPrice}}</em>元
                    </p>
                  </div>
                  <div class="box-bottom-right">
                    <router-link class="link-cart" to="/cart">去购物车结算</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import FetchAPI from "@/api/fetchApi";
import Loading from "@/components/common/Loading";
export default {
  data() {
    return {
      logined: true,
      isCartNull: true,
      isShowCart: true, //是否显示购物车
      cartLoaded: true,
      cartItems: [], //购物车项目信息
      cartLoadStatus: 0, //购物车获取状态 0未获取 1正在获取 2获取成功 3获取失败
      t: "", //搜索延时器
      totalPrice: 0,//购物车总价number
    };
  },
  components: {
    Loading
  },
  created() {
    this.logined = Boolean(localStorage.getItem("_user_token"));
    this.loadCart();
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    },
    
  },
  methods: {
    userLogout() {
      FetchAPI.logout()
        .then(res => {
          if (res.status == 200) {
            localStorage.removeItem("_user_token");
            this.logined = false;
            this.$toast('登出成功！')
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    debounceLoad(time) {
      if (this.t) {
        console.log("clear");
        clearTimeout(this.t);
      }
      this.t = setTimeout(() => {
        this.loadCart();
        console.log("load");
      }, time);
    },
    loadCart() {
      this.cartLoadStatus = 1;
      //如果用户未登录则直接返回 
      if(!this.logined){
        
        return;
      }
      FetchAPI.getCartItems()
        .then(res => {
          this.cartItems = res.data;
          this.cartLoadStatus = 2;
        })
        .catch(e => {
          console.log(e);
          this.cartLoadStatus = 3;
        });
    },
    leaveCart() {
      this.isShowCart = false;
    }
  },
  watch: {
    cartLoadStatus: function(val){
      if(val==2){
        this.cartItems.forEach((item)=>{
        this.totalPrice += item.product_sku.price*item.amount;  
      })
      }
      
    },
  }
};
</script>

<style lang="scss">
.common-header {
  height: 40px;
  min-width: 1226px;
  position: relative;
  margin: 0 auto;
  background-color: #333;
  font-size: 12px;
  line-height: 40px;
  color: #b0b0b0;
  display: flex;
  justify-content: center;
  .header-container {
    width: 1226px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    .header-middle,
    .header-left {
      a {
        font-size: 12px;
        color: #b0b0b0;
        display: inline-block;
        &:hover {
          color: #fff;
        }
      }
      span {
        margin: 0 5px;
        color: #424242;
        font-family: sans-serif;
      }
    }
    .header-left {
      min-width: 820px;
    }
    .header-middle {
      li {
        display: inline-block;
      }
      .user-info {
        width: 110px;
        height: 40px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
        &:hover {
          background-color: #fff;
          color: #ff6700;
          .user-hidden-list {
            display: block;
          }
        }
        .iconarrowdown {
          vertical-align: middle;
          margin-left: 5px;
          font-size: 10px;
        }
        .user-hidden-list {
          display: none;
          position: absolute;
          z-index: 99;
          background-color: #fff;
          width: 110px;
          line-height: 30px;
          top: 40px;

          .user-hidden-item {
            font-size: 14px;
            width: 110px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            a {
              color: #666;
            }
            &:hover {
              background-color: #f5f5f5;
              a {
                color: #ff6700;
              }
            }
          }
        }
      }
    }

    .header-cart {
      width: 120px;
      margin-left: 20px;
      position: relative;
      background-color: #444;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      color: #333;

      &:hover {
        .cart-hidden {
          display: block;
        }
        a.btn-cart {
          color: #ff6a00;
        }
        background-color: #fff;
      }
      a.btn-cart {
        display: block;
        width: 120px;
        color: #b0b0b0;
        span.cart-text {
          margin-right: 8px;
          margin-left: 5px;
        }
      }
      a.btn-active{
        color: #ff6700;
      }

      .cart-hidden {
        width: 320px;
        height: auto;
        position: absolute;
        display: none;
        z-index: 100;
        right: 0px;
        top: 40px;
       
        box-shadow: 2px 2px 5px #ccc;
        transition: all 0.2s ease;
        background-color: #fff;
        .cart-message {
          position: relative;
         padding: 30px 0;
          text-align: center;
        }
        .loading-container{
          width: 320px;
          height: 160px;
        }
        .cart-list-box {
          padding: 0px 10px 20px;
          .cart-list {
            .cart-item {
              height: 60px;
              padding: 10px 0;
              border-bottom: 1px solid #eee;

              div.item-left {
                float: left;
                width: 60px;
                height: 60px;
                background-color: #f5f5f5;
                display: flex;
                .product-img {
                  align-self: center;
                  width: 60px;
                  max-height: 60px;
                  margin: auto 0;
                }
              }
              div.item-center {
                float: left;
                height: 60px;
                padding-top: 15px;
                padding-left: 20px;
                p {
                  line-height: 20px;
                  text-align: center;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  font-size: 12px;
                  color: #424242;
                }
              }
              div.item-right {
                float: right;
                height: 60px;
                line-height: 60px;
                text-align: center;
                p {
                  line-height: 60px;
                  text-align: center;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  font-size: 12px;
                  color: #424242;
                }
              }
            }
          }
          .box-bottom {
            padding: 15px 20px;
            background-color: #fafafa;
            .box-bottom-left {
              float: left;
              p.price-label {
                font-size: 12px;
                color: #757575;
                line-height: 16px;
                em {
                  font-style: initial;
                }
              }

              p.price-number {
                color: #ff6700;
                font-size: 12px;
                em {
                  font-style: initial;
                  font-size: 24px;
                  line-height: 1;
                }
              }
            }
            .box-bottom-right {
              float: right;
              margin-top: 5px;
              a.link-cart {
                display: block;
                color: #fff;
                background-color: #ff6700;
                font-size: 14px;
                width: 130px;
                height: 40px;
                line-height: 40px;
                text-align: center;
              }
            }
          }
        }
      }
    }
    .slide-down-enter-active,
    .slide-dowm-leave-active {
      transition: all 0.5s ease;
    }
    .slide-down-enter,
    .slide-down-leave-to {
      opacity: 0;
    }
  }
}
</style>