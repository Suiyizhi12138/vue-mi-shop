import FetchApi from '../api/fetchApi';
const state = {
  allCategories:[]
}

const actions = {
  loadAllCategories({commit}){
    FetchApi.getAllCategories()
    .then((res)=>{
      commit('setAllCategories',res.data);
    });
  },
}
const mutations = {
  setAllCategories(state,categories){
    state.allCategories = categories;
  }
}
const getters = {
  getAllCategories(state){
    return state.allCategories;
  }
}
export const product = {
  state,
  actions,
  mutations,
  getters
}