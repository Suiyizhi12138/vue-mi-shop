<template>
    <transition :name="mergedOption.transition">
      <div
        :id="mergedOption.id"
        class="pop-container"
        :class="clazz"
        :transition="mergedOption.transition"
        v-show="showing"
      >
        <div class="pop-background"></div>
        <div class="pop-content" :class="mergedOption.verticalPosition">
          <div class="pop-head">
            <h3 class="pop-title">{{mergedOption.title}}</h3>
            <div class="close-btn" @click="close()">
              <i class="iconfont iconclose"></i>
            </div>
          </div>
          <div class="pop-body">
            <h2 class="msg-title">{{mergedOption.message}}</h2>
            
            <div class="btn-group">
              <a class="btn-sure" @click="close()">确定</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>
<style lang="scss" scoped>
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
    height: 262px;
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
        width: 180px;
        height: 40px;
        margin: 0 auto;
      }
      .btn-sure
       {
        margin-top: 20px;
        width: 180px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
         border: none;
         display: inline-block;
      }
      a.btn-sure {
        background-color: #ff6700;
        
          color: #fff;
          &:hover{
            color: #fff;
          }
       
      }
      
    }
  }
  .pop-center{
    top: 50%;
  }
  .pop-top{
    top: 25%;
  }
  .pop-bttom{
    top: 75%;
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
.fade-enter-active,
.fade-leave-active,
.fade-transition {
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave,
.fade-leave-active {
  opacity: 0;
}
.slide-down-enter-active,
.slide-down-leave-active,
.slide-down-transition {
  -webkit-transition: opacity 0.3s ease, top 0.3s ease-in;
  transition: opacity 0.3s ease, top 0.3s ease-in;
}
.slide-down-leave-active,
.slide-down-enter,
.slide-down-leave {
  opacity: 0;
  top: -10% !important;
}
.slide-up-enter-active,
.slide-up-leave-active,
.slide-up-transition {
  -webkit-transition: opacity 0.3s ease, top 0.3s ease-in;
  transition: opacity 0.3s ease, top 0.3s ease-in;
}
.slide-up-leave-active,
.slide-up-enter,
.slide-up-leave {
  opacity: 0;
  top: 110% !important;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-left-transition {
  -webkit-transition: opacity 0.3s ease, left 0.3s ease-in;
  transition: opacity 0.3s ease, left 0.3s ease-in;
}
.slide-left-leave-active,
.slide-left-enter,
.slide-left-leave {
  opacity: 0;
  left: 110% !important;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-right-transition {
  -webkit-transition: opacity 0.3s ease, left 0.3s ease;
  transition: opacity 0.3s ease, left 0.3s ease;
}
.slide-right-leave-active,
.slide-right-enter,
.slide-right-leave {
  opacity: 0;
  left: -1000px !important;
}
</style>
<script>
const DEFAULT_OPT = {
  id: "easy-toast-default", //
  className: "", //class name
  horizontalPosition: "center", //水平方向 horizontalPosition
  verticalPosition: "center", //垂直方向 verticalPosition
  parent: "body", //父组件 fater element
  transition: "fade-pop", //transition style
  duration: 5000, // transition duration 动画关闭时长
  message: "", // toast message
  title: '',//toast title
  closeable: true, // clsoeable
  
};
export default {
  DEFAULT_OPT: DEFAULT_OPT,
  data() {
    return {
      queue: [],
      option: {},
      showing: false,
    };
  },
  computed: {
    mergedOption: function() {
      return Object.assign({}, DEFAULT_OPT, this.option);
    },
    clazz: function() {
      let clazz = [];
      let className = this.option.className;
      let horizontalPosition = this.mergedOption.horizontalPosition;
      let verticalPosition = this.mergedOption.verticalPosition;
      let closeable = this.mergedOption.closeable;

      if (className) {
        if (typeof className === "string") {
          clazz.push(className);
        }
        if (Array.isArray(className)) {
          clazz = clazz.concat(className);
        }
      }
      if (horizontalPosition) {
        clazz.push(`et-${horizontalPosition}`);
      }
      if (closeable) {
        clazz.push("et-closeable");
      }
      if (verticalPosition) {
        clazz.push(`et-${verticalPosition}`);
      }
      return clazz.join(" ");
    }
  },
  methods: {
    close: function() {
      this.showing = false;
      this.queue.shift();
    }
  },
  watch: {
    queue: function() {
      let pending = this.queue.length;
      if (pending === 0) {
        return;
      }
      this.showing = true;
      this.option = this.queue[0];

      if (
        (!this.option.mode || this.option.mode === "override") &&
        pending > 1
      ) {
        clearTimeout(this.timeoutId);
        this.showing = false;
        this.timeoutId = null;
        this.timeoutId = setTimeout(() => this.queue.shift());
      } else {
        this.timeoutId = setTimeout(() => {
          this.showing = false;
          this.timeoutId = null;
          setTimeout(() => this.queue.shift());
        }, this.mergedOption.duration);
      }
    }
  }
};
</script>
