<template>
  <div class="verify-phone-page">
    <div class="verify-container clearfix">
      <div class="verify-content clearfix">
        <div class="verify-box clearfix">
          <div class="verify-header">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAA3NCSVQICAjb4U/gAAABiVBMVEX/////agD/agD/agD/agD/agD/agD/agD/agD/agD/agD/agD/agD/agD/agD//////fz//Pn/+/f/+fX/9/L/9e3/9e//8un/8+v/8OX/69//5tf/5dX/5NP/48//4c7/4M3/4Mn/3sn/3cf/28T/173/1bz/1br/1bf/07X/0rj/0bH/0bT/z7P/zq//zaz/zKn/y6n/yqb/yaf/yKX/xZ3/xJv/w5n/wZf/v5X/vpH/vZH/u4//t4r/tIX/s4P/sX//sH3/rXv/rHb/qHH/p3D/o2n/omf/oWT/n2L/nmD/nl//nV3/nFv/m1j/mlf/llD/kkz/k0j/kk7/kUr/kUb/j0f/jUT/jUP/iz3/iUL/iTn/iDf/hzr/hTT/hTb/gzH/gzj/gC3/gS//gCr/fij/fCj/eyP/eiT/eST/eCH/dxz/diD/dRz/cxX/cxn/cBH/bxn/bxD/bAz/bQn/agD/aQf/aQn/ZgD/ZgT/ZQX/ZQb/YgD/YgP/YAD/XgD/XAD/WgD/UwDc4NsiAAAAg3RSTlMAESIzRFVmd4iZqrvM3e7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////z6LJ9sAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAyMS4zLjMx1VlJWAAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAdoSURBVHic7Z35e9REGMeb+5xsQbFKBZWCihcC2haoini1eN+3olIVvKpYDRqT1b/cpOnuJpkk+2YyuzPv8/T7W5807fvJvO/MO/fCAi8pqqbrhmnZjuv5PgmCYHes9Afi+57r2JZp6LqmKtz+bV8pmm7kNhNSNrpJGQwhOY2Rsoiz3LAcjwAsnsJDPMcytLkWiaKZjt/b8gqH75jzodAsl/C1fSLiWtpMjVcMZ2bGjyEcY0YFoRguZ7dpUuDOgEGzZ/7tiyI2X1/SvXla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"
              alt
            />
          </div>
          <div class="verify-middle">
            <h1 class="verify-title">小米账号安全验证</h1>
            <h2 class="verify-subtitle">为确认身份，我们仍需验证您的安全手机</h2>
            <p class="tip-text">点击发送短信按钮，将会发送一条有验证码的短信至手机</p>
            <p class="hide-phone">+86 150****6440</p>
          </div>

          <div class="verify-footer">
            <a href="javascript:" class="btn-send" @click="sendTip">发送短信</a>
            <p class="reset-text">
              <span>手机号或邮箱已经停用？</span>
              <a
                href="https://account.xiaomi.com/pass/retrieve/prompt?externalId=2596037991&type=bind"
                class="reset-link"
              >去申请重置</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendTip(){
      window.alert('暂不支持短信验证 抱歉！');
    }
  }
};
</script>

<style lang="scss">
.verify-container {
  width: 100%;
  min-height: 100%;
  height: auto;
  padding-bottom: 100px;
  background-color: #f5f5f5;
  .verify-content {
    width: 854px;
    height: auto;
    background-color: #fff;
    margin: 0 auto;
    color: #666;
    .verify-box {
      width: 350px;
      height: 485px;
      margin: 0 auto;
      .verify-header {
        margin: 30px 0;
        height: 40px;
        line-height: 40px;
        text-align: center;
        img {
          width: 40px;
          height: 40px;
          margin: 0 auto;
        }
      }
      .verify-middle{
        h1.verify-title{
          font-size: 30px;
          font-weight: normal;
          color: #333;
          line-height: normal;
          text-align: center;
          margin-bottom: 30px;
        }
        h2.verify-subtitle{
          color: #333;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .hide-phone{
          color: #ff6700;
        }

      }
      .verify-footer{
        margin-top: 60px;
        .btn-send{
          width: 350px;
          height: 40px;
          display: block;
          line-height: 40px;
          text-align: center;
          color: #fff;
          background-color: #ff6700;
          margin-bottom: 20px;
          
        }
        a.reset-link{
          color: #46639c;
          text-decoration: underline;
        }

      }
    }
  }
}
</style>