<template>
  <ul class="product-list">
    <li class="product-item" v-for="product in products" :key="product.id">
      <router-link :to="'/product/'+product.id">
      <img :src="product.image_url" alt />
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
  props: ["products"]
};
</script>

<style lang="scss" >
.product-list {
 
  .product-item {
    width: 234px;
    height: 260px;
    padding: 20px 0;
    margin-left: 14px;
    margin-bottom: 14px;
    background-color: #fff;
    float: left;
    img {
      display: block;
      margin: 0 auto 18px;
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