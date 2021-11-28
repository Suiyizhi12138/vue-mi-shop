//import FetchApi from '../api/fetchApi';

const state = {
  chooseTip: ''
 
}
const actions = {
  saveChooseTip({commit},tip){
    commit('setChooseTip',tip)
  }
}
const mutations = {
  setChooseTip(state,tip){
    state.chooseTip = tip;
  }
}
const getters = {
  chooseTip(){
    return state.chooseTip;
  }
}

export const UserDistrict = {
  state,
  actions,
  mutations,
  getters
}