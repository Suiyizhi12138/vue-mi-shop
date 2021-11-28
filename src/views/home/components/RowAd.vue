<template>
  
  <div class="row-ad clearfix">
    <!-- 横版图片广告 -->
    <router-link :to="adUrl"><img :src="imageUrl" alt=""></router-link>
  </div>
</template>

<script>
export default {
  props:['imageUrl','adUrl']

}
</script>

<style lang="scss">
  .row-ad{
    margin: 22px 0;
    height: 120px;
    overflow: hidden;
    width: 1226px;
    img{
      width: 1226px;
      height: 120px;
    }
  }
</style>