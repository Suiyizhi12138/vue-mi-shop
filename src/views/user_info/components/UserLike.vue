<template>
  <div class="user-orderlist-page">
    <!-- 用户评价页 -->
    <div class="order-list-box">
      <div class="order-head">
        <h1>我喜欢的商品</h1>
      </div>
      
      <div class="order-content clearfix">
        <div class="order-box clearfix">
          <div class="product-like clearfix" v-if="likeAmount>0">
            <div class="product-like-box clearfix">
              <loading :containerSize="'middle'" v-if="likeProductsLoadStatus==1"></loading>
              <user-like-list :products="likeProducts" v-else></user-like-list>
              
            </div>
          </div>
          <div class="order-none" v-else>
            <h2  class="order-none-text">您未收藏任何喜欢的商品</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserLikeList from './userlike/UserLikeList';
import FetchAPI from '@/api/fetchApi';
import Loading from '@/components/common/Loading'
export default {
  components:{
    UserLikeList,
    Loading
  },
  data(){
    return{
      likeAmount: 1,
      likeProducts: [],
      likeProductsLoadStatus: 0,//收藏商品加载状态 0-未加载 1-loading 2-loading-success 3-loading-failed
    }
  },
  created(){
    this.likeProductsLoadStatus = 1;
    //获取用户收藏的商品列表
    FetchAPI.getLikeProducts()
    .then((res)=>{
      if(res.status==200){
        this.likeProducts = res.data;
        this.likeProductsLoadStatus = 2;
      }else if(res.status==401){
        return;
      }
    })
    .catch(()=>{
      this.likeProductsLoadStatus = 3;
    })
    


  },
  
}
</script>

<style lang="scss">
  a.active{
    color: #ff6700;
  }
  .order-list-box{
    padding: 36px 48px;
    .order-head{
      h1{
        font-size: 30px;
        line-height: 68px;
        font-weight: 400;
        color: #757575;
        span{
          font-size: 12px;
          margin-left: 10px;
        }
        a{
          font-size: 12px;
          color: #ff6700;
          
        }
      }
    }
    .order-nav{
      height: 56px;
      .nav-left{
        float: left;
        .nav-list{
          height: 56px;
          padding: 18px 0;
          box-sizing: border-box;
          li.nav-first{
            padding-left: 0;
            
          }
          li.nav-last{
            border-right: 0;
          }
          .nav-item{
            float: left;
            height: 20px;
            line-height: 20px;
            text-align: center;
            padding:0 20px;
            border-right: 1px solid #757575;
            a{
              font-size: 16px;
            }
          }
        }
      }
      .nav-right{
        float: right;
        line-height: 42px;
        height: 42px;
        width: 262px;
        text-align: center;
        border: 1px solid #b5b5b5;
        input{
          border: none;
          outline: none;
          width: 220px;
          float: left;
          height: 42px;
          box-sizing: border-box;
          padding-left: 10px;
          border-right: 1px solid #757575;
        }
        i{
          width: 40px;
          height: 40px;
          font-size: 20px;;
          cursor: pointer;
          font-weight: 400;
          color: #757575;
        }
      }
      
    }
    .order-content{
      
      .order-box{
        margin: 40px auto;
        
        .order-none{
          line-height: 60px;
          text-align: center;
            .order-none-text{
              font-size: 18px;
              color: #bbb;
              font-weight: 400;
            }
        }
      }
    }
  }
</style>