<template>
  <div class="choose-component clearfix">
    <div class="choose-container clearfix">
      <div class="choose-head">
        <i class="iconfont iconclose" @click="$emit('closeCd')"></i>
      </div>
      <div class="choose-result clearfix">
        <p class="district-text">
          <span class="province">{{currentProvince?currentProvince:'未选中'}}</span>
          <span class="city">{{currentCity}}</span>
          <span class="district">{{currentDistrict}}</span>
          
        </p>
      </div>
      <div class="choose-content clearfix">
        <ul class="provice-list" v-show="isShowProvince">
          <li class="provice-item" v-for="(province,id) in provinces" :key="id">
            <a href="javascript:" @click="selectProvince(id)">{{province}}</a>
          </li>
         
        </ul>
        <ul class="city-list" v-show="isShowCity">
          <li class="city-item" v-for="(city,id) in cities" :key="id">
            <a href="javascript:" @click="selectCity(id)">{{city}}</a>
          </li>
        </ul>
        <ul class="district-list" v-show="isShowDistrict">
          <li class="district-item" v-for="(district,id) in districts" :key="id">
             <a href="javascript:" @click="selectDistrict(id)">{{district}}</a>
          </li>
        </ul>
        <!-- <ul class="street-list" v-show="isShowStreet">
          <li class="street-item" v-for="item in 10" :key="item">
            
             <a href="javascript:">安定门街道</a>
          </li>
        
        </ul> -->

      </div>

      <div class="skip-search">
        <a href="javascript:" class="btn-hand" @click="$emit('showSd')">搜索地址快速定位></a>
      </div>
    </div>
  </div>
</template>

<script>
import addressData from 'china-area-data/v5/data'
export default {
  data() {
    return {
      searchKey: "",
      isSearchList: false,
      backTips: "",
      searchStatus: 0,
      timeOut: "", //延时器
      isShowProvince: true,
      isShowCity: false,
      isShowDistrict: false,
      //isShowStreet: false,
      //initValue: [],//初始化省市区的值
      /***********************************************
       * 地区数据
       * ***/
        provinces: addressData['86'],//省列表
        cities: {},//市列表
        districts: {},//地区列表

        proviceIdSelected: 110000,//当前选中省id
        cityIdSelected: 110100,//当前选中城市id
        districtIdSelected: 110101,//当前选中市区id

        currentProvince: '',//当前选中
        currentCity: '',
        currentDistrict: '',//当前选中区
      //////////////////////
    };
  },
 
  methods: {
   selectProvince(id){
     this.proviceIdSelected = id;
     this.isShowProvince = false;
     this.isShowCity = true;
     this.isShowDistrict = false;
   },
   selectCity(id){
     this.cityIdSelected = id;
     this.isShowProvince = false;
     this.isShowCity = false;
     this.isShowDistrict = true;
   },
   selectDistrict(id){
     this.districtIdSelected = id;
     this.isShowProvince = false;
     this.isShowCity = false;
     this.isShowDistrict = false;
     this.$emit('closeCd');
     this.$emit('selectDistrict',this.provinces[this.proviceIdSelected]+this.cities[this.cityIdSelected]+this.districts[this.districtIdSelected]);
   } 
  },
  watch: {
    proviceIdSelected(newVal){
      //如果未选中 清空城市列表
      if(!newVal){
        this.cities = {};
        this.cityIdSelected = '';
        return;
      }

      //将城市设置成当前省下的城市
      this.cities = addressData[newVal];
      this.currentProvince = this.provinces[newVal];
    

      //清空未选中城市
      if(!this.cities[this.cityIdSelected]){
        this.cityIdSelected = '';
      }
    
    },
    cityIdSelected(newVal){
      // 未选中城市则清空 街区信息
      if(!newVal){
        this.districts = {};
        this.districtIdSelected = '';
        return;
      }
      //设置当前街区列表为当前城市
      this.districts = addressData[newVal];
      this.currentCity = this.cities[newVal]

      //如果当前选中街区不在当前城市 则清空
      if(!this.districts[this.districtIdSelected]){
        this.districtIdSelected = '';
      }
    },
    districtIdSelected(newVal){
      //传递选中省市区信息到父组件
     
      this.currentDistrict = this.districts[newVal];
    }


  },
 
  components: {
    
  },
  mounted(){
   
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
          width: 100px;
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