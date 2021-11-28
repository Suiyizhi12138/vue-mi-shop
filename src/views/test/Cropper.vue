<template>
  <div class="cropper-page">
    <div class="img-box">
      <img :src="headerImg" alt="avatar" class="show-avatar" />
      <br />
      
    </div>
    <div class="modal-box">
      <input type="file" name="headerimg" id="inputimg" v-on:change="changeUrl" ref="fileRef" />
    </div>
    <!-- 裁剪框 -->
    <div class="cropper-box">
      <div class="cropper-content">
        <img :src="boardImg" alt="boardImg" id="board-img" />
        <div class="btn-box">
          <a href="javascript:" class="btn-primary">确定</a>
          <a href="javascript:" class="btn-alert">取消</a>
        </div>
      </div>
    </div>
     <!-- 遮罩层 -->
    <div class="cropper-back" v-show="isShowBack"></div>
  </div>
</template>

<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
  data() {
    return {
      //被裁剪图片
      boardImg: "https://img1.baidu.com/it/u=1500793427,64593373&fm=26&fmt=auto",
      cropper: null,
      isShowBack: false,
      
      //显示头像url
      headerImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAAASFBMVEUAAADe3t7d3d3c3Nze3t7d3d3h4eHg4ODf39/e3t7e3t7f39/e3t7e3t7g4ODj4+Pe3t7d3d3Y2Nj////f39/19fXu7u7m5ubGxM7zAAAAEnRSTlMA0Oy/xuAWQlOkjWuB9DQosmJ2qoxzAAAFLUlEQVR42uzWW47jMAxEURdJya8k7ibu/tc6H8F89sSJH/IAfVZQEFmEul9XVft5GkcPFQMrCh/Hae5rdx11uI0yfmAab0P7uHWY9DdQeISkYplWJEV4yABAU8uw/TPkXe6y/IHJXfdn2L5rYJkMQK5cQS4Am5buVHUWUFz5BnkBNJ+3A/0XYK58m9yAr3NWYBAQkR+KADR0RxsE5pYbmNvhUb8LmOdmblC+u6P0guK5Cy+gY3a1jlAidxMFxtrtbjbunrvyOzZ3+3oIouTOSoAe3Y5uYJEHCIPbftvp4HkQB687ld0w5WFkWL/T2GV5INMe468BngdziI3jXwqmPJyMsmy6SoYsT2DCHptqpDyJNlRqgMjTBAzdR2bwPJHD/D/k/DTpAJ4n8w+m34Pn6Rz6t++SZwP+5pVajMgmAlu61WpB2YgotVsrUDYjYv1/ySybMeO2uvDKhrSy+tXwbMqxNWvqKBsTfvUFXb+mD9o/aKbg1d0Xnhfg6NWXqfncn4z5ReMjLyH+3fzxKjn/MGc2ugnDMBBW0oYWtAqwL+77v+mkIWZKVDrZsbTvCU7ns50fohHnT6N+KeQDq/ywgnyUBVNYJ0H4BTFqPe6nO1x+ovIb1SW14L4jtFgTqjJ7Sh1Rdm5JHkNX3mElMwVz94QK7yJkYj+ls2XWq84IpRlzV0O17v7qH1s62Q0FHwAyktHO0pvZUPAhZGTArdnysDmqAY2IaQZOzbFpJANqaEzxx+YQlcxChTnO0vG9na72VmIlIKUZ143Qi7WVdDTFjKgBl41Qwxu4Vj6y9gl5O0QLGWGOrX3B5K18vNC29slcebASMqAS0mbak414ofQ682eDodr0sW1PCbMrovGOakhdEY0X2ob0hIWsxAulBSdPROPHUxvSLwxkpvKfqGRm+H2DPFuExu96FXq295KCsIi23ZSRyU4Nrjxl5GfTm3TGn/BV6aPtJyTyUGMMVRImvS45QJihenHSBepBok7NukR1OrmQIJ06n3q9h9eYgOorea+vOtQPOkFOEoZ+n94SUHcVOupicrP2Xp3taioo1AEINwioAwXFt0FbqXUTTp/MdocC1A2I1IdIVekHeAr953xTby47DoMwFJWBTlI6i5FyA///p7OYh5X0hS8oda3uewRYBPv4FzR4adTei4Dwn0yu4y+ZxINK8CgE8nrLqQ00ebFdnoFGb036W6EfJWcfGslz0MyBAqj2H/NPEZl7iuhlSQRxsSZcuMcdytIVVlTBRD2XsXSHjTTggyhAsJw8aUAgSjo0J08qEKZIxmYR/+KLOBNlx7oMimoA/SQKufSC8ksqmO2lcZBY/CnV0rgpm8o40GLJJW3f+AWNyERDbB0HulqOqLYY/YJutBKBeAUVyLYN7hU0Im/FAq+gJ0w7VcMnqCDs5RefoBF5rxP5BFWdSAUtj6AJcq28ebyZEi43JEJ/oCoRbrRMf19PEV+s6DoOtC2VJkIdHrv3pWlBhZax0QNnX9CZ19vrGM5KLagODBy1+aXtmp+7RjDKQZwJp86hlnrEvutQC3VK+SqZuUYWISMGr1DKSkRppPwZvHr/Ubb3GQ78bu8OagAAYSAIQs4C/rXyboKADmltNDfLzC2dAaszCWZG1i0eefvkJwiAoRUWg1U4/IcDqjBEjYP+OIySA1M51JeDpzkcnQP8OWSig1A6rKcDpUL0rIP5OjwyBE47hDeEojvMPAT3QykEKC4B5TqgAAqUlJEiPa/sUWr2KF2yR1JIikpzzZW7KcXAHMjZNQQAAAAASUVORK5CYII=",
    };
  },
  mounted(){
    //初始化Cropper
    const img = document.getElementById('board-img');
    this.cropper = new Cropper(img,{
      aspectRatio: 1,
      viewMode: 1,
      ready: ()=>{
        console.log('cropper ready callback');
      }
     
    })
  },
  methods:{
    changeUrl(){
      console.log('change url');
      const file = this.$refs.fileRef;
      const blobUrl = window.URL.createObjectURL(file.files[0]);

      this.boardImg = blobUrl;
      //更新裁剪图片链接
      if(this.cropper){
        this.cropper.replace(this.boardImg);
        
      }
      

      console.log(this.boardImg);
    },
    showBack(){
      this.showBack = true;
    },
    initCropper(){

    }
  }
};
</script>

<style lang="scss">
.cropper-page {
  .img-box {
    margin: 20px;
    img {
      margin-bottom: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .cropper-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

  }
  .modal-box{
    left: 0;
  }
  .cropper-box{
    display: block;
    z-index: 99;
    .cropper-content{
      .btn-box{
        margin-top: 20px;
      }
      .btn-primary,.btn-alert{
        display: block;
        width: 120px;
        height: 40px;
        color: #fff;
        background-color: #ff6700;
        float: left;
        line-height: 40px;
        text-align: center;
        border-radius: 2px;

      }
      .btn-alert{
        margin-left: 20px;
      }
    }
  }
  .modal-box{
    display: block;
    z-index: 88;
  }
  .cropper-back{
    width: 100%;
    height: 9999px;
    background-color: rgba(0,0,0,.4);
    position: fixed;
    top: 0px;
    display: none;
  }
}
.img-box {
  margin: 20px;
  img {
    margin-bottom: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
</style>

