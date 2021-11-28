<template>
  <div>
    <div class="express-form">
      <div class="form-section">
        <label for="ordernumber">服务工单号<span class="mi-star">*</span></label><br>
        
        <input type="text" class="order-number" placeholder="必填">
      </div>
      <div class="form-section">
        <label for="ordernumber1">快递报销码<span class="mi-star">*</span></label><br>
        <input type="text" placeholder="必填">
      </div>
      <div class="form-section">
        <label for="verifycode">验证码<span class="mi-star">*</span></label><br>
        <div class="last-box clearfix">
          <input type="text" placeholder="请输入验证码">
          <span class="verifycode">{{verifyCode}}</span>
          <a  class="btn-change" @click="changeVerifyCode">换一个</a> 
        </div>
        
      </div>
      <a href="javascript:" class="btn-submit">立即领取</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      verifyCode: ''
    }
  },
  mounted(){
    this.createVerifyCode();
  },
  methods:{
    createVerifyCode(){
      this.verifyCode =  Math.floor(Math.random()*10000);
    },
    changeVerifyCode(){
      this.createVerifyCode();
    }

  }
}
</script>

<style lang="scss">
  .express-form{
    .form-section{
      margin: 14px 0;
     
      label{
        span.mi-star{
          color: #f84858;
        }
      }
      input[type="text"]{
        width: 210px;
        height: 40px;
        padding: 16px 18px;
        box-sizing: border-box;
        margin-top: 7px;
        margin-bottom: 14px;
        outline: none;
        color: #bbb;

      }
      span.verifycode{
        color: rgb(58,168,45);
        display: block;
        width: 120px;
        height: 38px;
        border: 1px solid rgb(58,168,45);
        
      }
      .last-box{
       input,span{
         float: left;
       }
       a.btn-change{
         display: block;
         width: 80px;
         height: 40px;
         line-height: 40px;
         text-align: center;
         float: left;
         margin-left: 6px;
         margin-top: 7px;
       }
       span.verifycode{
         margin-top: 7px;
         margin-left: 20px;
         line-height: 40px;
         text-align: center;

       }
      }
    }
    .btn-submit{
      display: block;
      color: #fff;
      background-color: #ff6700;
      width: 160px;
      height: 40px;
      line-height: 40px; 
      text-align: center;
    }
  }
</style>