<template>
  <div class="login-form" v-on:keyup.enter="handleLogin()">
    <loading v-if="userLoginStatus==1"></loading>
    <form v-else>
      <input
        autofocus
        type="text"
        name="account"
        v-model="userAccount"
        placeholder="输入邮箱"
        class="text"
        id="user-account"
        autocomplete="username"
        @input="checkMail()"
      />
      <p class="alert-message">{{accountAlertMsg}}</p>
      <input
        type="password"
        name="password"
        id="password"
        v-model="userPassword"
        placeholder="输入密码"
        class="text"
        autocomplete="current-password"
        @input="checkPassword()"
      />
      <p class="alert-message">{{passwordAlertMsg}}</p>
      <input type="button" value="登录" class="input-btn" @click="handleLogin()" />
    </form>
    <div class="login-options"></div>
  </div>
</template>

<script>
import FetchAPI from "@/api/fetchApi";
import axios from "axios";
import Loading from "@/components/common/Loading";
import Config from "@/config/env";
export default {
  components: {
    Loading
  },
  data() {
    return {
      userAccount: "",
      userPassword: "",
      accountAlertMsg: "",
      passwordAlertMsg: "",
      isAccount: "",
      isPassword: "",
      userLoginStatus: 0 //loading显示状态  0:（执行前）不显示 1:（执行）显示 2:（执行后）成功
    };
  },
  computed: {},
  methods: {
    handleLogin() {
      this.userLoginStatus = 1;
      let checkMail = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let checkPassword = /^(\w){6,20}$/;
      //前端验证
      if (this.userAccount == "") {
        this.accountAlertMsg = "请输入邮箱";
        return;
      } else if (!checkMail.test(this.userAccount)) {
        this.accountAlertMsg = "邮箱格式不正确";
        return;
      } else if (this.userPassword == "") {
        this.passwordAlertMsg = "请输入密码";
        return;
      } else if (!checkPassword.test(this.userPassword)) {
        this.passwordAlertMsg = "密码只能由6-20个字母、数字、下划线组成";
        return;
      } else {
        localStorage.removeItem("_user_token");
        FetchAPI.login(this.userAccount, this.userPassword)
          .then(res => {
            if (res.status == 200) {
              localStorage.setItem("_user_token", res.data.access_token);
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.access_token;
              this.userLoginStatus = 2;
              window.location.href =
                Config.DOMAIN +
                "/user/user_account/" +
                res.data.user_id +
                "/personalInfo";
            }
          })
          .catch(e => {
            console.log(e);
            this.$toast("用户邮箱或密码错误");
            this.userLoginStatus = 3;
          });
      }
    },
    checkMail() {
      let checkMail = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

      //前端验证
      if (this.userAccount == "") {
        this.accountAlertMsg = "请输入邮箱";
      } else if (!checkMail.test(this.userAccount)) {
        this.accountAlertMsg = "邮箱格式不正确";
      } else {
        this.accountAlertMsg = "";
      }
    },
    checkPassword() {
      let checkPassword = /^(\w){6,20}$/;
      if (this.userPassword == "") {
        this.passwordAlertMsg = "请输入密码";
      } else if (!checkPassword.test(this.userPassword)) {
        this.passwordAlertMsg = "密码只能由6-20个字母、数字、下划线组成";
      } else {
        this.passwordAlertMsg = "";
      }
    }
  }
};
</script>

<style lang="scss">
.login-form {
  position: absolute;
  width: 360px;
  height: 240px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    box-sizing: border-box;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
  input.text {
    text-align: left;
    padding-left: 20px;
    background-color: rgb(252, 242, 242);
  }
  .input-btn {
    cursor: pointer;
    color: #fff;
    background-color: #f06c11;
    &:hover {
      background-color: #f04645;
    }
    line-height: 60px;
    height: 60px; 
  }
  .alert-message {
    color: #f04645;
    font-size: 12px;
  }
}
</style>