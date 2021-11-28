<template>
  <div class="search-component clearfix">
    <div class="search-form clearfix">
      <div class="search-head">
        <i class="iconfont iconclose" @click="$emit('closeForm')"></i>
      </div>
      <div class="search-content">
        <i class="iconfont iconsearch"></i>
        <input
          type="text"
          v-model="searchKey"
          placeholder="输入乡镇、街道、小区或商圈名称"
          class="input-address"
          v-on:input="debounceSearch(300)"
        />
        <p class="search-tips">例如：北京 五彩斑斓城</p>

        <!-- 搜索结果 -->
      </div>
    </div>
    <div class="search-list-box clearfix" v-if="searchKey">
      <div class="search-list clearfix" v-if="searchStatus!==1&&isSearchList">
        <!-- 搜索有结果 -->
        <div class="search-list-content" v-if="backTips.length>0">
          <div class="search-item" v-for="(tip,index) in backTips" :key="index" @click="selectTip(index)">
            <div class="search-left">
              <h2 class="address-head">{{tip.name}}</h2>
              <p class="adddress-content">{{tip.district}}</p>
            </div>
            <div class="search-right">
              <div class="choose-btn">
                <button class="btn-choose" >选择</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 搜索结果为空 -->
        <div class="search-null" v-if="backTips.length==0&&searchStatus==2">
          没有找到这个地方
          <a href="javascript:" class="btn-hand">手动选择地址></a>
        </div>
      </div>
      <loading v-if="searchStatus==1"></loading>
    </div>
    <div class="hand-choose" v-else>
      <a href="javascript:" class="btn-hand" @click="$emit('showChoose')">手动选择地址></a>
    </div>
   
  </div>
</template>

<script>
import FetchApi from "@/api/fetchApi";
import Loading from "@/components/common/Loading";
export default {
  data() {
    return {
      searchKey: "",
      isSearchList: false,
      backTips: "",
      searchStatus: 0,
      timeOut: '',//延时器
    };
  },
  components: {
    Loading
  },
  methods: {
    searchAddress() {
      //添加一个控制器 控制搜索频率
      let ready = true; //是否可以搜索
      if (ready) {
        console.log("search change");
        this.searchStatus = 1;
        FetchApi.getDistrict(this.searchKey)
          .then(res => {
            this.backTips = res.data.tips;
            this.searchStatus = 2;
            this.isSearchList = true;
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    //延时搜索
    debounceSearch(time){
      if(this.timeOut){
        clearTimeout(this.timeOut);
      }
      this.timeOut = setTimeout(()=>{
        this.searchAddress();
      },time)
    },
    //选择地址并关闭搜索列表
    selectTip(index){
      this.$emit('chooseTip',this.backTips[index]);
      this.isSearchList = false;
    }
    
  },
  
};
</script>

<style lang="scss">
.search-component {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ff6700;
  z-index: 10;
  top: -10px;
  padding: 6px;
  background-color: #fff;
  .search-form {
    .search-head {
      height: 40px;
      i {
        float: right;
        cursor: pointer;
        color: #bbb;
      }
    }
    .search-content {
      position: relative;
      padding: 10px;
      .iconsearch {
        position: absolute;
        color: #bbb;
        font-size: 18px;
        top: 22px;
        left: 20px;
      }
      .input-address {
        padding-left: 45px;
      }
      p {
        height: 40px;
        line-height: 40px;
        color: #bbb;
        border-bottom: 1px solid #bbb;
      }
    }
  }
  .search-list-box {
    width: 100%;
    background-color: #fff;
    z-index: 11;

    .search-list {
      padding: 0 10px;
      box-sizing: border-box;
      overflow: scroll;
      z-index: 11;
      height: 240px;
      background-color: #fff;
      position: relative;
      .search-list-content {
        .search-item {
          height: 60px;
          box-sizing: border-box;
          padding: 10px 0;
          border-bottom: 1px solid #bbb;
          cursor: pointer; 
          .search-left {
            float: left;
            width: 200px;
            height: 40px;
            h2 {
              color: #333;
              font-size: 14px;
              font-weight: normal;
            }
            p {
              height: 20px;
              line-height: 20px;
              color: #bbb;
              font-size: 12px;
              border: none;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .search-right {
            width: 120px;
            height: 40px;
            float: right;
            .choose-btn {
              .btn-choose {
                width: 102px;
                height: 34px;
                background-color: #ff6700;
                border: none;
                cursor: pointer;
              }
            }
          }
        }
      }
      .search-null {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 16px;
        a {
          color: #ff6700;
        }
      }
    }
  }
  .hand-choose {
    padding: 10px;
    a {
      display: inline-block;
      //margin-top: 14px;
      color: #bbb;
      &:hover {
        color: #ff6700;
      }
    }
  }
}
</style>