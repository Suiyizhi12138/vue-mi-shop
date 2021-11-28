<template>
  <div class="detail-page">
    <common-header></common-header>
    <common-nav></common-nav>
    <transition name="slide-fix-top">
    <div class="fix-top" v-if="isShowFixTop">
       <div class="fix-content">
        <div class="fix-left">
          <span class="product-title">{{product.zh_name}}</span>
         
        </div>
        <div class="fix-right">
          <a @click="goDetail" href="javascript:" :style="{ color: isDetail?'#ff6700':'' }" v-if="Boolean(this.details.length)">概述页</a>
          <span v-if="Boolean(this.details.length)">|</span>
          <a v-if="Boolean(this.params.length)" @click="goParam" href="javascript:" :style="{ color: isParam?'#ff6700':'' }">参数页</a>
          <span v-if="Boolean(this.params.length)">|</span>
          <router-link to='/buy/fcode'>F码通道</router-link>
          <span>|</span>
          <router-link to='/service/human'>咨询客服</router-link>
          <span>
            |
          </span>
          <router-link to='/user/comment'>客户评价</router-link>
          <button @click="goBuy" v-if="!isBuy"><a>立刻购买</a></button>
          
        </div>
      </div>
    </div>
    </transition>
    <div class="detail-head">
      <div class="fix-content">
        <div class="fix-left">
          <span class="product-title">{{product.zh_name}}</span>
         
        </div>
        <div class="fix-right">
          <a @click="goDetail" href="javascript:" :style="{ color: isDetail?'#ff6700':'' }" v-if="Boolean(this.details.length)">概述页</a>
          <span v-if="Boolean(this.details.length)">|</span>
          <a v-if="Boolean(this.params.length)" @click="goParam" href="javascript:" :style="{ color: isParam?'#ff6700':'' }">参数页</a>
          <span v-if="Boolean(this.params.length)">|</span>
          <router-link to='/buy/fcode'>F码通道</router-link>
          <span>|</span>
          <router-link to='/service/human'>咨询客服</router-link>
          <span>
            |
          </span>
          <router-link to='/user/comment'>客户评价</router-link>
          <button @click="goBuy" v-if="!isBuy"><a>立刻购买</a></button>
          
        </div>
      </div>
    </div>
    <!-- 详情图片 -->
    <product-detail-component v-if="isDetail" :imgUrls="details"></product-detail-component>
    <!-- 参数页 -->
    <product-param-component :imgUrls="params" v-if="isParam"></product-param-component>
    <!-- 购买页 -->
    <product-buy-component v-if="isBuy" :product="product"></product-buy-component>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader';
import CommonNav from '@/components/common/common_nav/CommonNav';
import CommonFooter from '@/components/common/CommonFooter';
import ProductDetailComponent from './components/ProductDetailComponent';
import ProductParamComponent from './components/ProductParamComponent';
import ProductBuyComponent from './components/ProductBuyComponent';
import FetchAPI from '@/api/fetchApi';
export default {
  data(){
    return{
      productId:Number,
      isShowFixTop: false,
      isDetail: true,
      isParam: false,
      isBuy: false,
      product:{},//商品
      details:[],  //详情图片
      params:[],//参数图片  
    }
  },
  created(){
    this.productId = this.$route.params.id;

    //监听滚动条事件
    window.onscroll = ()=>{
      if((document.body.scrollTop||document.documentElement.scrollTop)>140){
        this.isShowFixTop = true;
      }else{
        this.isShowFixTop = false;
      }

    }
  },
 
  components:{
    CommonHeader,
    CommonNav,
    CommonFooter,
    ProductDetailComponent,
    ProductParamComponent,
    ProductBuyComponent
  },
  mounted(){
    let that = this;
    FetchAPI.getProduct(this.$route.params.id)
    .then((res) => {
      let product = res.data.product;
      that.product = product;
      that.details = product.details;
      that.params = product.parameters;
      
    })
    .catch((e)=>{
      console.log(e);
    });
    if(!this.details.length){
      this.isDetail = false;
      this.isBuy = true;
    }
    
    
    
   
  },
  methods:{
   
    //跳转详情页
   goDetail(){
     window.scrollTo(0,0);
     this.isDetail = true;
     this.isParam = false;
     this.isBuy = false;
   },
   goParam(){
     window.scrollTo(0,0);
     this.isDetail = false;
     this.isParam = true;
     this.isBuy = false;
   },
   goBuy(){
     window.scrollTo(0,0);
     this.isDetail = false;
     this.isParam = false;
     this.isBuy = true;
   },
  }
}
</script>

<style lang="scss">
.fix-top{
  position: fixed;
  top: 0px;
  z-index:999;
}
.detail-head,.fix-top{
  width: 100%;
  height: 60px;
  border-top: 1px solid #e0e0e0;
  line-height: 60px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 5px 5px #bbb;
  
}

.fix-content{
    width: 1226px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .fix-left{
      height: 60px;
      span.product-title{
        font-size: 18px;
        color: #424242;
        font-weight: 400;
      }
      span.sub-title{
        font-size: 12px;
        color: #616161;
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid #666;
      }

    }
    .fix-right{
      font-size: 14px;
      span{
        margin: 0 10px;
        color: #616161;
      }
      a{
         color: #616161;
         &:hover{
           color: #ff6700;
         }
      }
      button{
        border: none;
        background-color: #ff6700;
        height: 28px;
        width: 112px;
        margin-left: 5px;
        font-size: 12px;
        cursor: pointer;
       
        a{
           color: #fff;
          &:hover{
            color: #fff;
          }
        }
      }
    }
}
.main-container{
    margin: 200 auto;
    width: 1226px;
    height: 1000px;
    background-color: #f5f5f5;
}
//链接avtive样式

//transition 动画
.slide-fix-top-enter-active{
  animation: slide-fix-top  .5s;
}
.slide-fix-top-leave-active{
  animation: slide-fix-top  .5s reverse;
}
@keyframes slide-fix-top{
  0%{
    transform: translateY(-60);
    opacity: 0;
  }
 
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>