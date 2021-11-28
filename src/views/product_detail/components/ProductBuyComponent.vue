<template>
  <div class="buy-component">
    <div class="page-info" v-if="!isLogin&&isInfo">
      为方便您购买，请提前登录
      <span @click="goLogin">立即登录</span>
      <i class="iconfont iconclose" @click="closeInfo"></i>
    </div>
    <div class="buy-container">
      <div class="swiper-img">
        <product-buy-swiper :images="selectSku.imgs" v-if="isFreshSwiper"></product-buy-swiper>
      </div>
      <div class="product-content">
        <h2 class="product-title">{{product.zh_name}}</h2>
        <p class="product-tags">{{product.tags}}</p>
        <p class="sku-price">{{selectSku.price}}元</p>
        <div class="user-address">
          <p class="address-info">
            <i class="iconfont iconlocate1e"></i>
            <span class="address-detail">当前地址</span>
            <span class="change-address-btn">&nbsp;&nbsp;修改</span>
          </p>
          <p class="product-state">
            <span class="state-title">有现货</span>
          </p>
        </div>
        <ul class="product-type-list">
          <li class="product-type-item">
            <h3>选择{{productTypes[0]}}</h3>
            <div class="type-btns">
              <a class="type-btn" v-for="(item,index) in typeValues[0]" :key="item"  :class="{'select-active':index==selectIndexs[0]}" @click="selectType(index,item,0)">{{item}}</a>
            </div>
          </li>
          <li class="product-type-item" v-if="productTypes[1]">
            <h3>选择{{productTypes[1]}}</h3>
            <div class="type-btns">
              <a v-for="(item,index) in typeValues[1]" :key="item"  class="type-btn" :class="{'select-active':index==selectIndexs[1]}" @click="selectType(index,item,1)">{{item}}</a>
            </div>
          </li>
          <li class="product-type-item" v-if="productTypes[2]">
            <h3>选择{{productTypes[2]}}</h3>
            <div class="type-btns">
              <a
              class="type-btn"
                v-for="(item,index) in typeValues[2]"
                :key="item"
                :class="{'select-active':index==selectIndexs[2]}"
                @click="selectType(index,item,2)"
              >{{item}}</a>
            </div>
          </li>
        </ul>

        <div class="buy-act-btns">
          <a v-if="isLogin" class="buy-btn" @click="addToCart">添加到购物车</a>
          <router-link v-else class="buy-btn" to="/user/login/login">登录后购买</router-link>
          <a class="like-btn" @click="toogleLike()" :class="{'heart-active':isHeartActive}">
            <i class="iconfont iconlike"></i>
            <i class="iconfont iconlove"></i>
            喜欢
          </a>
        </div>
      </div>
    </div>
    <add-success-pop :isSuccessPop="isPop" :popTitle="'提示信息'" @closePop="handleClosePop" :productName="product.zh_name" ></add-success-pop>
  </div>
</template>

