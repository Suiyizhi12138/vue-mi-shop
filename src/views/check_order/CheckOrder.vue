<template>
  <div class="check-order-page">
    <!-- 确认订单页 -->

    <div class="cart-header">
      <div class="container clearbox">
        <div class="header-left">
          <router-link to="/">
            <img class="header-logo" src="../../assets/images/logo-mi2.png" alt="logo" />
          </router-link>
          <h2 class="header-title">确认订单</h2>
          <!-- <span class="header-tips">温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</span> -->
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
                <a href="javascript:" @click="userLogout()">退出登录</a>
              </li>
            </ul>
          </li>
          <span style="float: left">|</span>
          <li class="user-orders">
            <router-link :to="'/user/'+userInfo.id+'/orderlist'">我的订单</router-link>
          </li>
        </div>
      </div>
    </div>
    <div class="order-container">
      <check-addresses v-on:selectAddress="saveAddress"></check-addresses>
      
      <div class="product-list-box">
        <section class="section-products">
          <h2 class="product-title">商品及优惠券</h2>
          <ul class="product-list">
            <li class="list-item" v-for="item in fullCart" :key="item.id">
              <img :src="item.product_sku.product.image_url" alt />
              <span
                class="product-name"
              >{{ item.product_sku.product.zh_name+' '+ item.product_sku.name}}</span>
              <span class="price-amount">{{(item.product_sku.price*1)+'元x'+item.amount}}</span>
              <span class="product-status"></span>
              <span class="count-amount">{{item.product_sku.price*item.amount}}元</span>
            </li>
          </ul>
        </section>
        <hr class="line-seprate" />
        <section class="section-express">
          <h2 class="section-title">配送方式</h2>
          <p class="section-content">包邮</p>
        </section>
        <hr class="line-seprate" />
        <section class="section-invoice">
          <h2>发票</h2>
          <p class="section-content">
            <span>电子普通发票</span>
            <span>个人</span>
            <span>商品明细</span>
            <a href="javascript:" @click="popModal">修改></a>
          </p>
          <transition name="fade-modal">
            <modal
              :modalWidth="680"
              :modalHeight="580"
              :modalTitle="'发票信息'"
              @closeModal="onCloseModal()"
              v-if="showModal"
              :key="invoice"
            >
              <div class="form-content">
                <div class="form-box">
                  <div class="invoice-type">
                    <p class="type-header">
                      <span class="type-title">发票类型</span>
                      <a href="javascript:">电子普通发票</a>
                    </p>
                    <p class="type-info">电子发票是税务局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。</p>
                  </div>
                  <div class="invoice-head">
                    <div class="head-header">
                      <span class="head-title">发票抬头</span>
                      <a href="javascript:" class="btn-pc">个人</a>
                      <a href="javascript:" class="btn-co">单位</a>
                    </div>
                    <div class="head-form">
                      <div class="pc-form">
                        <div class="block-box">
                          <span class="input-left"></span>
                          <label for>请输入发票抬头</label>
                          <input type="text" placeholder="请输入发票抬头" />
                        </div>
                        <div class="block-box">
                          <span class="input-left">收票手机</span>
                          <label for>收票人电话</label>
                          <input type="text" placeholder="收票人电话" />
                        </div>
                        <div class="block-box">
                          <span class="input-left">收票邮箱</span>
                          <label for>收票人邮箱</label>
                          <input type="text" placeholder="收票人邮箱" />
                        </div>
                        <div class="block-detail block-box">
                          <span class="input-left">发票内容：</span>
                          <span class="input-text">购买商品明细</span>
                        </div>
                        <div class="block-box block-know">
                          <span class="input-left">发票需知:</span>
                          <div class="know-detail">
                            <p>1.发票金额为实际支付金额，不包含优惠券、礼品卡等；</p>
                            <p>2.电子发票可以在订单完成后，在订单详情中下载和查看；</p>
                            <p>
                              3.小米有品商品的发票由小米有品开具，第三方商品的发票由相关企业单独开具；
                              发票相关问题 >
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-btn">
                <div class="btn-box">
                  <a href="javascript:" class="btn-submit">确定</a>
                  <a href="JavaScript:" class="btn-leave">取消</a>
                </div>
              </div>
            </modal>
          </transition>
        </section>
        <section class="section-footer clearfix">
          <div class="discount-left">
            <a href="javascript:">
              <i class="iconfont iconplus"></i>
              使用优惠券
            </a>
            <a href="javascript:">
              <i class="iconfont iconplus"></i>
              使用小米礼品券
            </a>
          </div>
          <div class="order-detail-right">
            <p class="detail-item">
              <span class="item-title">商品件数：</span>
              <span class="item-content">{{fullCart.length}}件</span>
            </p>
            <p class="detail-item">
              <span class="item-title">商品总价：</span>
              <span class="item-content">{{totalPrice}}元</span>
            </p>
            <p class="detail-item">
              <span class="item-title">活动优惠：</span>
              <span class="item-content">{{activityDiscount||0.00}}元</span>
            </p>
            <p class="detail-item">
              <span class="item-title">优惠券抵扣：</span>
              <span class="item-content">{{cardDiscount||0.00}}元</span>
            </p>
            <p class="detail-item">
              <span class="item-title">运费</span>
              <span class="item-content">{{expressFee||0.00}}元</span>
            </p>
            <p class="detail-item">
              <span class="item-title">应付总额：</span>
              <span class="item-content">{{totalPay}}元</span>
            </p>
          </div>
        </section>
        <section class="check-footer clearfix">
          <div class="check-address">
            <p class="address-head">
              <span>{{selectAddress.contact_name}}&nbsp;</span>
              <span>{{selectAddress.contact_phone}}</span>
            </p>
            <p class="address-content">
              <span>{{selectAddress.district}}&nbsp;</span>
              <span>{{selectAddress.address}}&nbsp;</span>
              <a href="javascript:" @click="updateAddress()" v-show="selectAddress.length>0">修改</a>
            </p>
          </div>
          <div class="check-btn-box">
            <router-link  class="btn-back-cart" to='/cart'>返回购物车</router-link>
            <button href="javascript:" class="btn-handle-order" @click="handleOrder">确认下单</button>
          </div>
        </section>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import FetchAPI from "@/api/fetchApi";
