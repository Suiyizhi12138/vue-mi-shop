<template>
  <div class="user-addresslist-page">
    <div class="address-list-box">
      <div class="address-head">
        <h1>收货地址</h1>
      </div>

      <div class="address-content" v-if="deleteStatus!==1">
        <div class="address-box clearfix">
          <div class="address-list">
            <div class="add-address address-item" @click="addAddress">
              <div class="btn-add-box">
                <div class="btn-add">+</div>
                <span class="add-text">添加新地址</span>
              </div>
            </div>
            <div
              class="address-item address-card"
              :class="{'address-active':address.id==selectAdId}"
              v-for="(address,index) in userAddresses"
              :key="address.id"
              @click="chooseAddress(address.id)"
            >
              <div class="address-info">
                <h2 class="address-head">
                  <span class="user-name">{{address.contact_name}}</span>
                  <span class="address-tag">{{address.tag}}</span>
                </h2>
                <p class="user-phone">{{address.contact_phone}}</p>
                <p class="address-stright">{{address.district}}</p>
                <p class="detail-address">{{address.address}}</p>
                <div class="btn-action">
                  <!-- <span class="btn-delete" @click="deleteAddress(index,address.id)">删除</span> -->
                  <span class="btn-update" @click="showUpdateAddress(index)">修改</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <loading v-else></loading>
    </div>
    <transition name="fade-modal">
      <modal
        v-on:closeModal="onCloseModal"
        v-if="showModal"
        :modalWidth="660"
        :modalHeight="432"
        :modalTitle="'添加地址'"
        model="out-in"
        key="modal"
      >
        <new-address v-on:closeModal="onCloseModal" v-on:refreshAddresses="refreshAddresses"></new-address>
      </modal>
      <modal
        v-on:closeModal="onCloseModal"
        v-if="showModal1"
        :modalWidth="660"
        :modalHeight="432"
        :modalTitle="'修改地址'"
        model="out-in"
        key="modal1"
      >
        <div class="form-container">
          <div class="add-form clearfix">
            <div class="section section-head">
              <input type="text" placeholder="姓名" v-model="name" class="input-name" />
              <input type="text" placeholder="电话" v-model="phone" />
            </div>
            <div class="section section-district">
              <input type="text" v-model="district" placeholder="选择省/市/区/街道" v-on:focus="showSD" />
              <i class="iconfont iconarrowdown"></i>
              <search-district
                v-if="isShowSD"
                v-on:showChoose="showCD"
                v-on:closeForm="handleCloseForm"
              ></search-district>
              <choose-district v-if="isShowCD" v-on:closeCd="handleCloseCd" v-on:showSd="showSD"></choose-district>
            </div>
            <div class="section section-detail clearfix">
              <textarea
                name="detail"
                cols="30"
                rows="3"
                placeholder="详细地址，路名或街道名称，门牌号"
                v-model="address"
              ></textarea>
            </div>
            <div class="section section-tag">
              <input type="text" v-model="tag" placeholder="地址标签" />
            </div>
          </div>
          <div class="add-btn clearfix">
            <div class="add-btn-box">
              <button class="btn-add" @click="updateAddress()">确定</button>
              <button class="btn-back" @click="onCloseModal">取消</button>
            </div>
          </div>
        </div>
      </modal>
    </transition>
  </div>
</template>

