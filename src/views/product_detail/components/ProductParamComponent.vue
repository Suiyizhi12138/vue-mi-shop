<template>
  <div class="product-param">
    <div class="section clearfix" v-for="img in imgUrls" :key="img.id">
      <div class="img-box clearfix">
        <img :src="img.image_url" alt />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:['imgUrls']
  
};
</script>

<style lang="scss">
  .product-param{
    width: 100%;
    height: auto;
    border-top: 1px solid #ccc;
    img{
      width: 100%;
      display: block;
    }
  }
</style>