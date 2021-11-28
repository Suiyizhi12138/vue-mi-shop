<template>
  
  <div class="modal-container clearfix">
    <div class="modal-background" :style="{width:bodyWidth+'px',height:bodyHeight+'px'}"></div>
    <div class="modal-pop" :style="{width:modalWidth+'px',height:modalHeight+'px'}">
      <div class="modal-head">
        <h3 class="modal-title">{{modalTitle}}</h3>
        <div class="close-btn" @click="$emit('closeModal')">
          <i class="iconfont iconclose"></i>
        </div>
      </div>
      
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
   
    };
  },
  props: {
    modalWidth: Number,
    modalHeight: Number,
    modalTitle: String,
   
  },
  computed:{
    bodyWidth(){
      return document.documentElement.clientWidth;
    },
    bodyHeight(){
      return window.document.documentElement.clientHeight;
    }
  },

  methods: {
    
  },
 
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .modal-background {
    width: 999px;
    height: 999px;
    left: 0;
    top: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
  }
  .modal-pop {
    width: 600px;
    height: 400px;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    
    z-index: 99;
    background-color: #fff;
    .modal-head {
      width: 100%;
      height: 60px;
      background-color: #f5f5f5;
      text-align: center;
      line-height: 58px;
      .modal-title {
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
    .modal-content {
      border: none;
      border-radius: 4px;
      background-color: #fff;
    }
  }
} 
</style>