<template>
  <div class="product-detail">
    <section class="section" v-for="img in imgUrls" :key="img.id">
      <div class="img-box">
        <img
          :src="img.image_url"
          alt
        />
      </div>
    </section>
    
  </div>
</template>

<script>

export default {
  
  props:['imgUrls'],
}
</script>

<style lang="scss">
.product-detail {
  width: 100%;
  height: auto;
  background-color: #000;
  overflow: hidden;
  .section{
    margin: 0 auto;
    img{
      width: 100%;
      display: block;
    }
  }
}
</style>