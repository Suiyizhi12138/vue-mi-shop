<template>
  <transition name="fade-pop">
    <div class="pop-container" v-if="isSuccessPop">
      <div class="pop-background"></div>
      <div class="pop-content">
        <div class="pop-head">
          <h3 class="pop-title">{{popTitle}}</h3>
          <div class="close-btn" @click="$emit('closePop')">
            <i class="iconfont iconclose"></i>
          </div>
        </div>
        <div class="pop-body">
          <h2 class="msg-title">加入购物车成功</h2>
          <p class="msg-content">{{productName}}</p>
          <div class="btn-group">
            <a href="javascript:" class="btn-go" @click="goCart()">前往购物车结算</a>
            <button class="btn-back" @click="$emit('closePop')">返回</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["popTitle", "productName", "isSuccessPop"],
  data() {
    return {};
  },
  methods: {
    goCart(){
      window.location.href = 'http://localhost:8080/cart';
    }
  }
};
</script>

<style lang="scss">
.pop-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 99;

  .pop-background {
    width: 100%;
    height: 100%;
    z-index: 90;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .pop-content {
    width: 880px;
    height: 260px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    .pop-head {
      width: 880px;
      height: 60px;
      background-color: #f5f5f5;
      text-align: center;
      line-height: 58px;
      .pop-title {
        float: left;
        margin-left: 20px;
        font-size: 18px;
        font-weight: 400;
      }
      .close-btn {
        margin-top: 14px;
        margin-right: 20px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
        line-height: 32px;
        text-align: center;

        color: #757575;
        .iconclose {
          font-size: 24px;
          font-weight: 500;
        }
        &:hover {
          background-color: rgb(238, 34, 51);
          color: #fff;
        }
      }
    }
    .pop-body {
      width: 880px;
      height: 200px;
      background-color: #fff;

      .msg-title {
        font-size: 24px;
        color: #424242;
        font-weight: 400;
        line-height: 60px;
        text-align: center;
      }
      .msg-content {
        color: #999;
        line-height: 20px;
        text-align: center;
      }
      .btn-group{
        width: 380px;
        height: 40px;
        margin: 0 auto;
      }
      .btn-go,
      .btn-back {
        margin-top: 20px;
        width: 180px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
         border: none;
         display: inline-block;
      }
      a.btn-go {
        background-color: #ff6700;
        
          color: #fff;
          &:hover{
            color: #fff;
          }
       
      }
      .btn-back{
        margin-left: 20px;
      }
    }
  }
}
.fade-pop-enter-active {
  animation: fade-pop-animation 0.5s;
}
.fade-pop-leave-active {
  animation: fade-pop-animation 0.5s reverse;
}
@keyframes fade-pop-animation {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>