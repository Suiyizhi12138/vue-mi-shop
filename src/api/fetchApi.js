import Axios from 'axios';
import Config from '../config/env';



const apiUrl = Config.API_URL;
const amapKey = Config.AMAP_KEY_WEB;
const amapUrl = Config.AMAMP_URL;
const getCategories = function(){
  return Axios.get(apiUrl+'/categories');
}
const getAllTopCategories = function(){
  return Axios.get(apiUrl+'/alltopcategories');
}

const getAllCategories = function(){
  return Axios.get(apiUrl+'/allcategories');
}
const getProduct = (id)=>{
  return Axios.get(apiUrl+'/product/'+id);
}
//用户登录
const login = function(email,password){
  return Axios.post(apiUrl+'/login',{
    email: email,
    password: password
  })
}
//用户注册
const register = function(data){
  return Axios.post(apiUrl+'/register',data);
}
//获取用户信息
const getUserInfo = function(){
  return Axios.get(apiUrl+'/userinfo');
} 
//用户登出
const logout = ()=>{
  return Axios.post(apiUrl+'/logout');
}
//搜索商品
const searchProducts = (key)=>{
  return Axios.post(apiUrl+'/search-products',{
    keyword: key
  });
}

/*购物车操作*******************************************************************/
//添加商品到购物车
const addToCart = (skuId,amount)=>{
  return Axios.post(apiUrl+'/add',{
    sku_id: skuId,
    amount: amount
  })
}
//获取购物车信息
const getCartItems = () => {
  return Axios.get(apiUrl+'/get_cart_items');
}
//删除单个购物车项目
const deleteCartItem = (itemId) => { 
  return Axios.delete(apiUrl+'/delete_cart_item',{data:{
    item_id: itemId
  }});
}
/**订单操作*****************************************************************************************/
//创建订单
const addOrder = (data)=>{
  return Axios.post(apiUrl+'/add_order',data);
}
//删除订单

//修改订单

//查询订单列表
const getOrders = ()=>{
  return Axios.get(apiUrl+'/orders');
}

//查询当前订单
const getOrder = (id)=>{
  return Axios.get(apiUrl+'/order/'+id);
}
/**************************************************************************************************/
/**************************************************************************************************/
/**************************************************************************************************/


/***********************************/


//获取用户个人信息
const getPersonalInfo = ()=>{
  return Axios.get(apiUrl+'/personalinfo');
}
//更改用户信息
const updatePersonalInfo = (data)=>{
  return Axios.post(apiUrl+'/personalinfo',data,{
    headers:{
      "Content-Type":'multipart/form-data'
    }
  });
}

//上传用户头像至数据库
const uploadAvatar = (data) => {
  return Axios.post(apiUrl+'/saveavatar',data,{
    headers: {'Content-Type': 'multipart/form-data'}
  });
}
/**************************************************************************************/
//用户地址操作
//通过关键词从高德地图中获取提示信息
const getDistrict = (searchKey)=>{
  return Axios.get(	amapUrl+'/assistant/inputtips?keywords='+searchKey+'&subdistrict=2&key='+amapKey);
}
//获取用户地址信息
const getUserAddresses = ()=>{
  return Axios.get(apiUrl+'/user_addresses');
}
//删除单个地址信息
const deleteUserAddress = (id) => {
  return Axios.delete(apiUrl+'/user_address',{
    data: {
      id: id
    }
  });
}
//添加单个用户地址
const addUserAddress = (data)=>{
  return Axios.post(apiUrl+'/user_address',data);
}
//更新地址信息 params address id
const updateUserAddress = (data)=>{
  return Axios.post(apiUrl+'/update_address',data);
}
//跳转支付宝
const getAlipay = ()=>{
  return Axios.get(apiUrl+'/payment/alipay');
}
//获取支付宝 前端回调
const getAlipayReturn = () => {
  return Axios.get(apiUrl+'/payment/alipay/return')
}

//收藏到个人喜欢
const addToLike = (id)=>{
  return Axios.post(apiUrl+`/product/`+id+`/like`);
}

//取消喜欢
const deleteLike = (id)=>{
  return Axios.delete(apiUrl+'/product/'+id+'/unlike');
}

//获取喜欢的商品
const getLikeProducts = () => {
  return Axios.get(apiUrl+'/product/like/products');
}


export default{
 getCategories,
 getAllTopCategories,
 getAllCategories,
 getProduct,
 login,
 register,
 getUserInfo,
 logout,
 searchProducts,
 addToCart,
 getPersonalInfo,
 updatePersonalInfo,
 uploadAvatar,
 getCartItems,
 deleteCartItem,
 getDistrict,
 getUserAddresses,
 deleteUserAddress,
 addUserAddress,
 updateUserAddress,
 addOrder,
 getOrder,
 getOrders,
 getAlipay,
 getAlipayReturn,
 addToLike,
 deleteLike,
 getLikeProducts
}