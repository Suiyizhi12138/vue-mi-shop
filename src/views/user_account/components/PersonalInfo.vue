<template>
  <div class="personal-info-page">
    <div class="content-section">
      <div class="section-head">
        <h2 class="section-title">个人信息</h2>
      </div>
      <div class="section-form clearfix">
        <div class="form-box clearfix" v-if="isForm">
          <ul class="show-list clearfix">
            <li class="list-item item-avatar">
              <div class="title">头像</div>
              <div class="content">
                <a href="javascript:" @click="showSelectModal" class="btn-avatar">
                  <img :src="userAvatar" alt="avatar" />
                  <span class="arrow-right">></span>
                </a>
                <input type="hidden" name="avatar" id v-model="userAvatar" />
              </div>
            </li>
            <li class="list-item item-nickname">
              <div class="title">昵称</div>
              <div class="content">
                <input type="text" name="nickname" id v-model="nickName" />
              </div>
            </li>
            <div class="verify-message" v-show="!nickName">{{"昵称不能为空"}}</div>
            <li class="list-item item-sex">
              <div class="title">性别</div>
              <div class="content">
                <input type="radio" name="0" id v-model="sexChecked" />
                <span
                  class="btn-sex-male"
                  @click="checkMale"
                  :class="{'radio-checked':userSex=='男'}"
                ></span>
                <span>男</span>
                <input type="radio" name="1" id v-model="sexChecked" />
                <span
                  class="btn-sex-female"
                  @click="checkFemale"
                  :class="{'radio-checked':userSex=='女'}"
                ></span>
                <span>女</span>
              </div>
            </li>
            <li class="list-item item-user-id">
              <div class="title">小米ID</div>
              <div class="content">
                <span class="user-id">{{userPersonalInfo.user_id}}</span>
              </div>
            </li>
            <li class="list-item item-bank-card">
              <div class="title">银行卡</div>
              <div class="content">
                <a href="https://www.mipay.com/#/" v-if="!isBindBankCard" class="card-link">点击查看</a>
                <span v-else></span>
              </div>
            </li>
            <li class="list-item item-country">
              <div class="title">国家/地区</div>
              <div class="content">
                <span class="country">{{userPersonalInfo.country}}</span>
                <input type="hidden" name="country" v-model="country" />
              </div>
            </li>
          </ul>
          <a href="javascript:" @click="submitForm" class="btn-edit">保存</a>
        </div>
        <div class="show-box clearfix" v-if="!isForm">
          <ul class="show-list clearfix">
            <li class="list-item item-avatar">
              <div class="title">头像</div>
              <div class="content">
                <img  :src="userPersonalInfo.avatar" alt="this is a avatar" />
                
              </div>
            </li>
            <li class="list-item item-nickname">
              <div class="title">昵称</div>
              <div class="content">
                <span v-if="!userPersonalInfo.nick_name" class="unset">未设置昵称</span>
                <span v-else>{{userPersonalInfo.nick_name}}</span>
              </div>
            </li>
            <li class="list-item item-sex">
              <div class="title">性别</div>
              <div class="content">
                <span class="sex-text unset" v-if="userPersonalInfo.sex===null">未设置性别</span>
                <span class="sex-text" v-else>{{userSex}}</span>
              </div>
            </li>
            <li class="list-item item-user-id">
              <div class="title">小米ID</div>
              <div class="content">
                <span class="user-id">{{userPersonalInfo.user_id}}</span>
              </div>
            </li>
            <li class="list-item item-bank-card">
              <div class="title">银行卡</div>
              <div class="content">
                <a href="https://www.mipay.com/#/" v-if="!isBindBankCard" class="card-link">点击查看</a>
                <span v-else></span>
              </div>
            </li>
            <li class="list-item item-country">
              <div class="title">国家/地区</div>
              <div class="content">
                <span class="country">{{userPersonalInfo.country}}</span>
              </div>
            </li>
          </ul>
          <a href="javavscript:" @click="showForm" class="btn-edit">编辑</a>
        </div>

        <transition name="fade-modal">
          <modal
            v-on:closeModal="onCloseModal"
            v-if="showModal"
            :modalWidth="450"
            :modalHeight="350"
            :modalTitle="'设置头像'"
            model="out-in"
            key="modal1"
          >
            <div class="modal-btn-box">
              <input type="file" name="file" id="file" ref="fileRef" v-on:change="changeFile" />
              <a href="javascript:" class="btn-upload">上传头像</a>
              <p class="pic-tips">图片格式jpg、png、jpeg，大小不超过10MB</p>
            </div>
          </modal>
          <modal
            v-on:closeModal="onCloseModal"
            v-if="showModal1"
            :moddalWidth="450"
            :modalHeight="450"
            model="out-in"
            key="modal2"
          >
            <div class="cropper-content">
              <!-- 头像裁剪组件 -->
              <div class="cropper-box">
                <div class="cropper">
                  <vue-cropper
                    ref="cropper"
                    :img="blobUrl"
                    :outputSize="option.outputSize"
                    :outputType="option.outputType"
                    :info="option.info"
                    :canScale="option.canScale"
                    :autoCrop="option.autoCrop"
                    :autoCropWidth="option.autoCropWidth"
                    :autoCropHeight="option.autoCropHeight"
                    :fixed="option.fixed"
                    :fixedNumber="option.fixedNumber"
                    :full="option.full"
                    :fixedBox="option.fixedBox"
                    :canMove="option.canMove"
                    :canMoveBox="option.canMoveBox"
                    :original="option.original"
                    :centerBox="option.centerBox"
                    :height="option.height"
                    :infoTrue="option.infoTrue"
                    :maxImgSize="option.maxImgSize"
                    :enlarge="option.enlarge"
                    :mode="option.mode"
                    @realTime="realTime"
                    @imgLoad="imgLoad"
                  ></vue-cropper>
                </div>
                <!--底部操作工具按钮-->
                <div class="footer-btn">
                  <a
                    href="javascript:"
                    class="btn btn-update"
                    style="backgroundColor:#bbb"
                    @click="changeModal"
                  >重新上传</a>
                  <a href="javascript:" class="btn btn-default" @click="changeScale(2)">放大</a>
                  <a href="javascript:" class="btn btn-default" @click="changeScale(-2)">缩小</a>
                  <a
                    href="javascript:"
                    class="btn btn-upload"
                    style="backgroundColor:#ff6700"
                    @click="uploadImg('blob')"
                  >上传头像</a>
                </div>
              </div>
              <!-- //预览效果图 -->
              <!-- <div class="show-preview">
      <div :style="previews.div" class="preview">
        <img :src="previews.url" :style="previews.img">
      </div>
              </div>-->
            </div>
          </modal>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/common/Modal";
