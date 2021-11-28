<template>
  <div>
    <div class="form-container">
      <div class="add-form clearfix">
        <div class="section section-head">
          <input type="text" placeholder="姓名" v-model="name" class="input-name" />
          <input type="text" placeholder="电话" v-model="phone"/>
        </div>
        <div class="section section-district">
          <input type="text" v-model="district" placeholder="选择省/市/区/街道" v-on:focus="showSD"/>
          <i class="iconfont iconarrowdown"></i>
          <search-district v-if="isShowSD" v-on:showChoose="showCD" v-on:closeForm="handleCloseForm" v-on:chooseTip="getTip"></search-district>
          <choose-district v-if="isShowCD" v-on:closeCd="handleCloseCd" v-on:showSd="showSD"></choose-district>
        </div>
        <div class="section section-detail clearfix">
          <textarea name="detail" cols="30" rows="3" placeholder="详细地址，路名或街道名称，门牌号" v-model="address"></textarea>
        </div>
        <div class="section section-tag">
          <input type="text" v-model="tag" placeholder="地址标签" />
        </div>
      </div>
      <div class="add-btn clearfix">
        <div class="add-btn-box">
          <button class="btn-add" @click="addUserAddress">确定</button>
          <button class="btn-back" @click="$emit('closeModal')">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FetchApi from '@/api/fetchApi';
import SearchDistrict from './SearchDistrict';
import ChooseDistrict from './ChooseDistrict';

export default {
  components:{
    SearchDistrict,
    ChooseDistrict
  },
  data() {
    return {
      name: '',
      phone: '',
      district: '',
      detail: '',
      tag: '',
      address: '',
      isShowSD: false,//是否显示搜索街区框
      isShowCD: false,//是否显示选择街区框
    };
  },
  methods: {
    handleCloseForm(){
      this.isShowSD = false;
    },
    handleCloseCd(){
      this.isShowCD = false;
    },
    // 显示街区搜索框
    showSD(){
      this.isShowSD = true;
      this.isShowCD = false;
    },
    showCD(){
      this.isShowCD = true;
      this.isShowSD = false;
    },
    //提交地址信息
    addUserAddress(){
      const data = {
        name: this.name,
        phone: this.phone,
        address: this.address,
        district: this.district,
        tag: this.tag
      } 
      FetchApi.addUserAddress(data)
      .then((res)=>{
        if(res.status==200){
          this.$emit('closeModal');
          this.$emit('refreshAddresses');
        }
      })
    },
    //从子组件获取搜索的地址值
    getTip(data){
      this.district = data.district+data.name;
      this.isShowSD = false;
    }
    
    
  }
};
</script>

<style lang="scss">
.form-container {
  .add-form {
    padding: 20px;
    background-color: #fff;
    .section {
      height: 40px;
      margin-bottom: 14px;
      input {
        border: 1px solid #e0e0e0;
        outline: none;
        box-sizing: border-box;
        padding: 14px 16px;
        transition: border-color 0.2s linear;
        &:focus {
          border-color: #ff6700;
        }
      }
    }
    .section-head {
      input {
        width: 303px;
        height: 40px;
        float: left;
      }
      .input-name {
        margin-right: 14px;
      }
    }
    .section-district {
      position: relative;
      width: 100%;
      height: 40px;
      
      input {
        width: 100%;
        height: 40px;
      }
      .iconarrowdown {
        position: absolute;
        z-index: 2;
        right: 10px;
        top: 14px;
        color: #bbb;
      }
    }
    .section-detail {
      width: 100%;
      height: 72px;
      textarea {
        width: 100%;
        height: 70px;
        padding: 14px 16px;
        box-sizing: border-box;
        border: 1px solid #e0e0e0;
        outline: none;
        transition: border-color 0.2s linear;
        &:focus {
          border-color: #ff6700;
        }
      }
    }
    .section-tag {
      width: 100%;
      input {
        width: 100%;
        height: 40px;
      }
    }
  }
  .add-btn {
    width: 100%;
    height: 82px;
    box-sizing: border-box;
    padding: 20px 0;
    background-color: #f5f5f5;
    .add-btn-box {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      .btn-add {
        width: 160px;
        height: 40px;
        color: #fff;
        background-color: #ff6700;
        border: 1px solid #ff6700;
        cursor: pointer;
        margin-right: 14px;
      }
      .btn-back {
        width: 160px;
        height: 40px;
        border: none;
        color: #fff;
        background-color: #bbb;
        cursor: pointer;
        &:hover {
          background-color: #757575;
        }
        transition: all 0.2s linear;
      }
    }
  }
}
</style>