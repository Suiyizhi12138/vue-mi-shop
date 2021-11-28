<template>
  <div class="common-head">
        <h1>{{title}}<span>{{subTitle}}</span><a href="javascript">{{subLink}}</a></h1>
      </div>
</template>

<script>
export default {
  props:{
    subTitle: String,//副标题
    subLink: String,//副标题链接
    title: String,//标题
  }

}
</script>

<style lang="scss">
  .common-head{
      h1{
        font-size: 30px;
        line-height: 68px;
        font-weight: 400;
        color: #757575;
        span{
          font-size: 12px;
          margin-left: 10px;
        }
        a{
          font-size: 12px;
          color: #ff6700;
          
        }
      }
    }
</style>