const state = {
  order: '',//要提交的订单
}
const actions = {
  saveOrder({commit},order){
    commit('setOrder',order);
    localStorage.setItem('_mi_order',JSON.stringify(order));
  }
}
const mutations = {
  setOrder(state,order){
    state.order = order
  }
}
const getters = {
  order(){
    return state.order;
  }
}
export const UserOrder = {
  state,
  actions,
  mutations,
  getters
}