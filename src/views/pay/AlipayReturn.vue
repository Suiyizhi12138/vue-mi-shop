<template>
  <div class="alipay-return-page">
    <h1>alipay return page</h1>
  </div>
</template>

<script>
import FetchApi from '../../api/fetchApi'
export default {
  mounted(){
    FetchApi.getAlipayReturn()
    .then((res)=>{
      console.log(res.data);
    })
  }
}
</script>

<style lang="scss">

</style>