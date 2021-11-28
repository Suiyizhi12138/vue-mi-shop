<template>
  <div class="choose-component clearfix">
    <div class="choose-container clearfix">
      <div class="choose-head">
        <i class="iconfont iconclose" @click="$emit('closeCd')"></i>
      </div>
      <div class="choose-result clearfix">
        <p class="district-text">
          <span class="province">北京</span>
          <span class="city">北京市</span>
          <span class="district">东城区</span>
          <span class="street">安定门街道</span>
        </p>
      </div>
      <div class="choose-content clearfix">
        <ul class="provice-list" v-if="isShowProvince">
          <li class="provice-item">
            <a href="javascript">北京</a>
          </li>
          <li class="provice-item">
            <a href="javascript">天津</a>
          </li>
          <li class="provice-item">
            <a href="javascript">河北</a>
          </li>
          <li class="provice-item">
            <a href="javascript">山西</a>
          </li>
          <li class="provice-item">
            <a href="javascript">内蒙古</a>
          </li>
          <li class="provice-item">
            <a href="javascript">吉林</a>
          </li>
          <li class="provice-item">
            <a href="javascript">辽宁</a>
          </li>
          <li class="provice-item">
            <a href="javascript">黑龙江</a>
          </li>
          <li class="provice-item" v-for="item in 30" :key="item">
            <a href="javascript">辽宁</a>
          </li><li class="provice-item">
            <a href="javascript">辽宁</a>
          </li>
        </ul>
        <ul class="city-list" v-if="isShowCity">
          <li class="city-item" v-for="item in 20" :key="item">
            <a href="javascript:">北京市</a>
          </li>
        </ul>
        <ul class="district-list" v-if="isShowDistrict">
          <li class="district-item" v-for="item in 20" :key="item">
             <a href="javascript:">海淀区</a>
          </li>
        </ul>
        <ul class="street-list">
          <li class="street-item" v-for="item in 10" :key="item">
            
             <a href="javascript:">安定门街道</a>
          </li>
        
        </ul>

      </div>

      <div class="skip-search">
        <a href="javascript:" class="btn-hand" @click="$emit('showSd')">搜索地址快速定位></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchKey: "",
      isSearchList: false,
      backTips: "",
      searchStatus: 0,
      timeOut: "", //延时器
      isShowProvince: false,
      isShowCity: false,
      isShowDistrict: false,
      isShowStreet: true,
    };
  },
  methods: {
    
  },
  components: {
    
  }
};
</script>

<style lang="scss">
.choose-component {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ff6700;
  z-index: 10;
  top: -10px;
  padding: 6px;
  background-color: #fff;
  .choose-container {
    box-sizing: border-box;
    padding: 10px;
    .choose-head {
      height: 20px;
      i {
        float: right;
        cursor: pointer;
        color: #bbb;
        &:hover{
          color: #333;
        }
      }
    }
    .choose-result{
      border-bottom: 1px solid #f5f5f5;
      p{
        margin-bottom: 10px;
        span{
          color: #ff6700;
          margin-right: 14px;
        }
      }

    }
    .choose-content{
     
      border-bottom: 1px solid #eee;
      .provice-list,.city-list,.district-list{
        .provice-item,.city-item,.district-item{
          float: left;
          margin-right: 14px;
          width: 42px;
          line-height: 30px;
        }
      }
      .street-list{
        .street-item{
          float: left;
          width: 100px;
          margin-right: 14px;
          line-height: 30px;
          
        }
      }

    }
    .skip-search{
      width: 100%;
      a{
        line-height: 40px;
        display: inline-block;
        color: #bbb;
        &:hover{
          color: #ff6700;
        }
      }

    }
   
  }
 
 
}
</style>