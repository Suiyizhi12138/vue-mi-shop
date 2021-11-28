<template>
  <div class="container">
    <nav class="nav-bar">
      <div class="nav-bar-left">
          <router-link to="/">
          <img src="@/assets/images/logo-mi2.png" alt />
          </router-link>
      </div>
      <div class="nav-bar-middle">
        <ul class="nav-list">
          <li class="nav-item all-head">
            <h4 class="nav-head">全部商品分类</h4>
            <div class="all-menu">
              <ul class="menu-list">
                <!-- 手机电话卡
                -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    手机 电话卡
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li class="menu-product-item" v-for="product in phoneCards" :key="product.id">
                        <router-link :to="'/product/'+product.id" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.zh_name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- 电视盒子 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    电视 盒子
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li class="menu-product-item" v-for="product in tvBoxs" :key="product.id">
                        <router-link :to="'/product/'+product.id" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.zh_name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- 笔记本显示器 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    笔记本 显示器
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li class="menu-product-item" v-for="product in notes" :key="product.id">
                        <router-link :to="'/product/'+product.id" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.zh_name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>

                <!-- 家电插线板 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    家电 插线板
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li
                        class="menu-product-item"
                        v-for="product in home_appliances"
                        :key="product.id"
                      >
                        <router-link :to="'/search?keyword='+product.name" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- 出行 穿戴 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    出行 穿戴
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li class="menu-product-item" v-for="product in wares" :key="product.id">
                        <router-link :to="product.url" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- 智能 路由器 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    智能 路由器
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li
                        class="menu-product-item"
                        v-for="product in intelligences"
                        :key="product.id"
                      >
                        <router-link :to="'/search?keyword='+product.name" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- 电源 配件 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    电源 配件
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li class="menu-product-item" v-for="product in parts" :key="product.id">
                        <router-link :to="'/search?keyword='+product.name" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- 健康儿童 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    健康 儿童
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li class="menu-product-item" v-for="product in healths" :key="product.id">
                        <router-link :to="'/search?keyword='+product.name" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- 耳机 音箱 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    耳机 音箱
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li class="menu-product-item" v-for="product in earPhones" :key="product.id">
                        <router-link :to="'/product/'+product.id" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.zh_name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- 生活箱包 -->
                <li class="menu-item">
                  <a class="category-title" href="javascript:">
                    生活 箱包
                    <span class="arrow-right">></span>
                  </a>
                  <div class="menu-hide">
                    <ul class="menu-product-list">
                      <li class="menu-product-item" v-for="product in lifes" :key="product.id">
                        <router-link :to="'/search?keyword='+product.name" target="_blank">
                          <img :src="product.image_url" alt />
                          <span>{{product.name}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item" >
            <h4 class="nav-head">小米手机</h4>
            <nav-list :products="miPhones"></nav-list>
          </li>
          <li class="nav-item">
            <h4 class="nav-head">Redmi 红米</h4>
            <nav-list :products="redmiPhones"></nav-list>
          </li>
          <li class="nav-item">
            <h4 class="nav-head">电视</h4>
            <nav-list :products="tvs"></nav-list>
          </li>
          <li class="nav-item">
            <h4 class="nav-head">笔记本</h4>
            <nav-list :products="noteBooks"></nav-list>
          </li>
          <li class="nav-item">
            <h4 class="nav-head">家电</h4>
            <nav-list :products="homeAppliances"></nav-list>
          </li>
          <li class="nav-item">
            <h4 class="nav-head">路由器</h4>
            <nav-list :products="routers"></nav-list>
          </li>
          <li class="nav-item">
            <h4 class="nav-head">智能硬件</h4>
            <nav-list :products="intelligenceHardwares" :isHardWare="true"></nav-list>
          </li>
          <li class="nav-item">
            <h4 class="nav-head">
              <a href="https://xiaomi.com/service/" style="color: #333">服务</a>
            </h4>
          </li>
          <li class="nav-item">
            <h4 class="nav-head">
              <a href="https://xiaomi.cn" style="color:#333">社区</a>
            </h4>
          </li>
        </ul>
      </div>
      <!-- 搜索框 -->
      <div class="nav-bar-right">
        
        <common-search v-if="!isSearchPage"></common-search>
        <search-box v-if="isSearchPage"></search-box>
      </div>
    </nav>
  </div>
</template>

<script>
import FetchAPI from "@/api/fetchApi";
import NavList from "./components/NavList";
import { products } from "@/api/allproduct";
import CommonSearch from './components/CommonSearch';
import SearchBox from './components/SearchBox';

export default {
  data() {
    return {
      
      miPhones: [], //小米手机
      redmiPhones: [], //红米手机
      tvs: [], //电视
      noteBooks: [], //笔记本
      homeAppliances: [
        {
          id: "81",
          zh_name: "米家风冷对开门冰箱 483L",
          price: "2399",
          image_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg?thumb=1&w=192&h=132&f=webp&q=90"
        },
        {
          id: "82",
          zh_name: "米家扫拖机器人1T",
          price: "2299",
          image_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65df9e92c06dcd148de5f0eb13e16ea2.png?thumb=1&w=192&h=132&f=webp&q=90"
        },
        {
          id: "83",
          zh_name: "米家互联网洗烘一体机 10kg",
          price: "1899",
          image_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&w=192&h=132"
        },
        {
          id: "84",
          zh_name: "小米净水器S1 800G",
          price: "2499",
          image_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c82798dbbc793c8bd52929dbe86b316f.png?thumb=1&w=192&h=132&f=webp&q=90"
        },
        {
          id: "85",
          zh_name: "米家空气净化器3",
          price: "899",
          image_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/48d69ed4cc41d5c9d33bdeefd7f1da69.png?thumb=1&w=192&h=132&f=webp&q=90"
        },
        {
          id: "86",
          zh_name: "米家两门冰箱160L",
          price: "899",
          image_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/40ad6e8398095e97309a5538b516a2de.jpg?thumb=1&w=192&h=132&f=webp&q=90"
        }
      ], //家电
      routers: [], //路由器
      //智能硬件
      intelligenceHardwares: [
        {
          id: "87",
          zh_name: "小米全自动智能门锁",
          price: "1799",
          image_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b87ae4a36beef69bb2018eb1f8bce9b.png?thumb=1&w=192&h=132&f=webp&q=90"
        },
        {
          id: "88",
          zh_name: "Redmi小爱触屏音箱Pro8",
          price: "499",
          image_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1599017072.24951099.jpg"
        },
        {
          id: "89",
          zh_name: "小米小爱触屏音箱",
          price: "219",
          image_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg?thumb=1&w=192&h=132"
        },
        {
          id: "90",
          zh_name: "Redmi小爱音箱Play",
          price: "89",
          image_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17c0c91317ec0def3ecc072fa9480192.png?thumb=1&w=192&h=132&f=webp&q=90"
        }
      ],

      
      //全部分类数据
      phoneCards: [],
      tvBoxs: [],
      home_appliances: [], //家电插线板
      notes: [], //笔记本显示器
      wares: [], //出行 穿戴
      intelligences: [], //智能 路由器
      parts: [], //电源配件
      healths: [], //健康 儿童
      earPhones: [], //耳机 音箱
      lifes: [] //生活 箱包
    };
  },
  props:['isSearchPage'],
  components: {
    NavList,
    CommonSearch,
    SearchBox
  },
  computed: {},
  created() {
    //下拉导航数据

    //全部导航数据
    this.home_appliances = products.home_appliances;
    this.wares = products.wares;
    this.intelligences = products.intelligences;
    this.parts = products.parts;
    this.healths = products.healths;
    this.lifes = products.lifes;
  },
  mounted() {
    FetchAPI.getAllCategories()
      .then(res => {
        let categories = res.data;
        this.miPhones = categories[0].products.slice(0, 6);
        this.redmiPhones = categories[1].products.slice(0, 6);
        this.tvs = categories[2].products.slice(0, 6);
        this.noteBooks = categories[3].products.slice(0, 6);
        this.routers = categories[4].products.slice(0, 6);

        //全部商品
        this.phoneCards = categories[0].products.concat(categories[1].products); //手机服务
        this.tvBoxs = categories[2].products;
        this.notes = categories[3].products; //笔记本 显示器
        this.earPhones = categories[11].products.concat(
          categories[18].products
        );
        //this.intelligenceHardwares = categories[5].products.slice(0,6);
      })
      .catch(e => {
        console.log(e);
      });

    
  },
  methods: {
    handleMouseOver(){
      console.log('mouse over');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/app.scss";
.container {
  width: 1226px;
  margin: 0 auto;
  background-color: #f5f5f5;
}
.nav-bar {
  position: relative;
  width: 1226px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .nav-bar-left {
    img {
      width: 56px;
      height: 56px;
      margin-top: 24px;
    }
  }
  .nav-bar-middle {
    width: 850px;
    height: 50px;
    

    .nav-list {
      .nav-item {
        width: 850px;
        &:hover {
          h4 {
            color: $global-orange;
          }
          .nav-product-list-container {
            height: 240px;
            border-top: 1px solid #dddddd;
          }
        }
        .nav-head {
          line-height: 100px;
          text-align: center;
          padding-left: 20px;
          float: left;
          font-weight: 400;
          cursor: pointer;
        }
      }
    }
  }
  .nav-bar-right {
    position: relative;
    width: 296px;
    height: 50px;
    margin-top: 25px;
    
    
    .search-container {
      width: 296px;
      height: 50px;
      
      input {
        position: absolute;
        width: 223px;
        height: 48px;
        right: 47px;
        border: 1px solid #e0e0e0;
        outline: 0;
        box-sizing: border-box;
        padding: 0 10px;
        &:focus {
          border-color: $global-orange;
        }
      }
      .search-btn {
        position: absolute;
        display: block;
        border: 1px solid #e0e0e0;
        z-index: 10;
        right: 0px;
        border-left: none;
        width: 46px;
        height: 46px;
        background-color: #fff;
        font-size: 20px;
        color: #666;
        line-height: 46px;
        text-align: center;
        cursor: pointer;
        &:hover {
          background-color: $global-orange;
        }
      }

      .active {
        border-color: $global-orange;
      }

      .search-key-list {
        position: absolute;
        top: 50px;
        right: 46px;
        width: 223px;
        border: 1px solid $global-orange;
        z-index: 10;
        background-color: #fff;
        border-top: none;
        margin-top: -1px;

        .search-key-item {
          font-size: 12px;
          a {
            color: #333;
          }
          line-height: 30px;
          box-sizing: border-box;
          padding-left: 16px;
          cursor: pointer;
          &:hover {
            background-color: #eee;
          }
        }
      }
    }
  }
}
.all-head{
  &:hover {
    .all-menu {
      display: block;
    }
  }
}
.all-menu {
  position: absolute;
  top: 100px;
  left: 0px;
  width: 1226px;
  display: none;
  
  .menu-list {
    width: 234px;
    height: 420px;
    position: relative;
    z-index: 10;
    background-color: #f5f5f5;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid #ff6700;
    .menu-item {
      height: 42px;
      line-height: 42px;
      text-align: left;

      &:hover {
        background-color: $global-orange;
        .menu-hide {
          display: block;
        }
      }
      .category-title {
        font-size: 14px;
        color: #333;
        display: block;
        box-sizing: border-box;
        padding-left: 20px;
        span {
          float: right;
          margin-right: 20px;
          font-size: 18px;
          color: #e0e0e0;
        }
      }
      .menu-hide {
        display: none;
        width: 992px;
        height: 458px;
        position: absolute;
        left: 234px;
        top: 0px;
        border-top: 1px solid #ddd;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        margin-left: 1px;
        z-index: 10;
        background-color: #fff;
        .menu-product-list {
          margin-top: 20px;
          .menu-product-item {
            width: 248px;
            height: 76px;
            float: left;
            padding-left: 20px;
            box-sizing: border-box;
            img {
              float: left;
              width: 40px;
              height: 40px;
              margin-right: 12px;
              vertical-align: middle;
            }
            span {
              float: left;
              width: 172px;
              font-size: 14px;
              color: #333;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              &:hover {
                color: #ff6700;
              }
            }
          }
        }
      }
    }
  }
}
</style>