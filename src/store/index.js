import Vue from 'vue'
import Vuex from 'vuex'
//import {product} from './product';
import {User} from './user';
import {ShopCart} from './shopcart'
import {UserDistrict} from './district';
import {UserOrder} from './order';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    //product,
    User,
    ShopCart,
    UserDistrict,
    UserOrder
  }
})
