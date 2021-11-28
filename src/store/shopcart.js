import FetchApi from '../api/fetchApi';

const state = {
  cartItems: '',//购物车项目
  fullCart: '',//提交的购物车信息
  cartLoadStatus: 0,//购物车加载状态 0未加载 1正在加载 2加载成功 3加载失败
}
const actions = {
  //获取购物车信息并存储到state中
  getCartItems({commit}){
    commit('setCartLoadStatus',1);
    FetchApi.getCartItems()
    .then((res)=>{
      commit('setCartItems',res.data);
      commit('setCartLoadStatus',2);
    })
    .catch((e)=>{
      console.log(e);
      commit('setCartLoadStatus',3);
    })
  },
  //修改购物车信息(本地)
  updateCartItems({commit},cartItems){
    commit('setCartItems',cartItems);
  },
  //删除购物车项目
  deleteCartItem({commit},itemId){
    commit('setCartLoadStatus',1);
    FetchApi.deleteCartItem(itemId)
    .then((res)=>{
      commit('setCartLoadStatus',2);
      commit('setCartItems',res.data);
    })
    .catch((e)=>{
      console.log(e);
      commit('setCartLoadStatus',3);
    })
  },
  //储存购物车信息 准备提交到订单 
  keepCart({commit},cart){
    
    commit('setFullCart',cart);
    //储存信息到本地防止数据被刷新丢失
    window.localStorage.setItem('_full_cart',JSON.stringify(cart));
  }

  

}
const mutations = {

  setCartItems(state,items){
    state.cartItems = items;
  },
  setFullCart(state,fullCart){
    state.fullCart = fullCart;
  },
  //设置购物车加载状态
  setCartLoadStatus(state,status){
    state.cartLoadStatus = status;
  }
  
  
}
const getters = {
  cartItems(){
    return state.cartItems;
  },
  fullCart(){
    return state.fullCart;
  },
  cartLoadStatus(){
    return state.cartLoadStatus;
  }
}

export const ShopCart = {
  state,
  actions,
  mutations,
  getters
}