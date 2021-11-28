<template>
  <div class="user-orderlist-page">
    <!-- 用户礼品页 -->
    <div class="order-list-box">
      <div class="order-head">
        <h1>小米礼品卡</h1>
      </div>
      <div class="order-nav clearfix">
        <div class="nav-left">
          <ul class="nav-list">
            <li class="nav-item nav-first">
              <a href="javascript:" class="active">绑定礼品卡</a>
            </li>
            <li class="nav-item">
              <a href="javascript:">我的礼品卡</a>
            </li>
            <li class="nav-item nav-last">
              <a href="javascript:">常见问题</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="clear-line" />
      <div class="order-content">
        <div class="order-box clearfix">
          <div class="order-list" v-if="orderAmount>0">
            <form action="post" class="card-form">
              <div class="form-section">
                <label for="presentword">密码：</label>
                <input type="password" name="presentword" id="presentword" placeholder="请填写礼品卡密码" />
              </div>
              <div class="form-section">
                <label for="verifycode">验证码：</label>
                <input type="text" name="verifycode" id="verifycode" placeholder="请输入验证码" />
              </div>
              <div class="form-section">
                <input type="button" value="绑定礼品卡" @click="alertMsg" />
              </div>
            </form>
          </div>
          <div class="order-none" v-else>
            <h2 class="order-none-text">您没有可以显示的信息</h2>
          </div>
        </div>
      </div>
      <hr class="clear-line" />
      <div class="allow-tips clearfix">
        <div class="tips-box">
          <h2 class="tips-title">礼品卡使用前需先绑定，确认已设置安全手机</h2>
          <p>无论是电子礼品卡还是实物礼品卡，在绑定时只需要输入礼品卡密码，点击确认即可绑定。</p>
          <p>礼品卡在使用之前，需要与小米ID绑定，每个礼品卡密码只可绑定一次，绑定后不可解绑，礼品卡内金额无需一次用完，您可以在有效期内不限次数重复使用。</p>
          <p>礼品卡在绑定之前，请确认您的小米ID已经设置了安全手机，为保证您的资金安全，在使用礼品卡消费时，需要向您的安全手机发送验证码，验证通过以后才可以使用。</p>
          <h2 class="tips-title">下单时选择礼品卡即可抵扣，暂不支持抵扣物流费</h2>
          <p>您可以像以前一样在小米网选购商品，在订单结算时，填写完地址、电话等信息后，在页面的下方点击使用礼品卡，勾选您希望用来支付的礼品卡，提交订单并支付余款就可完成交易。</p>
          <p>目前礼品卡暂不支持用来支付邮费，如果您的订单满150元（大家电除外），那么您可以使用礼品卡支付整单金额。如果您的订单未满150元，除了使用礼品卡抵扣商品金额以外，还需要通过在线支付的方式支付10元邮费。如果您所购买的是大家电，礼品卡只能用于抵扣商品金额，物流费用需要通过在线支付的方式进行支付。</p>
          <h2 class="tips-title">礼品卡的使用范围是什么？</h2>
          <p>礼品卡可用于购买实物商品，暂不支持抵扣邮费、意外保、充话费、小米移动电话卡等。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderAmount: 1
    };
  },
  methods: {
    alertMsg() {
      window.alert("抱歉，功能正在完善中");
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
  hr.clear-line {
    border-bottom: 1px solid #bbb;
    border-top: 0;
  }
  .order-content {
    .order-box {
      margin: 40px auto;
      .order-none {
        line-height: 60px;
        text-align: center;
        .order-none-text {
          font-size: 18px;
          color: #bbb;
          font-weight: 400;
        }
      }
      .order-list {
        .card-form {
          .form-section {
            padding: 10px 0;
            label {
              font-size: 14px;
              
            }
            input[type="text"],
            input[type="password"] {
              width: 200px;
              height: 40px;
              outline: 0;
            }
            input[type="button"]{
              width: 120px;
              height: 40px;
              background-color: #f25807;
              border: none;
              color: #fff;
              margin-left: 80px;
            }
            input[type="password"]{
              margin-left: 12px;
            }
          }
        }
      }
    }
  }
  .allow-tips {
    margin: 20px 0;
    .tips-box {
      h2 {
        font-size: 16px;
        font-weight: 500;
        color: #333;
        margin: 16px 0;
      }
      p {
        font-size: 12px;
        padding: 6px 0;
        color: #757575;
      }
    }
  }
}
</style>