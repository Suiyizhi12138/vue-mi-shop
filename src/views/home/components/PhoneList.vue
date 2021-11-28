<template>
   <div class="product-list">
     <ul class="phone-list">
       <li class="phone-item product-item" v-for="phone in phones" :key="phone.id">
         <router-link :to="'/product/'+phone.id">
           <div class="phone-img">
             <img :src="phone.image_url" alt="">
           </div>
           <p class="phone-name">{{phone.zh_name}}</p>
           <p class="phone-description">{{phone.description.slice(0,15)}}</p>
           <p class="phone-price">{{parseInt(phone.price)}}元起</p>
         </router-link>
       </li>
     </ul>
   </div>
</template>

<script>
export default{
  props:['phones']
};
</script>

<style lang="scss">
.product-list{
  .phone-list{
    .phone-item{
      float: left;
      width: 234px;
      height: 260px; 
      padding: 20px 0px;
      overflow: hidden;
      margin-left: 14px;
      background-color: #fff;
      margin-bottom: 14px; 
      .phone-img{
        width: 160px;
        height: 160px;
        margin: 0 auto 18px;
        img{
          width: 160px;
          max-height: 160px;
        }
      }
      .phone-name{
        font-size: 14px;
        color: #333;
        line-height: 18px;
        text-align: center;
        margin: 0 10px;

      }
      .phone-description{
        height: 18px;
        font-size: 12px;
        text-align: center;
        color: #b0b0b0;
        text-overflow: ellipsis;
        word-wrap: break-word;
        margin: 5px 0;

      }
      .phone-price{
        text-align: center;
        color: #ff6700;
      }

    }
  }
}
</style>