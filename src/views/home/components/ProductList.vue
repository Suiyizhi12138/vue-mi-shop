<template>
  <ul class="home-product-list">
    <li class="product-item" v-for="product in products" :key="product.id">
      <router-link :to="'/product/'+product.id" target="_blank">
      <div class="image-box">
        <img :src="product.image_url" alt />
      </div>
      
      <h3 class="product-name">{{product.zh_name}}</h3>
      <p class="product-description">{{product.description}}</p>
      <p class="product-price">
        <span class="discount-price">{{product.price-product.discount}}元</span>
        <del class="price" v-if="product.discount>0">{{parseInt(product.price)}}元</del>
      </p>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  props: ['products']
};
</script>

<style lang="scss">
.home-product-list {
  position: absolute;
  top: 60px;
  left: 234px;
  
  .product-item {
    width: 234px;
    height: 260px;
    padding: 20px 0;
    margin-left: 14px;
    margin-bottom: 14px;
    float: left;
    background-color: #fff;

    -webkit-transition: all .2s linear; 
    transition: all .2s linear;
    &:hover{
      z-index: 2;
      box-shadow: 0px 15px 30px rgba(0,0,0,.1);
      -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1); 
      transform: translate3d(0,-2px,0);
      -webkit-transform: translate3d(0,-2px,0);
    }
    .image-box{
      width: 232px;
      height: 160px;
    }
    img {
      display: block;
      margin: 0 auto 40px;
      max-height: 160px;
      width: 160px;
     
    }
    .product-name{
      margin: 0 10px 2px;
      line-height: 18px;
      color: #333;
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .product-description{
      font-size: 12px;
      margin: 0 10px 10px;
      text-align: center;
      line-height: 18px;
      color: #b0b0b0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .product-price{
      font-size: 14px;
        text-align: center;
        line-height: 18px;
      .price{
        text-decoration: line-through;
        color: #b0b0b0;
        margin-left: .5em;
      }
      .discount-price{
        color: #ff6700;
        text-decoration: none;
        
      }
    }
  }
  
}
</style>