<template>
  <div id="app">
    <!-- 添加v-if解决router-link不刷新问题  添加可以使路由跳转可以刷新-->
    <router-view v-if="routerAlive" :key="this.$route.path"/>
  </div>
</template>

<style lang="scss">
@import "./assets/app.scss";
</style>
<script>

export default {
  data(){
    return {routerAlive: true}
  },
  created() {
    //获取用户信息
    if (localStorage.getItem("_user_token")) {
      if(!this.$store.getters.userInfo){
        this.$store.dispatch("getUserInfo");
      }
      if(!this.$store.getters.personalInfo){
        
        this.$store.dispatch('getPersonalInfo');
      }
      //获取购物车信息
      if(!this.$store.getters.cartItems){
         this.$store.dispatch('getCartItems');
      }
    }
  }
};
</script>

