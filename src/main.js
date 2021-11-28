import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import toast from '@/plugins/easy_toast'

//配置axios默认请求头
if (localStorage.getItem('_user_token')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('_user_token');
  //拦截response 判断是否登录过期
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401: router.replace({
            path: '/user/login/login',
          });
          
        }
      }
      return Promise.reject(error.response)
    }
  )
}
//动态设置title
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title; 
  }
  next();
});
//跳转路由后自动到顶部
router.afterEach(()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});




Vue.config.productionTip = false
Vue.use(toast)
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