import CommonFooter from "@/components/common/CommonFooter";
import CheckAddresses from "@/components/user_info/CheckAddresses";
import Modal from "@/components/common/Modal";
//import Loading from '@/components/common/Loading'

export default {
  components: {
    CommonFooter,
    CheckAddresses,
    Modal,
   
  },
  data() {
    return {
      showModal: false,
      isPcForm: true, //是否显示个人发票表单
      isActiveHead: false, //input-head focus
      headHolder: "请输入发票抬头",
      headModel: "个人", //发票头模型
      isActivePhone: false,
      isActiveEmail: false,
      isActiveTax: false, //单位税号是否focus
      isActiveCoPhone: false, //单位手机是否focus
      isActiveCoEmail: false, //单位邮箱是否focus
      taxHolder: "请填写购买方纳税人识别号或统一社会信用代码",
      coPhoneHolder: "",
      coPhone: "159****6535",
      coEmailHolder: "收票人邮箱", //
      coHeadHolder: "请输入发票抬头",
      isShowModal3: false,
      isShowModal4: false,
      //
      activityDiscount: "", //活动优惠
      cardDiscount: "", //优惠券优惠
      expressFee: "", //运输费用
      selectAddressId:"",//订单地址ID
      selectAddress:'',//订单选择地址
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    },
    personalInfo() {
      return this.$store.getters.personalInfo;
    },
    fullCart() {
      if (this.$store.getters.fullCart) {
        return this.$store.getters.fullCart;
      }
      return JSON.parse(window.localStorage.getItem("_full_cart"));
    },
    totalPrice() {
      let price = 0;
      for (let item of this.fullCart) {
        price += item.product_sku.price * item.amount;
      }

      return price;
    },
    totalPay() {
      return this.totalPrice;
    }
  },
  methods: {
    userLogout() {
      FetchAPI.logout()
        .then(res => {
          if (res.status == 200) {
            localStorage.removeItem("_user_token");
            this.$router.push({ name: "user_login",params:{action: 'login'} });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    popModal() {
      this.showModal = true;
    },
    onCloseModal() {
      window.alert('close ')
      this.showModal = false;
      this.isShowModal3 = false;
      this.isShowModal4 = false;
    },
    checkPcForm() {
      this.isPcForm = true;
    },
    checkCoForm() {
      this.isPcForm = false;
    },
    //input head focus
    focusHead() {
      this.isActiveHead = true;
      this.headHolder = "";
    },
    leaveHead() {
      this.isActiveHead = false;
      this.headHolder = "请输入发票抬头";
    },
    focusPhone() {
      this.isActivePhone = true;
    },
    leavePhone() {
      this.isActivePhone = false;
    },
    focusEmail() {
      this.isActiveEmail = true;
    },
    leaveEmail() {
      this.isActiveEmail = false;
    },
    focusCoHead() {
      this.coHeadHolder = "";
      this.isActiveCoHead = true;
    },
    leaveCoHead() {
      this.coHeadHolder = "请输入发票抬头";
      this.isActiveCoHead = false;
    },
    focusTax() {
      this.isActiveTax = true;
      this.taxHolder = "";
    },
    leaveTax() {
      this.isActiveTax = false;
      this.taxHolder = "请填写购买方纳税人识别号或统一社会信用代码";
    },
    focusCoPhone() {
      this.isActiveCoPhone = true;
      this.coPhoneHolder = "";
    },
    leaveCoPhone() {
      this.isActiveCoPhone = false;
    },
    focusCoEmail() {
      this.isActiveCoEmail = true;
      this.coEmailHolder = "";
    },
    leaveCoEmail() {
      this.isActiveCoEmail = false;
      this.coEmailHolder = "收票人邮箱";
    },
    //提交发票
    handleForm() {
      this.$toast("抱歉 该功能还未实现！");
    },
    showModal3() {
      this.isShowModal3 = true;
    },
    showModal4() {
      this.isShowModal4 = true;
    },
    //保存从子组件传来的地址信息
    saveAddress(addressObj){
      this.selectAddressId = addressObj.id;
      this.selectAddress = addressObj;
    },

    //提交订单
    handleOrder() {
      if(!this.selectAddressId){
        this.$toast('请选择收货地址');
        return;
      }
     
      const data = {
        'address_id': this.selectAddressId,
        'items': this.fullCart
      }
      //根据当前订单信息提交创建订单
      FetchAPI.addOrder(data)
      .then((res)=>{
        if(res.status==200){
          //保存生成的订单到本地
          //this.$store.dispatch('saveOrder',res.data);
          // 移除本地购物车信息
          localStorage.removeItem('_full_cart');
          //跳转到支付页
          this.$router.push('/payorder/'+res.data[0].no);
        }
      })

    }
  },
  mounted(){
    if(!this.fullCart){
      this.$router.push({name:"home"});
    }
  }
};
</script>

<style lang="scss">
.check-order-page {
  .order-container{
    width: 1226px;
    padding: 40px 20px;
    background-color: #f5f5f5;
  }
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
        //display: inline-block;
        text-align: center;
        font-size: 12px;
        float: left;
        position: relative;
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
          top: 30px;

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

  .address-list-box {
    background-color: #fff;
    padding: 0 20px;

    .address-head {
      h1 {
        font-size: 18px;
        line-height: 68px;
        font-weight: 400;
        color: #333;
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
    .address-content {
      .address-box {
        margin: 0px auto;
        .address-list {
          .add-address {
            div.btn-add-box {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%, -50%, 0);
              .btn-add {
                background-color: #bbb;
                font-size: 30px;
                color: #fff;
                width: 32px;
                height: 32px;
                border-radius: 17px;
                line-height: 30px;
                text-align: center;
                margin-left: 20px;
              }
              span.add-text {
                display: block;
                padding-top: 10px;
                color: #bbb;
              }
            }
            &:hover {
              .btn-add-box {
                .btn-add {
                  background-color: #999;
                }
              }
            }
          }
          .address-item {
            width: 268px;
            height: 178px;
            position: relative;
            cursor: pointer;
            border: 1px solid #e0e0e0;
            margin-right: 17px;
            margin-bottom: 20px;
            transition: all 0.4s ease;
            -webkit-transition: all 0.4s ease;
            float: left;
           
          }
          .address-card {
            &:hover {
              .address-info {
                .btn-action {
                  display: block;
                }
              }
            }

            .address-info {
              padding: 15px 24px 0;
              .address-head {
                height: 30px;
                line-height: 30px;
                text-align: center;

                .user-name {
                  float: left;
                  font-size: 18px;
                  color: #333;
                  font-weight: 400;
                }
                .address-tag {
                  float: right;
                  font-weight: normal;
                }
              }
              p {
                font-size: 14px;
                color: #757575;
                padding: 2px 0;
              }
              .btn-action {
                position: absolute;
                right: 24px;
                bottom: 10px;
                display: none;
                .btn-delete,
                .btn-update {
                  color: #ff6700;
                }
                .btn-update {
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  .product-list-box {
    background-color: #fff;
    padding: 0 20px;
    .section-products {
      .product-title {
        .title-text {
          font-size: 18px;
          font-weight: normal;
        }
      }
      .product-list {
        margin-top: 30px;
        .list-item {
          height: 60px;
          box-sizing: border-box;
          padding: 15px 0;
          img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #424242;
          }
          span.product-name {
            width: 650px;
          }
          span.price-amount {
            width: 150px;
            text-align: center;
          }
          span.product-status {
            width: 150px;
          }
          span.count-amount {
            width: 190px;
            text-align: right;
            color: #ff6700;
          }
        }
      }
    }
    .line-seprate {
      border-color: #f0f0f0;
      border-bottom: none;
    }
    .section-express,
    .section-invoice {
      height: 60px;
      line-height: 60px;
      margin: 20px 0;
      h2 {
        font-size: 18px;
        color: #333;
        font-weight: normal;
        float: left;
        width: 150px;
      }
      p.section-content {
        float: left;
        color: #ff6700;
        width: 960px;
        a {
          color: #ff6700;
        }
      }
      span {
        margin-right: 20px;
      }
      .form-content {
        padding: 20px;
        height: 400px;
        overflow: scroll;
        .form-box {
          padding-left: 20px;
          .invoice-type {
            .type-header {
              .type-title {
                color: #424242;
                display: inline-block;
                width: 76px;
                margin-right: 0;
              }
              a {
                color: #ff6700;
                display: inline-block;
                height: 40px;
                width: 240px;
                line-height: 40px;
                text-align: center;
                border: 1px solid #ff6700;
              }
            }
            p.type-info {
              height: 30px;
              line-height: 30px;
              color: #757575;
              font-size: 12px;
              margin-left: 76px;
              text-align: left;
            }
          }
          div.invoice-head {
            .head-header {
              .head-title {
                color: #424242;
                display: inline-block;
                width: 76px;
                margin-right: 0;
              }
              a {
                display: inline-block;
                color: #757575;
                border: 1px solid #bbb;
                height: 40px;
                line-height: 40px;
                text-align: center;
                width: 240px;
              }
              a.btn-pc {
                margin-right: 14px;
              }
              a.btn-active {
                color: #ff6700;
                border-color: #ff6700;
              }
            }
            .head-form {
              .pc-form {
                .block-box {
                  margin-bottom: 14px;
                  width: 600px;
                  height: 50px;
                  position: relative;
                  span.input-left {
                    float: left;
                    margin-right: 0px;
                    width: 76px;
                    color: #424242;
                    height: 40px;
                    line-height: 40px;
                    vertical-align: middle;
                  }
                  label {
                    position: absolute;
                    width: auto;
                    height: 18px;
                    left: 92px;
                    top: -9px;
                    line-height: 18px;
                    font-size: 12px;
                    color: #bbb;
                    z-index: 2;
                    background-color: #fff;
                    display: none;
                    transition: all 0.4s linear;
                  }
                  input {
                    float: left;
                    width: 500px;
                    height: 40px;
                    box-sizing: border-box;
                    padding: 10px 16px;
                    border: 1px solid #b0b0b0;
                    font-size: 12px;
                    line-height: 18px;
                    outline: none;
                  }
                  input.input-head {
                    &:focus {
                      border-color: #ff6700;
                    }
                  }
                }
                .block-detail {
                  .input-text {
                    float: left;
                    height: 40px;
                    line-height: 40px;
                  }
                }
                .block-know {
                  .know-detail {
                    float: left;
                    font-size: 12px;
                    margin-top: 12px;
                    p {
                      font-size: 12px;
                      line-height: 20px;
                      color: #757575;
                    }
                    a {
                      color: #ff6700;
                    }
                  }
                }
                .block-btn {
                  margin-top: 100px;
                }
                .input-active {
                  label {
                    display: block;
                    color: #ff6700;
                  }
                }
              }
              .co-form {
                .block-box {
                  margin-bottom: 14px;
                  width: 600px;
                  height: 60px;
                  position: relative;
                  span.input-left {
                    float: left;
                    margin-right: 0px;
                    width: 76px;
                    color: #424242;
                    height: 40px;
                    line-height: 40px;
                    vertical-align: middle;
                  }
                  label {
                    position: absolute;
                    width: auto;
                    height: 18px;
                    left: 92px;
                    top: -9px;
                    line-height: 18px;
                    font-size: 12px;
                    color: #bbb;
                    z-index: 2;
                    background-color: #fff;
                    display: none;
                    transition: all 0.4s linear;
                  }
                  input {
                    float: left;
                    width: 500px;
                    height: 40px;
                    box-sizing: border-box;
                    padding: 10px 16px;
                    border: 1px solid #b0b0b0;
                    font-size: 12px;
                    line-height: 18px;
                    outline: none;
                    transition: all 0.4s linear;
                  }
                  input.input-head {
                    &:focus {
                      border-color: #ff6700;
                    }
                  }
                }
                .input-active {
                  label {
                    display: block;
                    color: #ff6700;
                  }
                  input {
                    border-color: #ff6700;
                  }
                }
              }
            }
          }
        }
      }
      .footer-btn {
        .btn-box {
          height: 40px;
          margin: 10px auto;
          width: 335px;
          .btn-submit {
            display: block;
            width: 160px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            background-color: #ff6700;
            float: left;
          }
          .btn-leave {
            display: block;
            float: left;
            width: 160px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            background-color: #b0b0b0;
            text-align: center;
            margin-left: 14px;
            &:hover {
              background-color: #757575;
            }
          }
        }
      }
    }

    .section-footer {
      background-color: #fff;
      margin: 0 48px;
      padding: 20px 0;
      .discount-left {
        float: left;
        a {
          display: block;
          width: 180px;
          height: 50px;
          line-height: 50px;
          text-align: left;
          color: #757575;
          font-size: 14px;
          &:hover {
            color: #ff6700;
          }
          i.iconplus {
            color: #fff;
            background-color: #ff6700;
            border-radius: 50%;
            font-size: 12px;
            width: 22px;
            height: 22px;
            padding: 5px;
            margin-right: 0px;
          }
        }
      }
      .order-detail-right {
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
      }
    }
  }
  .check-footer {
    background-color: #fff;
    border-top: 2px solid #f5f5f5;
    padding: 0 48px;
    .check-address {
      float: left;
      height: 80px;
      padding: 20px 0;
      box-sizing: border-box;
      
      .address-content {
        a {
          color: #ff6700;
        }
      }
    }
    .check-btn-box {
      float: right;
      height: 40px;
      box-sizing: border-box;
      padding: 20px 0;
      .btn-back-cart {
        display: block;
        float: left;
        width: 160px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #bbb;
        color: #bbb;
        cursor: pointer;
        margin-right: 30px;
      }
      .btn-handle-order {
        float: left;
        width: 160px;
        height: 40px;
        color: #fff;
        background-color: #ff6700;
        border: 1px solid #ff6700;
        cursor: pointer;
      }
    }
  }

  .fade-modal-enter-active {
    animation: fade-modal-animation 0.4s;
  }
  .fade-modal-leave-active {
    animation: fade-modal-animation 0.4s reverse;
  }
  @keyframes fade-modal-animation {
    0% {
      opacity: 0;
      transform: translateY(-10px);
      //transform: scale(0);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
      //transform: scale(1);
    }
  }
}
</style>