import { VueCropper } from "vue-cropper";
import FetchApi from "@/api/fetchApi";

export default {
  components: {
    Modal,

    VueCropper
  },
  data() {
    return {
      isForm: false, //是否显示编辑表单
      isBindBankCard: false,
      showModal: false,
      showModal1: false, //是否显示弹窗
      blobUrl: "", //本地转化图片地址
      userSex: "", //用户中文性别
      userPersonalInfo: "", //obj 用户信息
      userAvatar: '',
      
      sexChecked: "", //input model String
      nickName: "", //input model String 用户昵称
      country: "中国", //input model String
      
      blobData: "", //二进制裁剪图片数据
      //vue-cropper 数据

      option: {
        //img: '',             //裁剪图片的地址
        outputSize: 1, //裁剪生成图片的质量(可选0.1 - 1)
        outputType: "jpg", //裁剪生成图片的格式（jpeg || png || webp）
        info: true, //图片大小信息
        canScale: true, //图片是否允许滚轮缩放
        autoCrop: true, //是否默认生成截图框
        //autoCropWidth: ,  //默认生成截图框宽度
        //autoCropHeight: , //默认生成截图框高度
        fixed: true, //是否开启截图框宽高固定比例
        fixedNumber: [1, 1], //截图框的宽高比例
        full: false, //false按原比例裁切图片，不失真
        fixedBox: false, //固定截图框大小，不允许改变
        canMove: false, //上传图片是否可以移动
        canMoveBox: true, //截图框能否拖动
        original: false, //上传图片按照原始比例渲染
        centerBox: true, //截图框是否被限制在图片里面
        height: true, //是否按照设备的dpr 输出等比例图片
        infoTrue: false, //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 3000, //限制图片最大宽度和高度
        enlarge: 1, //图片根据截图框输出比例倍数
        mode: "contain" //图片默认渲染方式
      }
    };
  },
  computed: {
    userInfo(){
      return this.$store.getters.userInfo;
    }
  },
  created() {
    //获取用户个人信息
    FetchApi.getPersonalInfo()
      .then(res => {
        this.userPersonalInfo = res.data;
        this.nickName = this.userPersonalInfo.nick_name;
        this.sexChecked = this.userPersonalInfo.sex;
        this.userAvatar = this.userPersonalInfo.avatar;
        if (this.userPersonalInfo) {
          if (this.userPersonalInfo.sex === 1) {
            this.userSex = "女";
          }
          if (this.userPersonalInfo.sex === 0) {
            this.userSex = "男";
          }
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    showForm() {
      this.isForm = true;
    },
    //提交表单 更新用户信息
    submitForm() {
      const formData = new FormData();
      if(this.blobData){
        formData.append("avatar", this.blobData, "avatar.jpg");
      }
      
      formData.append("nick_name", this.nickName);
      formData.append("sex", this.sexChecked);
      formData.append("country", this.country);

      FetchApi.updatePersonalInfo(formData)
        .then(() => {
          //console.log(res.data);

          window.location.reload();
        })
        .catch(e => {
          console.log(e);
          this.$toast("系统错误 请重试!");
        });
    },
    changeFile(e) {
      this.showModal = false;
      this.showModal1 = true;
      // 选中图片
      let file = this.$refs.fileRef;
      console.log(file);
      //判定选择文件格式 不是则报错
      if (!/\.(png|jpg|jpeg|PNG|JPG)/.test(e.target.value)) {
        window.alert("图片格式要求 jpg jpeg png");
        return false;
      } else {
        this.blobUrl = window.URL.createObjectURL(file.files[0]);
      }
    },
    //change event
    showSelectModal() {
      this.showModal = true;
    },
    //关闭所有弹窗
    onCloseModal() {
      console.log("closemodal");
      this.showModal = false;
      this.showModal1 = false;
    },
    //关闭上传modal 回到选择modal
    changeModal() {
      this.showModal = true;
      this.showModal1 = false;
    },
    //选择性别
    checkMale() {
      this.userSex = "男";
      this.sexChecked = 0;
    },
    checkFemale() {
      this.userSex = "女";
      this.sexChecked = 1;
    },

    //

    //初始化函数
    imgLoad(msg) {
      console.log("工具初始化函数=====" + msg);
    },
    //图片缩放
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    //向左旋转
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    //向右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    //实时预览函数
    realTime(data) {
      this.previews = data;
    },

    //上传图片++++++++++++++++++++++++++++++++++++++++++++++++

    uploadImg(type) {
      if (type === "blob") {
        //获取截图的blob数据
        this.$refs.cropper.getCropBlob(data => {
          this.blobData = data;

          this.userAvatar = window.URL.createObjectURL(data);
          this.onCloseModal();
          // console.log(formData);
          // FetchApi.uploadAvatar(formData)
          //   .then(res => {
          //     if (res) {

          //     }
          //   })
          //   .catch(e => {
          //     console.log(e);
          //   });
          //调用axios上传
          //let {data: res} = await _this.$http.post('/api/file/imgUpload', formData)
          // if(res.code === 200){
          //   _this.$message({
          //     message: res.msg,
          //     type: "success"
          //   });
          //   let data = res.data.replace('[','').replace(']','').split(',');
          //   let imgInfo = {
          //     name : _this.Name,
          //     url : data[0]
          //   };
          //   _this.$emit('uploadImgSuccess',imgInfo);
          // }else {
          //   _this.$message({
          //     message: '文件服务异常，请联系管理员！',
          //     type: "error"
          //   });
          // }
        });
      }
    }
  }
};
</script>

<style lang="scss">
.content-section {
  background-color: #fff;
  .section-head {
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: left;

    padding: 13px 20px;
    h2 {
      font-size: 19px;
      color: #333;
      padding-left: 5px;
      border-left: 4px solid #333;
    }
  }
  .section-form {
    padding-bottom: 60px;
    .show-box {
      .show-list {
        .list-item {
          height: 100px;
          box-sizing: border-box;
          padding: 20px;
          color: #333;
          font-size: 17px;

          .title {
            width: 114px;
            height: 60px;
            line-height: 60px;
            float: left;
            text-align: center;
          }
          .content {
            height: 60px;
            line-height: 60px;
            text-align: center;
            float: left;
            .unset {
              color: #ff6700;
            }
            a.card-link {
              color: #ff6700;
            }
          }
        }
        .item-avatar {
          .content {
            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
            }
          }
        }
      }
      a.btn-edit {
        display: inline-block;
        width: 360px;
        height: 60px;
        margin-left: 134px;
        color: #fff;
        font-size: 18px;
        padding: 20px 0;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: #ff5c00;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover {
          background-color: #ff8840;
        }
      }
    }
    .form-box {
      .show-list {
        .list-item {
          height: 100px;
          box-sizing: border-box;
          padding: 20px;
          color: #333;
          font-size: 17px;

          .title {
            width: 114px;
            height: 60px;
            line-height: 60px;
            float: left;

            font-size: 17px;
          }
          .content {
            height: 60px;
            line-height: 60px;
            text-align: center;
            float: left;
            font-size: 17px;
            .unset {
              color: #ff6700;
            }
            a.card-link {
              color: #ff6700;
              font-size: 17px;
            }
            span {
              font-size: 17px;
            }
          }
        }
        .item-avatar {
          .content {
            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              float: left;
            }
            a.btn-avatar {
              cursor: pointer;
              width: 360px;
              height: 60px;

              position: absolute;
            }
            span.arrow-right {
              font-size: 20px;
              color: #bbb;
              float: right;
            }
          }
        }
        .item-nickname {
          input[type="text"] {
            width: 360px;
            height: 60px;
            background-color: #fcf2f3;
            border: none;
            outline: none;
            padding: 20px;
            box-sizing: border-box;
            font-size: 17px;
            color: #333;
          }
        }

        .item-sex {
          position: relative;
          input[type="radio"] {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            opacity: 0;
          }
          .btn-sex-male,
          .btn-sex-female {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid #bbb;
            vertical-align: middle;
            margin-right: 5px;
            cursor: pointer;
            transition: all 0.4s ease-in;
          }
          .radio-checked {
            width: 12px;
            height: 12px;
            border: 5px solid #ff5c00;
          }
        }

        .verify-message {
          font-size: 12px;
          margin-left: 134px;
          color: #ff6700;
          margin-top: -5px;
        }
      }
      a.btn-edit {
        display: inline-block;
        width: 360px;
        height: 60px;
        margin-left: 134px;
        color: #fff;
        font-size: 18px;
        padding: 20px 0;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: #ff5c00;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover {
          background-color: #ff8840;
        }
      }
    }
  }
  .modal-btn-box {
    a.btn-upload,
    input[type="file"] {
      width: 360px;
      height: 60px;
      color: #fff;
      background-color: #ff6700;
      display: block;
      border-radius: 4px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      line-height: 60px;
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      &:hover {
        background-color: #ff8840;
      }
    }
    input[type="file"] {
      z-index: 999;
      opacity: 0;
      cursor: pointer;
    }
    p.pic-tips {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #666;
      margin-top: 160px;
    }
  }
  .cropper-content {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    .cropper-box {
      flex: 1;
      width: 100%;
      .cropper {
        width: auto;
        height: 300px;
      }
    }

    .show-preview {
      flex: 1;
      -webkit-flex: 1;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      .preview {
        overflow: hidden;
        border: 1px solid #67c23a;
        background: #cccccc;
      }
    }
  }
  .footer-btn {
    margin-top: 30px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    .scope-btn {
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      padding-right: 10px;
    }
    .upload-btn {
      flex: 1;
      -webkit-flex: 1;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
    }
    .btn {
      outline: none;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: 0;
      -webkit-transition: 0.1s;
      transition: 0.1s;
      font-weight: 500;
      padding: 8px 15px;
      font-size: 12px;
      border-radius: 3px;
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
      margin-right: 10px;
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
      //transform: translateY(-10px);
      transform: scale(0);
    }

    100% {
      //transform: translateY(0);
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>