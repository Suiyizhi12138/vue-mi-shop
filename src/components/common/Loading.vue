<template>
  <div class="loading-container" :class="['loading-'+containerSize]">
    <div class="loading-box clearfix">
      <!-- <img src="@/assets/images/loading2.gif" alt="loading"> -->
      <div class="gif-box clearfix">
        <div class="bar bar-first"></div>
        <div class="bar bar-second"></div>
        <div class="bar bar-third"></div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    containerSize: String
  }
};
</script>

<style lang="scss" scoped>
.loading-container {
  width: 100%;
  height: 100%;
  .loading-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .gif-box {
      width: 40px;
      height: 20px;
      margin: auto;
      .bar{
         animation: flash .5s infinite ease-in-out;
      }
      .bar-first {
        width: 5px;
        height: 14px;
        display: inline-block;
        margin-bottom: 3px;
        background-color: #ff6700;
        margin-right: 8px;
        opacity: .8;
        animation-delay: -0.9s;
        
      }
      .bar-second {
        width: 6px;
        height: 20px;
        display: inline-block;
        background-color: #ff6700;
        margin-right: 8px;
        animation-delay: -0.8s;
        
      }
      .bar-third {
        width: 5px;
        height: 14px;
        margin-bottom: 3px;
        display: inline-block;
        background-color: #ff6700;
        opacity: .8;
        animation-delay: -0.7s;
      }
      
    }
  }
  @keyframes flash{
    0%{
      transform: scaleY(50%);
      opacity: .2;
    }
    100%{
      transform: scaleY(100%);
      opacity: 1;
    }
  }
}
.loading-huge{
  width: 1226px;
  height: 400px;
}
.loading-middle{
  width: 800px;
  height: 360px;
}
.loading-min{
  width: auto;
  height: auto;
}
</style>