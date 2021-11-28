<template>
  <ul class="menu-product-list">
    <!-- 作废 -->
    <li class="menu-product-item" v-for="product in products" :key="product.id">
      <a :href="'/product/'+product.id">
        <img :src="product.image_url" alt />
        <span>{{product.zh_name?product.zh_name:product.name}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["products"]
};
</script>

<style lang="scss">
.menu-product-list {
  margin-top: 20px;
  .menu-product-item {
    width: 248px;
    height: 76px;
    float: left;
    padding-left: 20px;
    box-sizing: border-box;
    img {
      float: left;
      width: 40px;
      height: 40px;
      margin-right: 12px;
      vertical-align: middle;
    }
    span {
      float: left;
      width: 172px;
      font-size: 14px;
      color: #333;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      &:hover {
        color: #ff6700;
      }
    }
  }
}
</style>