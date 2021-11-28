<template>
  <div>
    <div class="user-protal-component clearfix">
      <div class="protal-box clearfix">
        <div class="user-info clearfix">
          <div class="info-left">
            <img class="user-avatar"
              :src="userInfo.personal_info.avatar"
              alt="user-avatar"
            />
            <div class="info-text">
              <p class="user-name">{{userInfo.personal_info.nick_name}}</p>
            <p class="hello-msg">{{helloMsg}}</p>
            <router-link :to="'/user/userinfo/'+userInfo.id+'/personalinfo'" class="btn-info">修改个人信息></router-link>
            </div>
            
          </div>
          <div class="info-right">
            <p>账户安全： <span class="user-safe-level">普通</span></p>
            <p>绑定手机：<span>{{userInfo.phone?userInfo.phone:'未设置'}}</span></p>
            <p>绑定邮箱： <span>{{userInfo.email}}</span></p>
          </div>
        </div>
        <div class="user-menu">
          <ul class="menu-list">
            <li class="menu-item">
              <img src="https://s01.mifile.cn/i/user/portal-icon-1.png" alt="">
              <div class="menu-text">
              <h2 class="menu-title">待支付的订单：<span>{{0}}</span></h2>
              <a href="javascript:">查看待支付的订单></a>
              </div>

            </li>
            <li class="menu-item">
              <img src="https://s01.mifile.cn/i/user/portal-icon-2.png" alt="">
              <div class="menu-text">
              <h2 class="menu-title">待收货的订单：<span>{{0}}</span></h2>
              <a href="javascript:">查看待收货的订单></a>
              </div>
            </li>
            <li class="menu-item">
              <img src="https://s01.mifile.cn/i/user/portal-icon-3.png" alt="">
              <div class="menu-text">
              <h2 class="menu-title">待评价的商品：<span>{{0}}</span></h2>
              <a href="javascript:">查看待评价的商品></a>
              </div>
            </li>
            <li class="menu-item">
              <img src="https://s01.mifile.cn/i/user/portal-icon-4.png" alt="">
              <div class="menu-text">
              <h2 class="menu-title">喜欢的商品：<span>{{0}}</span></h2>
              <a href="javascript:">查看喜欢的商品></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      dateTime: null,
      helloMsg: '',

    };
  },
  computed: {
   userInfo(){
     return this.$store.getters.userInfo;
   }
  },
  mounted(){
    this.helloMsg = this.getHelloMsg();
  },
  methods:{
    getHelloMsg(){
      this.dateTime = new Date();
      let hour = this.dateTime.getHours();
      if (hour > 6 && hour <= 12) {
        return "上午好~";
      } else if (hour > 12 && hour <= 18) {
        return "下午好~";
      } else {
        return "晚上好~";
      }
    }
  }
};
</script>

<style lang="scss">
.user-protal-component {
  width: 978px;
  height: 677px;
  .protal-box {
    padding: 36px 48px;
    .user-info{
      border-bottom: 1px solid #bbb;
      .info-left{
        width: 480px;
        height: 200px;
        float: left;
        .info-text{
          margin-top: 45px;
          margin-left: 180px;
        }
        img.user-avatar{
          width: 150px;
          height: 150px;
          border-radius: 50%;
          float: left;
        }
        p.user-name{
          font-size: 24px;
          font-weight: 400;
          color:#616161;
          margin-bottom: 8px;
        }
        p.hello-msg{
          font-size: 14px;
          color: #b0b0b0;
          margin-bottom: 12px;
        }
        a.btn-info{
          color: #ff6700;
          font-size: 12px;
        }
        
      }
      .info-right{
        width: 358px;
        height: 98px;
        float: right;
        margin-top: 45px;
        p{
          padding: 6px 0;
          span.user-safe-level{
            color: #ffac13;
          }
        }
      }
    }
    .user-menu{
      .menu-list{
        padding-top: 60px;
        .menu-item{
          width: 394px;
          height: 150px;
          float: left;
          margin-bottom: 80px;
          margin-left: 14px;
          img{
            float: left;
            display: block;
          }
          .menu-text{
            width: 200px;
            margin-top: 20px;
            margin-left: 112px;
            h2{
              font-size: 18px;
              font-weight: 400;
              span{
                color: #ff6700;
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>