<script>
import FetchApi from "@/api/fetchApi";
import Modal from "@/components/common/Modal";
import NewAddress from "./address/NewAddress";
import Loading from "@/components/common/Loading";
import ChooseDistrict from "./address/ChooseDistrict";
import SearchDistrict from "./address/SearchDistrict";
export default {
  components: {
    Modal,
    NewAddress,

    Loading,
    ChooseDistrict,
    SearchDistrict
  },
  data() {
    return {
      showModal: false, //显示模态框
      showModal1: false, //显示模态框
      deleteStatus: 0, //删除地址显示状态 0未请求 1正在请求 2请求成功 3删除失败
      isShowSD: false, //是否显示搜索街区框
      isShowCD: false, //是否显示手动选择街区框
      userAddresses: [], //
      selectAdId: 0,//选中地址id
      // v-model 绑定数据
      name: "",
      phone: "",
      district: "",
      address: "",
      tag: "",
      ad_id: "",//选择地址id
      /**********************************/
      
      
      /*************************************/
      //订单 form 数据
      address_id: '',//订单地址id integer
      items: [],//商品 array

      /***************************************/
    };
  },
  mounted() {
    //获取用户地址列表
    FetchApi.getUserAddresses()
      .then(res => {
        this.userAddresses = res.data;
      })
      .catch(e => {
        console.log(e);
      });

    //
  },
  methods: {
    onCloseModal() {
      this.showModal = false;
      this.showModal1 = false;
    },
    addAddress() {
      this.showModal = true;
    },
    
    showUpdateAddress(index) {
      let indexAddress = this.userAddresses[index];
      this.name = indexAddress.contact_name;
      this.phone = indexAddress.contact_phone;
      this.district = indexAddress.district;
      this.address = indexAddress.address;
      this.tag = indexAddress.tag;
      this.ad_id = indexAddress.id;
      this.showModal1 = true;
    },
    deleteAddress(index, id) {
      if (window.confirm("您确认要删除吗？")) {
        this.deleteStatus = 1;
        FetchApi.deleteUserAddress(id)
          .then(res => {
            if (res.status == 200) {
              this.deleteStatus = 2;
              this.userAddresses.splice(index, 1);
            }
          })
          .catch(e => {
            console.log(e);
            this.deleteStatus = 3;
            window.alert("删除失败，请重试！");
          });
      }
    },
    //更新地址列表
    refreshAddresses() {
      FetchApi.getUserAddresses()
        .then(res => {
          this.userAddresses = res.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    //修改地址信息
    updateAddress() {
      const data = {
        name: this.name,
        phone: this.phone,
        district: this.district,
        address: this.address,
        tag: this.tag,
        ad_id: this.ad_id
      };
      FetchApi.updateUserAddress(data)
        .then(res => {
          if (res.status == 200) {
            this.onCloseModal();
            this.refreshAddresses();
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    //选择收货地址
    chooseAddress(id){
      this.selectAdId = id;
      this.$emit('selectAddress',id);
    },
    handleCloseForm() {
      this.isShowSD = false;
    },
    handleCloseCd() {
      this.isShowCD = false;
    },
    showSD() {
      this.isShowSD = true;
      this.isShowCD = false;
    },
    showCD() {
      this.isShowSD = false;
      this.isShowCD = true;
    }
  }
};
</script>

<style lang="scss">
.user-addresslist-page {
  a.active {
    color: #ff6700;
  }
  .address-list-box {
    background-color: #fff;
    padding: 0 20px;
    .address-head {
      h1 {
        font-size: 18px;
        line-height: 68px;
        font-weight: 400;
        color: #333;
        span {
          font-size: 12px;
          margin-left: 10px;
        }
        a {
          font-size: 12px;
          color: #ff6700;
        }
      }
    }
    .address-content {
      .address-box {
        margin: 0px auto;
        .address-list {
          .add-address {
            div.btn-add-box {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%, -50%, 0);
              .btn-add {
                background-color: #bbb;
                font-size: 30px;
                color: #fff;
                width: 32px;
                height: 32px;
                border-radius: 17px;
                line-height: 30px;
                text-align: center;
                margin-left: 20px;
              }
              span.add-text {
                display: block;
                padding-top: 10px;
                color: #bbb;
              }
            }
            &:hover {
              .btn-add-box {
                .btn-add {
                  background-color: #999;
                }
              }
            }
          }
          .address-item {
            width: 268px;
            height: 178px;
            position: relative;
            cursor: pointer;
            border: 1px solid #e0e0e0;
            margin-right: 17px;
            margin-bottom: 20px;
            transition: all 0.4s ease;
            -webkit-transition: all 0.4s ease;
            float: left;
             
          }
          //选择地址样式
          div.address-active{
            border: 1px solid #ff6700;
          }
          
          .address-card {
            &:hover {
              .address-info {
                .btn-action {
                  display: block;
                }
              }
            }

            .address-info {
              padding: 15px 24px 0;
              .address-head {
                height: 30px;
                line-height: 30px;
                text-align: center;

                .user-name {
                  float: left;
                  font-size: 18px;
                  color: #333;
                  font-weight: 400;
                }
                .address-tag {
                  float: right;
                  font-weight: normal;
                }
              }
              p {
                font-size: 14px;
                color: #757575;
                padding: 2px 0;
              }
              .btn-action {
                position: absolute;
                right: 24px;
                bottom: 10px;
                display: none;
                .btn-delete,
                .btn-update {
                  color: #ff6700;
                }
                .btn-update {
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  //修改表单css样式
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
  .fade-modal-enter-active {
    animation: fade-modal-animation 0.4s;
  }
  .fade-modal-leave-active {
    animation: fade-modal-animation 0.4s reverse;
  }
  @keyframes fade-modal-animation {
    0% {
      opacity: 0;
      transform: translateY(-10px);
      //transform: scale(0);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
      //transform: scale(1);
    }
  }
}
</style>