<template>
  <div class="fix-nav">
    <!-- 右侧固定导航栏 -->
    <ul class="btn-list">
      <!-- 二维码 -->
      <li class="btn-item btn-qrcode">
        <a>
          <img class="img-1" src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png" alt />
          <img
            class="img-2"
            src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"
            alt
          />
          <p class="btn-label">手机App</p>
        </a>
        <div class="hide-qrcode">
          <img class="img-qrcode" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78c30d4f259ed43ab20e810a522a6249.png" alt="二维码">
          <p class="qrcode-text">扫码领取新人百元红包</p>
        </div>
      </li>
      <li class="btn-item">
        <router-link to="/user/userinfo">
          <img class="img-1" src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png" alt />
          <img
            class="img-2"
            src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png"
            alt
          />
          <p class="btn-label">个人中心</p>
        </router-link>
        <div class="hide-info">
          个人中心
        </div>
        <div class="triangle-right"></div>
      </li>
      <li class="btn-item">
        <router-link to>
          <img class="img-1"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png"
            alt
          />
          <img
            class="img-2"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png"
            alt
          />
          <p class="btn-label">售后服务</p>
          
        </router-link>
        <div class="hide-info">售后服务</div>
        <div class="triangle-right"></div>
      </li>
      <li class="btn-item">
        <router-link to>
          <img class="img-1" src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png" alt />
          <img
            class="img-2"
            src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png"
            alt
          />
          <p class="btn-label">人工客服</p>
        </router-link>
        <div class="hide-info">人工客服</div>
        <div class="triangle-right"></div>
      </li>
      <li class="btn-item">
        <router-link to>
          <img class="img-1" src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png" alt />
          <img
            class="img-2"
            src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png"
            alt
          />
          <p class="btn-label">购物车</p>
        </router-link>
        <div class="hide-info cart-info">
          购物车
        </div>
        <div class="triangle-right cart-triangle-right"></div>
      </li>

      <li class="btn-item" v-show="isShowBackTop" @click="handleBackTop">
        <router-link to>
          <img  class="img-1" src="https://i1.mifile.cn/f/i/2018/home/totop.png" alt />
          <img class="img-2"  src="https://i1.mifile.cn/f/i/2018/home/totop_hover.png" alt />
          <p class="btn-label">回顶部</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    showBackTop() {
      if (
        (document.body.scrollTop || document.documentElement.scrollTop) > 700
      ) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },
    handleBackTop() {
      console.log("back top");
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.showBackTop();
    });
  }
};
</script>

<style lang="scss">
.fix-nav {
  position: fixed;
  right: 0px;
  bottom: 70px;
  z-index: 99;
}
.btn-list {
  & > :nth-child(6) {
    margin-top: 16px;
  }
  .btn-item {
    position: relative;
    width: 64px;
    height: 72px;
    background-color: #fff;
    border-top: 1px solid #f5f5f5;

    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
    cursor: pointer;
    &:hover {
      p {
        color: #ff6700;
      }
      .img-2 {
        display: block;
      }
    }

    .img-1,
    .img-2 {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 23px;
      top: 15px;
    }
    .img-2 {
      display: none;
    }
    p {
      width: 64px;
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      color: #757575;
      text-align: center;
      top: 48px;
      font-size: 12px;
    }

    .hide-info,.triangle-right{
      display: none;
    }
  }
  .btn-qrcode{
    &:hover{
      .hide-qrcode{
        display: block;
      }
    }
    .hide-qrcode{
      display: none;
      width: 100px;
      height: 162px;
      padding: 14px 14px;
      position: absolute;
      left: -140px;
      border: 1px solid #ff6700;
      background-color: #fff;
      img{
        width: 100px;
        height: 100px;
      }
      p.qrcode-text{
        color: #333;
        top: 130px;
        font-size: 14px;
      }
    }
  }
}
// 屏幕宽度小于1200修改
@media screen and (max-width: 1280px) {
  .btn-list {
    & > :nth-child(6) {
      margin-top: 16px;
    }
    .btn-item {
      width: 20px;
      height: 30px;
      padding-top: 10px;
      border-top: 1px solid #f5f5f5;
      .img-1,.img-2 {
        width: 20px;
        height: 20px;
        left: 0px;
        top: 10px;
      }

      p.btn-label {
        display: none;
      }
      &:hover{
        .hide-info{
          display: block;
        }
        .triangle-right{
          display: block;
        }
      }

      .hide-info{
        position: absolute;
        left: -75px;
        background-color: #fff;
        z-index: 110;
        color: #757575;
        padding: 4px;
        display: none;
      }
      div.cart-info{
        left: -61px;
      }
      
      .triangle-right{
        width: 0px;
        height: 0px;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-left: 8px solid #fff;
        position: absolute;
        left: -11px;
        top: 20px;
        z-index: 110;
        display: none;
      }
    }
  }
}
</style>