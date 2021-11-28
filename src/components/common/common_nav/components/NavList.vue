<template>
  <div class="nav-product-list-container clearfix">
    <!-- 下拉导航列表 -->
    <ul class="nav-product-list">
      <li class="nav-product-item" v-for="product in products" :key="product.id">
        <a :href="'/product/'+product.id" target="_blank">
          <div class="nav-product-item-img">
            <img :src="product.image_url" alt="图片加载失败" />
          </div>
          <p>{{product.zh_name}}</p>
          <span>{{parseInt(product.price)}}元起</span>
        </a>
      </li>
      <li class="nav-product-item" v-if="isHardWare">
        <router-link to="/">
          <div class="nav-product-item-img">
            <img style="width:auto; height:110px;" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12cdacc6e4f343861d31345036cc3b46.png?thumb=1&w=192&h=132&f=webp&q=90" alt="图片加载失败" />
          </div>
          <p>查看全部</p>
          <span style="color: #333">智能硬件</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  props:['products','isHardWare']
};
</script>

<style lang="scss">
@import '@/assets/app.scss';
.nav-product-list-container {
  
  z-index: 100;
  position: absolute;
  min-width: 1226px;
  height: 0px;
  top: 100px;
  left: 0px;
  background-color: #fff;
  transition: all 0.2s linear;
  -webkit-transition: height 0.5s ease;
  overflow: hidden;
  .nav-product-list {
    margin-left: 32px;
    min-width: 1226px;
    height: 240px;
    top: 100px;

    .nav-product-item {
      width: 200px;
      float: left;
      .nav-product-item-img {
        margin-top: 33px;
        width: 200px;
        box-sizing: border-box;
      }
      img {
        position: relative;
        left: 50%;
        
        transform: translateX(-50%) ;
        width: auto;
        height: 110px;
        margin-bottom: 16px;
      }
      p {
        color: #333;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
      }
      span {
        color: $global-orange;
        font-size: 12px;
        line-height: 20px;
      
        text-align: center;
        display: block;
      }
    }
  }
}
</style>