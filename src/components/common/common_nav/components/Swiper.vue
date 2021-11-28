<template>
  <div class="swiper">
    <!-- 轮播图组件 -->
    
   <ul class="swiper-list">
     
      <li class="swiper-item" :style="{display:isShow1?'block':'none'}" :key=1>
        <a href="">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2082a18632ef1f7aa06d90b39a8c06b.jpg?w=2452&h=920" alt="">
        </a>
      </li>
     
      <li class="swiper-item" :style="{display:isShow2?'block':'none'}" :key=2>
        <a href="">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fae8cbea12505f89b350c48d407441a.jpg?thumb=1&w=1839&h=690&f=webp&q=90" alt="">
        </a>
      </li>
     
      <li class="swiper-item" :style="{display:isShow3?'block':'none'}" :key=3 >
        <a href="">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=1839&h=690&f=webp&q=90" alt="">
        </a>
      </li>
     
      <li class="swiper-item" :style="{display:isShow4?'block':'none'}" :key=4>
        <a href="">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c568030fd3637ac46f753a46bc244c9f.jpg?thumb=1&w=1839&h=690&f=webp&q=90" alt="">
        </a>
      </li>
     
      
      
      
    </ul>
    <div class="swiper-arrow">
      <div class="arrow-left" @click="preSwiper">
      
      </div>
      <div class="arrow-right" @click="nextSwiper">
        
      </div>
    </div>
    <ul class="swiper-btns">
      <li class="swiper-btn" :style="{backgroundColor:isActive1?'rgba(256,256,256,.5)':''}"  @click="swiperChange(1)"></li>
      <li class="swiper-btn" :style="{backgroundColor:isActive2?'rgba(256,256,256,.5)':''}" @click="swiperChange(2)"></li>
      <li class="swiper-btn"  :style="{backgroundColor:isActive3?'rgba(256,256,256,.5)':''}" @click="swiperChange(3)"></li>
      <li class="swiper-btn" :style="{backgroundColor:isActive4?'rgba(256,256,256,.5)':''}" @click="swiperChange(4)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow1: false,
      isShow2: true,
      isShow3: false,
      isShow4: false,
      isActive1: false,
      isActive2: true,
      isActive3: false,
      isActive4: false,
      currentIndex: 2
    }
  },
  mounted(){
    this.autoSwiper();
  },
  methods:{
    autoSwiper(){
      //console.log('auto paly');
      setInterval(() => {
        this.nextSwiper();
      }, 4000);
    },
    preSwiper(){
      this.currentIndex -=1;
      let that= this;
      if(this.currentIndex<1){
        that.currentIndex = 4;
      }
      this.fadeChange(this.currentIndex);
      
      

    },
    nextSwiper(){
      this.currentIndex+=1;
      if(this.currentIndex>4){
        this.currentIndex = 1;
      }
      
      this.fadeChange(this.currentIndex);

    },
    swiperChange(index){
       this.fadeChange(index);
        this.currentIndex = index;
        
     
    },
    clear(){
      this.isShow1 = false;
      this.isShow2 = false;
      this.isShow3 = false;
      this.isShow4 = false;
      this.isActive1= false;
      this.isActive2= false;
      this.isActive3 = false;
      this.isActive4 = false
    },
    fadeChange(index){
       this.clear();
       let itemShow = 'isShow'+index;
       let itemActive = 'isActive'+index;
      this[itemShow] = true;
      this[itemActive] = true;
    }
    


  }
 

}
</script>

<style lang="scss">

@keyframes fade{
  from{opacity: 0};
  to{opacity: 1};
}
  .swiper{
    position: relative;
    top: -600px;
    .swiper-list{
     
      
      .swiper-item{
        position: absolute;
        top: 140px;
        display: none;
        animation: fade .5s;
        img{
          width: 1226px;
          height: 460px;
        };
      }
      
    }
    .swiper-btns{
      position: absolute;
      width: 120px;
      height: 20px;
      top: 560px;
      right: 0px; 
      z-index: 9;
       .active{
          background-color: rgba(0,0,0,.4);
        }
      .swiper-btn{
        float: left;
        margin-left: 10px;
        width: 6px;
        height: 6px;
        border-radius: 10px;
        border: 2px solid rgba(100,100,100,.6);
        cursor: pointer;
        background-color: rgba(50,50,50,.4);
        &:hover{
          background-color: rgba(256,256,256,.4);
        }
      }
    }
    .swiper-arrow{
      .arrow-left{
        width: 41px;
        height: 69px;
         position: absolute;
         top: 335px;
         left: 234px; 
        z-index: 1;
        cursor: pointer;
       &:hover{
         background-color: #333;
       }
      
        background: url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -84px 50%;
      }
      .arrow-right{
        width: 41px;
        height: 69px;
        position: absolute;
        top: 335px;
        right: 0px;
        z-index: 1;
        cursor: pointer;
       &:hover{
         background-color: #333;
       }
       background: url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -125px 50%;
      }
      
    }
  }
</style>