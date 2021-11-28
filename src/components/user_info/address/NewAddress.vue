<template>
  <div>
    <div class="form-container">
      <div class="add-form clearfix">
        <div class="section section-head">
          <input
            type="text"
            placeholder
            v-model="Input.name"
            class="input-name"
            @input="checkFormData('name')"
            @focus="focusInput('name')"
            @blur="blurInput('name')"
          />

          <input
            type="text"
            placeholder
            v-model="Input.phone"
            @input="checkFormData('phone')"
            @focus="focusInput('phone')"
            @blur="blurInput('phone')"
          />

          <div
            class="holder-name"
            :class="{'fade-in':!FocusInput.name}"
            v-if="!FocusInput.name&&Input.name==''"
            key="holder_name"
          >姓名</div>
          <div
            class="msg-name"
            :class="{'fade-in':FocusInput.name}"
            v-else
            key="msg_name"
          >{{ValidateMsg.name}}</div>

          <div class="holder-phone" :class="{'fade-in':!FocusInput.phone}" v-if="!FocusInput.phone&&Input.phone==''" key="holder_phone">手机</div>
          <div class="msg-phone" :class="{'fade-in':FocusInput.phone}" v-else key="msg_phone">{{ValidateMsg.phone}}</div>
        </div>
        <div class="section section-district">
          <input
            type="text"
            v-model="Input.district"
            placeholder="选择省/市/区/街道"
            v-on:focus="showSearchDistrict()"
          />
          <i class="iconfont iconarrowdown"></i>

          <search-district
            v-if="isShowSearchDistrict"
            @showChoose="showChooseDistrict()"
            @closeForm="handleCloseForm()"
            @chooseTip="getTip"
          ></search-district>

          <choose-district
            v-if="isShowChooseDistrict"
            @closeCd="handleCloseChooseDistrict()"
            @showSd="showSearchDistrict()"
            @selectDistrict="getDistrict"
          ></choose-district>
        </div>
        <div class="section section-detail clearfix">
          <textarea
            name="detail"
            cols="30"
            rows="3"
            placeholder
            v-model="Input.address"
            @input="checkFormData('address')"
            @focus="focusInput('address')"
            @blur="blurInput('address')"
          ></textarea>

          <div
            class="holder-address"
            :class="{'fade-in':!FocusInput.address}"
            v-if="!FocusInput.address&&Input.address==''"
            key="holder_address"
          >详细地址，路名或街道名称，门牌号</div>
          <div class="msg-address" :class="{'fade-in':FocusInput.address}" v-else key="msg_address">{{ValidateMsg.address}}</div>
        </div>
        <div class="section section-tag">
          <input
            type="text"
            v-model="Input.tag"
            placeholder
            @input="checkFormData('tag')"
            @focus="focusInput('tag')"
            @blur="blurInput('tag')"
          />

          <div class="holder-tag" :class="{'fade-in':!FocusInput.tag}" v-if="!FocusInput.tag&&Input.tag==''" key="holder_tag">地址标签</div>
          <div class="msg-tag" :class="{'fade-in':FocusInput.tag}" v-show="FocusInput.tag" key="msg_tag">{{ValidateMsg.tag}}</div>
        </div>
      </div>
      <div class="add-btn clearfix">
        <div class="add-btn-box">
          <button class="btn-add" @click="addUserAddress()">确定</button>
          <button class="btn-back" @click="$emit('closeModal')">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FetchApi from "../../../api/fetchApi";
import SearchDistrict from "./SearchDistrict";
import ChooseDistrict from "./ChooseDistrict";

