<template>
  <div class="cart-page">
    <div class="cart-header">
      <div class="container clearbox">
        <div class="header-left">
          <router-link to="/">
            <img class="header-logo" src="../../assets/images/logo-mi2.png" alt="logo" />
          </router-link>
          <h2 class="header-title">我的购物车</h2>
          <span class="header-tips">温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</span>
        </div>
        <div class="header-right">
          <li class="user-info">
            <a href="javascript:">{{personalInfo.nick_name}}</a>
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
          <li class="user-orders">
            |
            <router-link :to="'/user/'+userInfo.id+'/orderlist'">我的订单</router-link>
          </li>
        </div>
      </div>
    </div>
    <loading v-if="cartLoadStatus==1" :containerSize="'huge'"></loading>
    <div class="clearfix cart-container" v-else>
      <div class="cart-content" v-if="cartItems.length>0&&cartLoadStatus==2">
        <div class="cart-container .clearfix">
          <div class="cart-table">
            <div class="table-head">
              <div class="tab-head head-all">
                <input
                  type="checkbox"
                  name="all"
                  id="checkboxall"
                  class="all-check"
                  v-on:change="checkAll"
                  v-model="isAllCheck"
                />
                <label for="checkboxall">全选</label>
              </div>
              <div class="tab-head head-name">商品名称</div>
              <div class="tab-head head-price">单价</div>
              <div class="tab-head head-count">数量</div>
              <div class="tab-head head-sum">小计</div>
              <div class="tab-head head-action">操作</div>
            </div>
            <div class="table-body">
              <div class="tab-item" v-for="(cartItem,index) in cartItems" :key="cartItem.id">
                <div class="item-box">
                  <div class="tab-col col-check">
                    <input
                      type="checkbox"
                      :value="cartItem.id"
                      class="item-check"
                      v-model="checkItems"
                      v-on:change="checkItem"
                    />
                  </div>
                  <div class="tab-col col-name">
                    <a href="javascript:">
                      <img :src="cartItem.product_sku.product.image_url" alt="null" />
                      <span>{{cartItem.product_sku.product.zh_name +' '+ cartItem.product_sku.name}}</span>
                    </a>
                  </div>
                  <div class="tab-col col-price">{{cartItem.product_sku.price}}元</div>
                  <div class="tab-col col-count">
                    <a class="btn-dec" href="javascript:" @click="decNum(index)">-</a>
                    <input
                      class="input-count"
                      type="text"
                      :placeholder="cartItem.amount"
                      v-model="cartItem.amount"
                    />
                    <a class="btn-inc" href="javascript:" @click="incNum(index)">+</a>
                  </div>
                  <div class="tab-col col-sum">{{cartItem.amount*cartItem.product_sku.price}}元</div>
                  <div class="tab-col col-close">
                    <a class="btn-close" href="javascript:" @click="deleteItem(cartItem.id)">
                      <i class="iconfont iconclose"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-footer">
          <div class="footer-left">
            <p>
              <router-link to="/" class="link-back">继续购物</router-link>&nbsp;|&nbsp;共
              <span class="chose-sum">{{cartItems.length}}</span>件商品已选择
              <span class="chose-count">{{checkItems.length}}</span>件
            </p>
          </div>
          <div class="footer-right">
            <p class="sum-msg">
              <span>
                合计：
                <b class="sum-count">{{totalAmount}}</b>元
              </span>
              <a href="javascript:" class="btn-sum" @click="handleCart">去结算</a>
            </p>
          </div>
          <div class="footer-tips" v-if="!checkItems.length">
            请选择需要勾选的商品
            <i class="iconfont iconarrowdown"></i>
          </div>
        </div>
      </div>
      <div class="empty-cart" v-if="cartLoadStatus==2&&cartItems.length==0">
        <div class="empty-container clearfix">
          <div class="empty-content">
            <h1 class="empty-title">您的购物车还是空的</h1>
            <router-link to="/" class="btn-shop">马上去购物</router-link>
          </div>
        </div>
      </div>
    </div>

    <common-footer></common-footer>
  </div>
</template>

