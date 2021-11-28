<template>
  <div class="flash-slide">
    
    <div class="slide-btns">
      <span class="slide-btn-left" @click="slideLeft">&lt;</span>
      <span class="slide-btn-right" @click="slideRight">&gt;</span>
    </div>
    <!-- 秒杀轮播图组件 -->
    <div class="slide-container">
      <ul class="slide-list" style="left:0px">
        
        <li class="slide-item" v-for="(product,index) in flashProducts" :key="index" :style="{borderTop: '1px solid ' + topColors[Math.floor(Math.random()*4)] }">
          <a href="javascript:">
          <img :src="product.image_url" alt="">
          <h3 class="slide-item-title">
            {{product.name}}
          </h3>
          <p class="slide-item-description">
            {{product.description}}
          </p>
          <p class="slide-item-price"><span class="discount-price">{{product.price-product.discount}}元</span> <del class="price">{{product.price}}元</del></p>
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flashProducts:[
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},
        {name:'米家护颈记忆棉枕',sku:'灰色',description:'高低曲线承托，睡眠更自在',image_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef7b6af7926b7b44da1343e144a8f801.png?thumb=1&w=300&h=300&f=webp&q=90',price:'99',discount:'20'},

       
      ],
      topColors: [
        '#00c0a5',
        '#83c441',
        '#2196f3',
        '#e539e5'
      ],
      count: 0,//点击次数
      left: 0,//左边距值
      autoTerval: null
      
    }
  },
  computed: {
   
  },
  mounted(){
    this.autoTerval = setInterval(()=>{
      if(this.count<4){
        this.slideRight()
      }else{
        clearInterval(this.autoTerval);
      }
      
    },5000)
  },
  beforeDestroy(){
    clearInterval(this.autoTerval);
  },
  methods:{
    slideLeft(){
      //单次移动距离
      let moveLen = 992;
      //console.log(parseInt(document.querySelector('.slide-list').style.left.replace('px','')));
      this.count-=1;//移动步数
      if(this.count<0){
        this.count = 0;
      }
      console.log(this.count);
      let terval = setInterval(() => {
        //列表在最左侧则清除移动
        if(parseInt(document.querySelector('.slide-list').style.left.replace('px',''))>=0){
          clearInterval(terval);
        }else{
          // 移动一步清除一次
          if(this.left+moveLen*(this.count)+16>0){
            clearInterval(terval);
          }
          // console.log(this.count);
          this.left+=8;
          document.querySelector('.slide-list').style.left = this.left+'px';
        }
      },1);
        
      
    },
    slideRight(){
      //
      //列表总长度
      let listLength = this.flashProducts.length*248*3/4;
      //单次移动距离
      let moveLen = 992;
      //console.log(parseInt(document.querySelector('.slide-list').style.left.replace('px','')));
      this.count+=1;
      if(this.count>3){
        this.count = 3;
      }
      // console.log(this.count);
      let terval = setInterval(() => {
        if(parseInt(document.querySelector('.slide-list').style.left.replace('px',''))<-listLength+8){
          clearInterval(terval);
        }else{
          if(this.left+moveLen*this.count-16<0){
            clearInterval(terval);
          }
          this.left-=8;
          document.querySelector('.slide-list').style.left = this.left+'px'; 
        }
      },1);
        
    }
  }
}
</script>

<style lang="scss">
  .flash-slide{
    .slide-btns{
      position: absolute;
      top: -28px;
      right: 0px;

      span{
      display: inline-block;
      width: 24px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: #b0b0b0;
      padding: 3px 5px;
      border: 1px solid #b0b0b0;
      cursor: pointer;
      &:hover{
        color: #ff6a09;
      }
      }
      
    }
    .slide-container{
      position: absolute;
      width: 992px;
      height: 340px;
      left: 234px;
      top: 0px;
      overflow: hidden;
      .slide-list{
        position: absolute;
        width: 3968px;
        height: 300px;
        left: 0px;
        top: 0px;
        
        
        .slide-item{
          width: 234px;
          height: 300px;
          padding-top: 18px;
          margin-left: 14px;
          float: left;
          background-color: #fff;
          img{
            width: 160px;
            height: 160px;
            display: block;
            padding-top: 39px;
            margin: 0 auto;
          }
          .slide-item-title{
            margin: 0 20px 3px;
            font-size: 14px;
            font-weight: 400;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #212121;
            text-align: center;
          }
          .slide-item-description{
            margin: 0 20px 12px;
            font-size: 12px;
            height: 18px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #b0b0b0;
          }
          .slide-item-price{
            font-size:14px;
            text-align: center;
            .price{
              color: #b0b0b0;
              text-decoration: line-through;

            }
            .discount-price{
              color: #ff6709;
            }
          }
        }
      }
    }
  }
</style>