export default {
  components: {
    SearchDistrict,
    ChooseDistrict
  },
  data() {
    return {
      Input: {
        name: "",
        phone: "",
        district: "",
        tag: "",
        address: ""
      }, //input v-model value
      ValidateMsg: {
        name: "姓名",
        phone: "电话",
        address: "详细地址",
        tag: "地址标签"
      }, //验证信息对象
      allowSubmit: "", //是否可以上传flag
      isShowSearchDistrict: false, //是否显示搜索街区框
      isShowChooseDistrict: false, //是否显示选择街区框
      FocusInput: {
        name: false,
        phone: false,
        address: false,
        tag: false
      }, //input 焦点对象
      ValidateExp:{
        name: /^[a-zA-Z0-9-\u4E00-\u9FA5_]{1,16}$/,
        phone: /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,
      },//Exp data


    };
  },
  methods: {
    handleCloseForm() {
      this.isShowSearchDistrict = false;
    },
    handleCloseChooseDistrict() {
      this.isShowChooseDistrict = false;
    },
    // 显示街区搜索框
    showSearchDistrict() {
      this.isShowSearchDistrict = true;
      this.isShowChooseDistrict = false;
    },
    //显示选则街区框
    showChooseDistrict() {
      this.isShowChooseDistrict = true;
      this.isShowSearchDistrict = false;
    },
    //提交地址信息
    addUserAddress() {
      const data = {
        name: this.Input.name,
        phone: this.Input.phone,
        address: this.Input.address,
        district: this.Input.district,
        tag: this.Input.tag
      };
      FetchApi.addUserAddress(data).then(res => {
        if (res.status == 200) {
          this.$emit("closeModal");
          this.$emit("refreshAddresses");
        }
      });
    },
    //从搜索街区子组件获取搜索的地址值
    getTip(data) {
      this.Input.district = data.district + data.name;
      this.isShowSearchDistrict = false;
    },
    //从手动选择街区获取街区信息
    getDistrict(data){
      this.Input.district = data;
    },
    checkFormData(key) {
     
     

      switch (key) {
        case "name":
          console.log(this.Input.name)
          if (this.Input.name == "") {
            this.ValidateMsg.name = "请输入名字";
          }
          else if (!this.ValidateExp.name.test(this.Input.name)) {
            
            this.ValidateMsg.name = "名字不能包含特殊字符 且长度为1-16位";
          }
          else{
            this.ValidateMsg.name = "";
          }
          break;
        case "phone":
          if (this.Input.phone == "") {
            this.ValidateMsg.phone = "请输入电话号码";
          }
          else if (!this.ValidateExp.phone.test(this.Input.phone)) {
            this.ValidateMsg.phone = "输入手机号码格式不正确";
          }
          else{
            this.ValidateMsg.phone = ""
          }
          break;
        case "address":
          if (this.Input.address == "") {
            this.ValidateMsg.address = "请输入地址";
          }
          this.ValidateMsg.address = ''
          break;
        case "tag":
          if (this.Input.address == "") {
            this.ValidateMsg.tag = "请输入标签";
          }
          this.ValidateMsg.tag = ''
          break;
      }
    },
    focusInput(key) {
      switch (key) {
        case "name":
          this.FocusInput.name = true;
          break;
        case "phone":
          this.FocusInput.phone = true;
          break;
        case "address":
          this.FocusInput.address = true;
          break;
        case "tag":
          this.FocusInput.tag = true;
          break;
      }
    },
    blurInput(key) {
      switch (key) {
        case "name":
          this.FocusInput.name = false;
          break;
        case "phone":
          this.FocusInput.phone = false;
          break;
        case "address":
          this.FocusInput.address = false;
          break;
        case "tag":
          this.FocusInput.tag = false;
          break;
      }
    }
  }
};
</script>

<style lang="scss">
.form-container {
  .add-form {
    padding: 20px;
    background-color: #fff;
    .holder-name,
    .holder-phone,
    .holder-address,
    .holder-tag {
      font-size: 14px;
      position: absolute;
      color: #757575;
      line-height: 20px;
    }
    .msg-name,
    .msg-phone,
    .msg-address,
    .msg-tag {
      font-size: 12px;
      color: #ff6700;
      background-color: #fff;
    }
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
      position: relative;
      input {
        width: 303px;
        height: 40px;
        float: left;
      }
      .input-name {
        margin-right: 14px;
      }

      .holder-name {
        position: absolute;
        top: 10px;
        left: 16px;
      }
      .msg-name {
        position: absolute;

        top: -10px;
        left: 16px;
        z-index: 10;
        padding: 2px;
      }
      .holder-phone {
        position: absolute;
        top: 10px;
        left: 333px;
      }
      .msg-phone {
        position: absolute;
        left: 333px;
        top: -10px;
        padding: 2px;
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
      position: relative;
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
      .holder-address {
        top: 13px;
        left: 16px;
      }
      .msg-address {
        position: absolute;
        left: 16px;
        top: -10px;
        padding: 2px;
      }
    }
    .section-tag {
      position: relative;
      width: 100%;
      input {
        width: 100%;
        height: 40px;
      }
      .holder-tag {
        top: 10px;
        left: 16px;
      }
      .msg-tag {
        position: absolute;
        left: 16px;
        top: -10px;
        padding: 2px;
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
  .fade-in {
    animation: fade-in 0.3s ease;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    
      transform: translateY(10px) scale(0);
    }
   
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
}
</style>