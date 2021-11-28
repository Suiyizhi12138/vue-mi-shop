import FetchAPI from '../api/fetchApi';
import axios from 'axios';
const state = {
  userLoginStatus: 0,//用户登录状态 0未登录 1登录中 2登录成功 3登录失败
  userInfo: '',//用户信息
  personalInfo: '',//用户个人信息
}
const actions = {
  handleLogin({commit},data){-
    commit('setUserLoginStatus',1);
    return FetchAPI.login(data.email,data.password)
    .then((res)=>{
      //获得token 则登录成功
      if(res.status==200){
        commit('setUserLoginStatus',2);
        localStorage.setItem('_user_token',res.data.access_token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
      }
      return res;
    })
    .catch(()=>{
      commit('setUserLoginStatus',3);
    })
  },
  getUserInfo({commit}){
    return FetchAPI.getUserInfo()
    .then((res)=>{
      commit('setUserInfo',res.data);
    })
    .catch((e)=>{
      console.log(e);
    });
  },
  getPersonalInfo({commit}){
    return FetchAPI.getPersonalInfo()
    .then((res)=>{
      
      commit('setPersonalInfo',res.data);
    })
    .catch((e)=>{
      console.log('getPersonalInfo--'+e);
    });
  }
  

}

const mutations = {
  setUserLoginStatus(state,status){
    state.userLoginStatus = status;
  },
  setUserInfo(state,info){
    state.userInfo = info;
  },
  setPersonalInfo(state,info){
    state.personalInfo = info;
  }
}     

const getters = {
  userLoginStatus(){
    return state.userLoginStatus;
  },
  userInfo(){
    return state.userInfo;
  },
  personalInfo(){
    return state.personalInfo;
  }

}

export const User = {
  state,
  actions,
  mutations,
  getters

}