<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(image,index) in images" :key="index"><img :src="image" alt=""></div>
      
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination" v-show="imgLen"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev" v-show="imgLen"></div>
    <div class="swiper-button-next" v-show="imgLen"></div>

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from 'swiper/js/swiper.min.js';

export default {
  props:{
    images: {
      type: Array,
      required: true
    }
  },
  data(){
    return{
     
    }
  },
  mounted(){
      new Swiper(".swiper-container", {
      // Optional parameters
      //direction: 'vertical',
      loop: false,
      autoplay: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: 'fade'//切换效果
      // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar"
      // }
    });

   

    
    
  },
  wtach:{
    
  },
  computed:{
   imgLen(){
     return this.images.length > 1;
   }
  },
 
};
</script>


<style lang="scss">
.swiper-container {
  width: 560px;
  height: 560px;
  .swiper-slide{
    width: 560px;
    img{
      width: 560px;
      height: 560px;
    }
  }
  --swiper-navigation-size: 30px;/* 设置按钮大小 */
  
  .swiper-button-prev,.swiper-button-next{
    width: 41px;
    height: 69px;
    color: #ccc;
    &:hover{
      color: #fff;
      background-color: #666;
    }
    
  }
  .swiper-button-prev{
    left: 0;
  }
  .swiper-button-next{
    right: 0;
  }
  
  .swiper-pagination{
    .swiper-pagination-bullet{
      width: 50px;
      height: 3px;
      background-color: #ccc;
      border-radius: 0;

    }
    .swiper-pagination-bullet-active{
      background-color: rgba(0,0,0,.4);
    }
  }
}
</style>