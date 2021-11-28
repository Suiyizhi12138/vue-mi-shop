import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home'),
    meta:{
      title: '首页'
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/product_detail/ProductDetail'),
    meta:{
      title: '商品详情、购买'
    }

  },
  {
    path: '/user/login/:action',
    name: 'user_login',
    component: () => import('@/views/user_login/UserLogin'),
    meta:{
      title: '用户登录'
    }
  },
  {
    path:'/search',
    name: 'search',
    component: ()=>import('@/views/product_search/ProductSearch'),
    meta:{
      title: '商品搜索'
    }

  },
  {
    path:'/cart',
    name:'cart',
    component: ()=>import('@/views/cart/Cart'),
    meta: {
      title: '我的购物车'
    }
  },
  {
    path:'/user/:id',
    name:'user_info',
    component: ()=>import('@/views/user_info/UserInfo'),
    meta: {
      title: '个人中心'
    },
    children:[
      {
        path: 'protal',
        name:'user_protal',
        component: ()=>import('@/views/user_info/components/UserProtal')
      },
      {
        path: 'orderlist',
        name:'user_order_list',
        component: ()=>import('@/views/user_info/components/UserOrderList')
      },
      {
        path: 'comment',
        name: 'user_comment',
        component: ()=>import('@/views/user_info/components/UserComment')
      },
      {
        path: 'msg',
        name:"user_msg",
        component: ()=>import('@/views/user_info/components/UserMsgs.vue')
      },
      {
        //用户购买资格
        path: 'buyallow',
        name: 'user_buy_allow',
        component: ()=>import('@/views/user_info/components/UserBuyAllow.vue')
      },
      {
        //用户礼品卡
        path:'presentcard',
        name:'user_present_card',
        component: ()=>import('@/views/user_info/components/UserPresentCard')
      },
      {
        //用户现金账户
        path:'cashaccount',
        name: 'user_cash_account',
        component: ()=>import('@/views/user_info/components/UserCashAccount')
      },
      {
        //用户喜欢(收藏商品)
        path:"like",
        name:'user_like',
        component: ()=>import('@/views/user_info/components/UserLike')
      },
      {
        //用户现金券
        path: "cashcoupon",
        name: 'user_cash_coupon',
        component: ()=>import('@/views/user_info/components/UserCashCoupon')
      },
      {
        //用户优惠券
        path: 'coupon',
        name: 'user_coupon',
        component: ()=>import('@/views/user_info/components/UserCoupon')
      },
      {
        //用户收货地址
        path: 'address',
        name: 'user_address',
        component: ()=>import('@/views/user_info/components/UserAddress')
      },
      {
        //用户红包
        path: 'redpackets',
        name: 'user_red_packets',
        component: ()=>import('@/views/user_info/components/UserRedPackets')
      },
      {
        //用户服务记录
        path: 'servicerecord',
        name: 'user_service_record',
        component: ()=> import('@/views/user_info/components/UserServiceRecord')
      },
      {
        //用户服务单申请
        path: 'servicerequest',
        name: 'user_service_request',
        component: ()=> import('@/views/user_info/components/UserServiceRequest')
      },
      {
        //用户快递单报销
        path: 'expresssolute',
        name: 'user_express_solute',
        component: ()=> import('@/views/user_info/components/UserExpressSolute'),
        children:[
          {
            path: 'requestform',
            name: 'express_rqeust_form',
            component: ()=> import('@/views/user_info/components/express/ExpressRequestForm')
          },
          {
            path: 'requestquery',
            name: 'express_request_query',
            component: ()=> import('@/views/user_info/components/express/ExpressRequestQuery')
          }
        ]
      },
      {
        //用户订单详情
        path: 'orderview/:no',
        name: 'user_order_view',
        component: () => import('@/views/user_info/components/UserOrderView.vue')
      }




    ]
    
  },
  {
    path: '/user/user_account/:id',
    name: 'user_account',
    component: ()=>import('@/views/user_account/UserAccount.vue'),
    meta: {
      title: '个人信息'
    },
    children:[
      {
        path: 'safeandlogin',
        name: 'user_safe_and_login',
        component: ()=>import ('@/views/user_account/components/SafeAndLogin')
      },
      {
        path: 'allow',
        name: 'user_allow',
        component: ()=>import('@/views/user_account/components/Allow')
      },
      {
        path: 'personalInfo',
        name: 'user_personal_info',
        component: ()=>import('@/views/user_account/components/PersonalInfo')
      },
     
      {
        //隐私中心
        path: 'securecenter',
        name: 'user_secure_center',
        component: ()=>import('@/views/user_account/components/SecureCenter')
      }
      
    ]
  },
  {
    path: '/verify_phone',
    name:'user_verify_phone',
    component: ()=>import('@/views/verify_phone/VerifyPhone'),
    meta: {
      title: '验证手机'
    }
  },
  {
    path:'/checkorder',
    name:'user_check_order',
    component: ()=>import('@/views/check_order/CheckOrder'),
    meta: {
      title: '确认订单'
    }
  },
  {
    path: '/payorder/:no',
    name: 'user_pay_order',
    component: ()=>import('@/views/pay/PayOrder'),
    meta: {
      title: '支付订单'
    }

  },
  {
    path: '/payment/alipay/return',
    name:'alipayreturn',
    component: () => import('@/views/pay/AlipayReturn')
  },
  {
    path: '/test',
    name: 'test_page',
    component: ()=>import('@/views/test/TestLoading')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