<script>
import ProductBuySwiper from "./ProductBuySwiper";
import FetchAPI from "@/api/fetchApi";
import AddSuccessPop from './AddSuccessPop';
export default {
  components: {
    ProductBuySwiper,
    AddSuccessPop
  },

  data(){
    return {
      isLogin: false,
      isInfo: true,
      product: {},
      skus: [""],
      productTypes: [""], //sku type 如颜色 版本等
      typeValues: [], //sku value如 典雅黑 天空蓝等
      selectIndexs: [],//选中按钮下标
      selectName: '',//选中sku name
      selectNameArray: [],//选中类型数组,
      selectSkuID: 0,//默认选中sku 
      findSkuIdFail: true,//没有找到sku id
      isPop: false,
      isFreshSwiper: false,
      isHeartActive: false,//控制喜欢按钮样式
    };
  },
  computed:{
   
    selectSku(){
      let sku = {};
      //选中的sku
      this.skus.forEach((item)=>{
        if(item.id===this.selectSkuID){
          sku = item;
        }
      })
      return sku;
    }

  },
  created() {
    this.isLogin = false;
    if(localStorage.getItem('_user_token')){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
    //获取单个商品信息
    //如果用户已经登录 则获取logined 信息
    
    FetchAPI.getProduct(this.$route.params.id)
      .then(res => {
        this.product = res.data.product;
        this.skus = res.data.product.skus;
        this.isHeartActive = res.data.liked;
        this.isFreshSwiper = true;
      
        //获取sku分类属性
        this.productTypes = Object.keys(res.data.product.productinfos.product_info);
        //获取sku分类值
        Object.values(res.data.product.productinfos.product_info).forEach(item => {
          this.typeValues.push(item.split("-"));
        });

        //默认选中id
        this.selectSkuID = this.skus[0].id;
        
        //默认数组名
        this.selectNameArray = this.skus[0].name.split('-');
        
        //默认选中下标
        this.typeValues.forEach((item)=>{
          for(let i=0; i<item.length; i++){
             for(let j=0; j<this.selectNameArray.length;j++){
            
              if(item[i]==this.selectNameArray[j]){
              this.selectIndexs.push(i);
            }
             }
            
          }
        })
       
      })
      .catch((e) => {
        console.log(e);
      });
  },
  mounted(){
    
  },
  methods:{
    //跳转登录页
    goLogin() {
      this.$router.push("/user/login/login");
    },
    //关闭登录提醒
    closeInfo() {
      this.isInfo = false;
    },
    //点击按钮选择商品类型
    selectType(index,item,pindex){
      
      //查找选中的sku
      this.selectNameArray[pindex] = item;
      this.findSkuId();
      if(this.findSkuIdFail){
        this.$toast('该类型暂时缺货 请选择其它的！');
      }else{
      //数组变化不能渲染 故可以使用$set 或 splice 方法
      //this.selectIndexs[pindex] = index;
      this.$set(this.selectIndexs,pindex,index);
     
      }
      

     
    },
    findSkuId(){
      this.findSkuIdFail = true;
      this.skus.forEach((item)=>{
        if(item.name==this.selectNameArray.join('-')){
         this.selectSkuID = item.id;
         this.findSkuIdFail = false;
        }
      })
    },
    addToCart(){
      //console.log(this.selectSkuID);
      if(localStorage.getItem('_user_token')){
        //buy action
        FetchAPI.addToCart(this.selectSkuID,1)
        .then((res)=>{
         if(res.status==200){
           this.isPop = true;
         }
         
        })
        .catch(
          (e)=>{
            if(e.status==400){
              this.$toast(e.data.msg,'错误信息')
            }else{
              this.$toast(e,'错误信息')
            }
          }
        )
        
      }else{
        //go login
        this.goLogin();
      }
    },
    //添加喜欢
    toogleLike(){
      
      if(this.isHeartActive==false)
      //params product id  添加收藏
      FetchAPI.addToLike(this.$route.params.id)
      .then((res)=>{
        if(res.status == 200){
          this.$toast('添加成功');
        }
      })
      .catch(e=>console.log(e));
      if(this.isHeartActive==true){
        //移除收藏 params product id
        FetchAPI.deleteLike(this.$route.params.id)
        .then((res)=>{
          if(res.status==200){
           this.$toast('移除成功')
          }
        })
        .catch(e=>console.log(e))
      }

      this.isHeartActive = !this.isHeartActive;
    },
    handleClosePop(){
      this.isPop = false;
    }
    
  }
};
</script>

<style lang="scss">
.page-info {
  position: absolute;
  top: 210px;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background-color: #f7f7f7;
  span {
    color: #ff6700;
    cursor: pointer;
    margin-left: 20px;
  }
  i {
    color: #b5b5b5;
    font-size: 18px;
    margin-left: 10px;
    vertical-align: middle;
    cursor: pointer;
  }
}
.buy-container {
  width: 1226px;
  height: auto;
  margin: 58px auto;
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 12px;
  .swiper-img {
    width: 606px;
  }
  .product-content {
    width: 600px;
    margin-left: 20px;
    h2.product-title {
      font-size: 24px;
      color: #212121;
      font-weight: 400;
    }
    p.product-tags {
      padding-top: 8px;
      color: #bbb;
      font-size: 14px;
    }
    p.sku-price {
      color: #ff6700;
      font-size: 16px;
      padding-top: 12px;
    }
    .user-address {
      position: relative;
      padding: 30px 50px;
      margin-top: 20px;
      border: 1px solid #e0e0e0;
      background-color: #fbfbfb;
      .address-info {
        i {
          position: absolute;
          font-size: 20px;
          left: 20px;
          top: 30px;
          color: #666;
        }
       
        span.change-address-btn {
          cursor: pointer;
          color: #ff6700;
        }
      }
      p.product-state {
        padding-top: 4px;
        .state-title {
          color: #ff6700;
        }
      }
    }
    .product-type-list {
      .product-type-item {
        h3 {
          font-size: 18px;
          font-weight: 400;
          margin-top: 24px;
        }
        .type-btns {
          height: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        a.select-active {
          color: #ff6700;
          border-color: #ff6700;
        }
        a {
          display: block;
          border: 1px solid #e0e0e0;
          height: 42px;
          line-height: 42px;
          width: 290px;
          margin-top: 10px;
          font-size: 16px;
          text-align: center;
          cursor: pointer;
          &:hover {
            border-color: #ff6700;
          }
          transition: all 0.5s;
          -webkit-transition: all 0.5s;
        }
      }
    }
    .buy-act-btns{
      margin-top: 24px;
      display: flex;
      .buy-btn,.like-btn{
        display: block;
        height: 52px;
        cursor: pointer;
        line-height: 52px;
        font-size: 16px;
        color: #fff;
        text-align: center;
      }
      .like-btn{
        width: 140px;
        margin-left: 10px;
        transition: all .5s;
        -webkit-transition: all .5s;
       background-color: #bbb;
       .iconlike{
         font-size: 22px;
         vertical-align: -4px;
       }
       .iconlove{
         font-size: 22px;
         vertical-align: -4px;
         display: none;
       }
       &:hover{
         background-color: #757575;
       }
      }
      //喜欢激活样式
      .heart-active{
        .iconlike{
          display: none;
        }
        .iconlove{
          display: inline-block;
          color: red;
        }
      }
      .buy-btn{
         width: 298px;
        background-color: #ff6700;
      }
    }
  }
}
</style>