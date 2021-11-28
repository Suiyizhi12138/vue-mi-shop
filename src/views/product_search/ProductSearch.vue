<template>
  <div class="product-search-page">
    <common-header></common-header>
    <common-nav :isSearchPage="true"></common-nav>
    <div class="pro-search-container">
      <div class="search-breadcrumbs">
        <router-link to="/">首页</router-link>>
        <router-link :to="'/search?keyword='+searchKey">全部结果</router-link>
        >
        {{searchKey}}
      </div>
      <div class="search-category" v-if="false">
        <div class="category-head">
          <span class="category-title">分类：</span>
          <a class="category-item" href="javascript:">小米手机</a>
          <a class="category-item" href="javascript:">红米手机</a>
          <a class="category-item" href="javascript:">黑鲨手机</a>
        </div>
      </div>
      <div class="search-resort">
        <div class="resort-left">
          <a @click="resort('default')" :class="{'resort-active':sortType=='default'}">综合</a>
          <span>|</span>
          <a @click="resort('timeDesc')" :class="{'resort-active':sortType=='timeDesc'}">新品</a>
          <span>|</span>
          <a @click="resort('soldDesc')" :class="{'resort-active':sortType=='soldDesc'}">销量</a>
          <span>|</span>
          <a @click="resort('priceAsc')" :class="{'resort-active':sortType=='priceAsc'}">
            价格
            <i class="iconfont iconlongarrowup"></i>
           
          </a>
         <span>|</span>
          <a @click="resort('priceDesc')" :class="{'resort-active':sortType=='priceDesc'}" >
            价格
            <i class="iconfont iconlongarrowdown"></i>
          </a>
          
        </div>
        <div class="resort-right">
          <span>收货地</span>
          <a href class="address-btn">北京 北京市</a>
          <input type="checkbox" value="discount" v-model="checkTypes" v-on:checked="pickProducts" />促销
          <input type="checkbox" value="paylate" v-model="checkTypes" v-if="false" />
          <input type="checkbox" value="onsale" v-model="checkTypes" v-if="false" />
          
        </div>
      </div>
      <div class="search-content">
        <Search-list :products="showProducts"></Search-list>
      </div>
    </div>

    <common-footer></common-footer>
    <common-fix-nav></common-fix-nav>
  </div>
</template>

<script>
import CommonHeader from "@/components/common/CommonHeader";
import CommonNav from "@/components/common/common_nav/CommonNav";
import CommonFooter from "@/components/common/CommonFooter";
import CommonFixNav from "@/components/common/CommonFixNav";
import SearchList from "./components/SearchList";
import FetchAPI from "@/api/fetchApi";
export default {
  components: {
    CommonHeader,
    CommonNav,
    CommonFooter,
    CommonFixNav,
    SearchList
  },
  data() {
    return {
      searchKey: "",//搜索关键词
      showProducts: [],//渲染数据
      searchProducts:[],//搜索数据
      pickProducts:[],//筛选数据
      sortType:'default',//排序关键词
      checkTypes:[],//checkbox筛选类型
    };
  },
  mounted() {
    this.searchKey = this.$route.query.keyword;
    this.handelSearch(this.searchKey)
    .then(()=>{
      this.showProducts = this.searchProducts;
    });
    
    
  },
  methods: {
    handelSearch(key) {
      return FetchAPI.searchProducts(key)
        .then(res => {
          this.searchProducts = res.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    resort(type) {
      if(this.checkTypes.indexOf('discount')>-1){
        this.handlePick();
      }
      switch (type) {
        case "default":
          this.showProducts = this.pickProducts;
          this.sortType = 'default';
          break;
        case "timeDesc":
          this.showProducts = this.pickProducts.sort((a,b) => {
           return new Date(b.created_at) - new Date(a.created_at);
          });
          this.sortType = 'timeDesc';
          break;
        case "soldDesc":
           this.showProducts = this.pickProducts.sort((a,b)=>{
            return b.sold_count - a.sold_count;
          })
          this.sortType = 'soldDesc';
          break;
        case 'priceDesc':
          this.showProducts = this.pickProducts.sort((a,b)=>{
            return b.price-a.price;
          })
          this.sortType = 'priceDesc';
          break;
        case 'priceAsc':
          this.showProducts = this.pickProducts.sort((a,b)=>{
            return a.price-b.price;
          })
          this.sortType = 'priceAsc';
          break;  
      }
    },
    handlePick(){
      if(this.checkTypes.indexOf('discount')>-1){
        this.pickProducts = this.showProducts.filter((item)=>{
          return item.discount>0;
        });
      }else{
        this.pickProducts = this.searchProducts;
      }
    }
  },
  watch:{
    checkTypes(){
      if(this.checkTypes.indexOf('discount')>-1){
        this.showProducts = this.showProducts.filter((item)=>{
          return item.discount>0;
        });
      }else{
        this.showProducts = this.searchProducts;
      }
    }
  }
};
</script>

<style lang="scss">
.product-search-page {
  .product-item{
    -webkit-transition: all .2s linear; 
    transition: all .2s linear;
    &:hover{
      z-index: 2;
      box-shadow: 0px 15px 30px rgba(0,0,0,.1);
      -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1); 
      transform: translate3d(0,-2px,0);
      -webkit-transform: translate3d(0,-2px,0);
    }
  }
  .pro-search-container {
    width: 100%;
    height: auto;
    background-color: #f5f5f5;
    overflow: hidden;
    .search-breadcrumbs {
      margin: 0 auto;
      width: 1226px;
      height: 40px;
      line-height: 40px;
      color: #757575;
      font-size: 12px;
      a {
        font-size: 12px;
      }
    }
    .search-category {
      width: 100%;
      height: 100px;
      background-color: #fff;
      .category-head {
        width: 1226px;
        margin: 0 auto;
        height: 84px;
        line-height: 84px;
        .category-title {
          color: #757575;
        }
        .category-item {
          margin-left: 100px;
        }
      }
    }
    .search-resort {
      width: 1226px;
      margin: 0 auto;
      height: 84px;
      display: flex;
      justify-content: space-between;
      .resort-left {
        line-height: 84px;
        span {
          color: #ddd;
          margin: 0 20px;
        }
        a{
          cursor: pointer;
          &.resort-active{
            color: #ff6700;
          }
        }
      }
      .resort-right {
        line-height: 64px;
        margin-top: 20px;

        a.address-btn {
          border: 1px solid #757575;
          background-color: #fff;
          margin-left: 5px;
          padding: 5px 4px;
        }
        input[type="checkbox"] {
          margin-left: 32px;
          width: 18px;
          height: 18px;
          vertical-align: middle;
          &:checked {
            background-color: #ff6700;
          }
        }
      }
    }
    .search-content {
      margin: 0 auto;
      width: 1226px;
    }
  }
}
</style>