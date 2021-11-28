<template>
  <div class="video-pop">
    <!-- 视频播放器弹窗组件h5版 -->
    <div class="video-head">
      <h3 class="video-title">{{videoTitle}}</h3>
      <div class="close-btn" @click="$emit('closeVideo')">
        <i class="iconfont iconclose"></i>
      </div>
    </div>
    <video class="video-content" width="880" height="495" :src="videoUrl" controls autoplay></video>
  </div>
</template>
<script>
export default {
  props:['videoUrl','videoTitle']
}
</script>

<style lang="scss">
.video-pop{
  width: 880px;
  height: 555px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  .video-head{
    width: 880px;
     height: 60px;
     background-color:#f5f5f5;
     text-align: center;
     line-height: 58px;
    .video-title{
      float: left;
      margin-left: 20px;
      font-size: 18px;
      font-weight: 400;

    }
    .close-btn{
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
      .iconclose{
        font-size: 24px;
        font-weight: 500;
      }
      &:hover{
        background-color: rgb(238, 34, 51);
        color: #fff;
      }

    }
  }
  .video-content{
    border: none;
    border-radius: unset;

  }
}

</style>