<script>
import FetchAPI from "../../api/fetchApi";
import CommonFooter from "../../components/common/CommonFooter";
import Loading from "../../components/common/Loading";
export default {
  components: {
    CommonFooter,
    Loading
  },
  data() {
    return {
      checkItems: [], //选中的购物车项目
      totalAmount: 0, //选中总价
      fullCart: "", //提交的购物车信息
      keepCart: "", //选中的商品
      isAllCheck: "" //是否选中所有商品
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    },
    personalInfo() {
      return this.$store.getters.personalInfo;
    },
    cartItems() {
      // console.log(this.$store.getters.cartItem);
      return this.$store.getters.cartItems;
    },
    cartLoadStatus() {
      return this.$store.getters.cartLoadStatus;
    }
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    userLogout() {
      FetchAPI.logout()
        .then(res => {
          if (res.status == 200) {
            localStorage.removeItem("_user_token");
            this.$router.push({ name: "userlogin" });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    //减小商品数量
    decNum(index) {
      if (this.cartItems[index].amount > 1) {
        this.cartItems[index].amount--;
        this.$store.dispatch("updateCartItems", this.cartItems);
      } else {
        this.$toast("修改数量不能小于0");
        this.cartItems[index].amount = 1;
        //this.$store.dispatch('updateCartItems',this.cartItems);
      }
      //计价
      this.checkItem();
    },
    //增加商品数量
    incNum(index) {
      if (this.cartItems[index].amount < 2) {
        this.cartItems[index].amount++;
      } else {
        this.$toast("商品数量超过限购数");
      }
      //计价
      this.checkItem();
    },
    deleteItem(itemId) {
      //this.cartItems.splice(index,1);
      //获取当前项目id 并在数据库中删除
      //let itemId = this.cartItems[index-1].id;
      //console.log('itemId'+itemId);
      this.$store.dispatch("deleteCartItem", itemId);
      window.location.reload();
    },
    //选中购物车项目 并计算总价值
    checkItem() {
      let checkLen = this.checkItems.length;
      let countItems = [];
      //逐项遍历找出选中的项目
      for (let item of this.cartItems) {
        for (let i = 0; i < checkLen; i++) {
          if (item.id == this.checkItems[i]) {
            countItems.push(item);
          }
        }
      }
      //储存购物车信息
      this.keepCart = countItems;
      //并进行计算求和
      let countLen = countItems.length;
      let totalAmount = 0;

      for (let i = 0; i < countLen; i++) {
        totalAmount += countItems[i].amount * countItems[i].product_sku.price;
      }

      this.totalAmount = totalAmount;
    },
    checkAll() {
      
      if (this.isAllCheck===true) {
        //1.查询所有购物车项目id push进checkItems 里面
        for (let item of this.cartItems) {
          this.checkItems.push(item.id);
        }
        //计算价值
        this.checkItem();
      }else if(this.isAllCheck===false){
        this.checkItems = []
        this.checkItem();
      }
    },
    //提交购物车 准备生成订单
    handleCart() {
      //检查购物车是否有东西
      if (this.keepCart.length > 0) {
        //调用vuex 储存购物车信息
        this.$store.dispatch("keepCart", this.keepCart);
        //跳转确认订单页
        this.$router.push({ name: "user_check_order" });
      } else {
        this.$toast("请先选中要结算的商品");
      }
    }
  },
  watch: {
    cartLoadStatus(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
.cart-page {
  .cart-header {
    width: 100%;
    height: 100px;
    background-color: #fff;
    border-bottom: 2px solid #ff6700;
    .container {
      width: 1226px;
      margin: 0 auto;
    }
    .header-left {
      float: left;
      height: 48px;
      margin-top: 26px;
      .header-logo {
        width: 48px;
        height: 48px;
        float: left;
      }
      .header-title {
        margin-bottom: 0px;
        font-size: 28px;
        font-weight: 400;
        color: #424242;
        float: left;
        text-align: center;
        margin-left: 40px;
      }
      .header-tips {
        font-size: 12px;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
      }
    }
    .header-right {
      float: right;
      margin-top: 46px;
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
          top: 70px;

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
      .user-orders {
        float: left;
        text-align: center;
        height: 40px;
        font-size: 12px;
        color: #bbb;
        a {
          font-size: 14px;
          &:hover {
            color: #ff6700;
          }
          margin-left: 14px;
        }
      }
    }
  }
  .cart-content {
    width: 100%;
    padding: 38px 0;
    background-color: #f5f5f5;
    .cart-container {
      width: 1226px;
      height: auto;
      margin: 0 auto;
      background-color: #fff;
      .table-head {
        height: 70px;
        line-height: 70px;
        color: #424242;

        .tab-head {
          float: left;
          font-size: 14px;
          text-align: center;
        }
        .head-all {
          width: 110px;
          .all-check {
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-right: 10px;
            cursor: pointer;

            &:checked {
              color: #ff6700;
            }
          }
        }
        .head-name {
          width: 500px;
          padding-left: 120px;
          text-align: left;
          box-sizing: border-box;
        }
        .head-price {
          width: 140px;
        }
        .head-count {
          width: 150px;
        }
        .head-sum {
          width: 140px;
        }
        .head-action {
          width: 80px;
        }
      }
      .tab-item {
        width: 1226px;
        height: 116px;
        .item-box {
          padding: 15px 0;
          height: 86px;
          .tab-col {
            float: left;
          }
          .col-check {
            width: 110px;
            height: 86px;
            line-height: 86px;
            padding-top: 12px;
            .item-check {
              width: 20px;
              height: 20px;
              cursor: pointer;

              margin-left: 24px;
            }
          }
          .col-name {
            width: 500px;
            white-space: nowrap;
            overflow: hidden;
            line-height: 86px;

            a {
              img {
                vertical-align: middle;
                width: 96px;
                height: auto;
                max-height: 96px;
              }
              span {
                font-size: 18px;
                font-weight: 400;
              }
            }
          }
          .col-price {
            width: 140px;
            font-size: 16px;
            text-align: center;
            line-height: 86px;
          }
          .col-count {
            width: 150px;
            height: 38px;
            float: left;
            margin-top: 24px;
            border: 1px solid #ccc;
            .btn-dec {
              width: 38px;
              height: 38px;
              float: left;
              line-height: 38px;
              text-align: center;
              &:hover {
                background-color: #ccc;
              }
            }

            .input-count {
              float: left;
              width: 74px;
              height: 38px;
              border: none;
              text-align: center;
              &:focus {
                border: none;
                outline: none;
              }
            }
            .btn-inc {
              width: 38px;
              height: 38px;
              float: left;
              line-height: 38px;
              text-align: center;
              &:hover {
                background-color: #ccc;
              }
            }
          }
          .col-sum {
            width: 140px;
            line-height: 86px;
            text-align: center;
          }
          .col-close {
            width: 80px;
            line-height: 86px;
            text-align: center;
            position: relative;
            a.btn-close {
              display: block;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              transition: all 0.3s;
              position: absolute;
              left: 24px;
              top: 30px;

              i.iconclose {
                position: absolute;
                width: 16px;
                height: 16px;
                top: -31px;
                left: 4px;
              }
              &:hover {
                background-color: rgb(254, 44, 12);
                i.iconclose {
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
    .table-footer {
      width: 1226px;
      height: 50px;
      position: relative;
      background-color: #fff;
      margin: 20px auto 0 auto;
      .footer-left {
        float: left;
        line-height: 50px;
        text-align: center;
        margin-left: 20px;
        color: #424242;

        span.chose-sum,
        span.chose-count {
          color: #ff6700;
          margin: 0 5px 0 5px;
        }
      }
      .footer-right {
        float: right;
        line-height: 50px;
        text-align: center;

        p.sum-msg {
          color: #ff6700;
          span {
            float: left;
            b.sum-count {
              color: #ff1200;
              font-size: 28px;
              font-weight: 500;
            }
          }

          a.btn-sum {
            float: left;
            display: block;
            margin-left: 30px;
            margin-right: 0px;
            width: 200px;
            height: 50px;
            color: #fff;
            background-color: #ff6700;
            font-size: 16px;
          }
        }
      }
      .footer-tips {
        position: absolute;
        right: 0;
        bottom: 60px;
        width: 200px;
        height: 50px;
        border: 1px solid #ff6700;
        line-height: 50px;
        text-align: center;
        color: #ff6700;
        background-color: #fff;
        i {
          position: absolute;
          top: 30px;
          z-index: 10;
          left: 90px;
          height: 20px;
        }
      }
    }
  }
  .empty-cart {
    .empty-container {
      width: 100%;
      background-color: #f5f5f5;
      .empty-content {
        width: 1226px;
        height: 273px;
        margin: 103px auto 130px auto;
        padding-left: 558px;
        box-sizing: border-box;
        background: url("https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png")
          no-repeat 124px 0px;
        h1.empty-title {
          color: #b0b0b0;
          margin-top: 70px;
          padding-top: 70px;
          font-size: 36px;
        }
        a.btn-shop {
          color: #fff;
          width: 170px;
          height: 48px;
          display: block;
          line-height: 48px;
          text-align: center;
          background-color: #ff6700;
          margin-top: 15px;
        }
      }
    }
  }
}
.user-info {
  width: 110px;
  height: 40px;
  float: left;
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
</style>