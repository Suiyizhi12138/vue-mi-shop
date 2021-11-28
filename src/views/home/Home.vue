<template>
  <div class="home-page">
    <common-header></common-header>
    <home-nav></home-nav>
    <!-- 轮播图下方第一个推荐 -->
    <div class="home-sub clearfix">
      <div class="sub-nav">
        <ul class="sub-list">
          <li class="sub-list-item">
            <a href="javascript:">
              <img src="../../assets/images/miaosha.png" alt="小米秒杀" />
              <p>小米秒杀</p>
            </a>
          </li>
          <li class="sub-list-item">
            <a href="javascript:">
              <img src="../../assets/images/tuangou.png" alt="企业团购" />
              <p>企业团购</p>
            </a>
          </li>
          <li class="sub-list-item">
            <a href="javascript:">
              <img src="../../assets/images/fma.png" alt="F码通道" />
              <p>F码通道</p>
            </a>
          </li>
          <li class="sub-list-item">
            <a href="javascript:">
              <img src="../../assets/images/mifencard.png" alt="米粉卡" />
              <p>米粉卡</p>
            </a>
          </li>
          <li class="sub-list-item">
            <a href="javascript:">
              <img src="../../assets/images/refresh.png" alt="以旧换新" />
              <p>以旧换新</p>
            </a>
          </li>
          <li class="sub-list-item">
            <a href="javascript:">
              <img src="../../assets/images/chongqian.png" alt="话费充值" />
              <p>话费充值</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="sub-item">
        <router-link to="/product/91">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
            alt
          />
        </router-link>
      </div>
      <div class="sub-item">
        <router-link to="/product/5">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"
            alt
          />
        </router-link>
      </div>
      <div class="sub-item">
        <router-link to="/product/92">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793913688bfaee26b755a0b0cc8575fd.jpg?w=632&h=340"
            alt
          />
        </router-link>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="home-main clearfix">
      <div class="main-container">
        <div class="home-flashsale" v-if="false">
          <div class="flashsale-top">
            <h2 class="flashsale-title">小米秒杀</h2>
          </div>
          <div class="flashsale-content">
            <div class="flashsale-preview">
              <div class="times-preview">20:00 场</div>
              <div class="times-img">
                <img
                  src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ%0AbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp%0Abj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6%0AeD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1%0AMTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo%0AdHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw%0AdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv%0AIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS%0AZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD%0AcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j%0AZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1%0AbWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N%0AOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy%0AQzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF%0AOEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht%0AcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE%0AcHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf%0AS48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY%0AjRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN%0AJbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL%0AijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7%0AKnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L%0AbN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc%0AxDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V%0AkBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU%0AKc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E%0AcnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ%0A7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII="
                  alt="小米闪购"
                />
              </div>

              <div class="times-info">本场已结束</div>
              <div class="time-left clearfix">
                <span>00</span>
                <i>:</i>
                <span>00</span>
                <i>:</i>
                <span>00</span>
              </div>
            </div>
            <!-- 轮播图 -->
            <flash-slide></flash-slide>
          </div>
        </div>
        <row-ad :imageUrl="adImages[0]" :adUrl="adUrls[0]"></row-ad>
        <div class="home-phone clearfix">
          <div class="phone-head">
            <h2 class="category-title">
              手机
              <span class="phone-more">
                <a href>
                  查看更多
                  <span class="arrow-right">></span>
                </a>
              </span>
            </h2>
          </div>
          <div class="phone-content">
            <div class="phone-left product-item">
              <router-link to="/product/4">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=281&h=737&f=webp&q=90"
                  alt
                />
              </router-link>
            </div>
            <!-- 手机列表 -->
            <phone-list :phones="phones"></phone-list>
          </div>
        </div>
        <row-ad :imageUrl="adImages[1]" :adUrl="adUrls[1]"></row-ad>
        <!-- 商品列表 -->
        <div class="home-products clearfix">
          <h2 class="products-title clearfix">家电</h2>
          <ul class="tab-list">
            <li class="tab-item">
              <div class="tab-title" :class="{'tab-active': isTabTv}" v-on:mouseover="changeTv">电视影音</div>
              <product-list :products="tvVideos" v-show="isTabTv"></product-list>
            </li>
            <li class="tab-item">
              <div class="tab-title" :class="{'tab-active':!isTabTv}" v-on:mouseover="changeTv">热门</div>
              <product-list :products="hotHomeAppliances" v-show="!isTabTv"></product-list>
            </li>
          </ul>
          <div class="products-left">
            <a href>
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/116fc43816b87192be4e67cf762e8da5.jpeg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </a>
            <a href>
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dfbdabe36b2d630d57a015e6fb5eb3ea.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </a>
          </div>
        </div>
        <row-ad :imageUrl="adImages[2]" :adUrl="adUrls[2]"></row-ad>
        <!-- 智能 -->
        <div class="home-products clearfix">
          <h2 class="products-title clearfix">智能</h2>
          <ul class="tab-list">
            <li class="tab-item">
              <div class="tab-title" :class="{'tab-active': isTabCxs}" v-on:mouseover="changeCxs">出行</div>
              <product-list :products="cxs" v-show="isTabCxs"></product-list>
            </li>
            <li class="tab-item">
              <div class="tab-title" :class="{'tab-active': isTabAfs}" v-on:mouseover="changeAfs">安防</div>
              <product-list :products="afs" v-show="isTabAfs"></product-list>
            </li>
            <li class="tab-item">
              <div
                class="tab-title"
                :class="{'tab-active':isTabIntelligence}"
                v-on:mouseover="changeIntelligence"
              >热门</div>
              <product-list :products="hotIntelliences" v-show="isTabIntelligence"></product-list>
            </li>
          </ul>
          <div class="products-left">
            <router-link to="/product/23">
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe114f73fac3a45e5622c3eff56106b.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </router-link>
            <a href>
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </a>
          </div>
        </div>
        <row-ad :imageUrl="adImages[3]" :adUrl="adUrls[3]"></row-ad>
        <!-- 搭配 -->
        <div class="home-products clearfix">
          <h2 class="products-title clearfix">搭配</h2>
          <ul class="tab-list">
            <li class="tab-item">
              <div
                class="tab-title"
                :class="{'tab-active': isTabEarPhones}"
                v-on:mouseover="changeCollocation"
              >耳机音箱</div>
              <product-list :products="earPhones" v-show="isTabEarPhones"></product-list>
            </li>
            <li class="tab-item">
              <div
                class="tab-title"
                :class="{'tab-active':!isTabEarPhones}"
                v-on:mouseover="changeCollocation"
              >热门</div>
              <product-list :products="hotCollocations" v-show="!isTabEarPhones"></product-list>
            </li>
          </ul>
          <div class="products-left">
            <router-link to="/product/23">
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </router-link>
            <a href>
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f6c89cf21efc23799f6130224cef007.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </a>
          </div>
        </div>
        <row-ad :imageUrl="adImages[4]" :adUrl="adUrls[4]"></row-ad>
        <div class="home-products clearfix">
          <h2 class="products-title clearfix">配件</h2>
          <ul class="tab-list">
            <li class="tab-item">
              <div
                class="tab-title"
                :class="{'tab-active': isTabChargeres}"
                v-on:mouseover="changeParts"
              >充电器</div>
              <product-list :products="chargeres"></product-list>
            </li>
            <li class="tab-item">
              <div
                class="tab-title"
                :class="{'tab-active':!isTabChargeres}"
                v-on:mouseover="changeParts"
              >热门</div>
              <product-list :products="hotParts" v-show="!isTabChargeres"></product-list>
            </li>
          </ul>
          <div class="products-left">
            <a href>
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f64bbd58c3f5001bdf0688894f22cb6.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </a>
            <a href>
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe4182f1d9a5befdf2380ec90ae1620.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </a>
          </div>
        </div>
        <row-ad :imageUrl="adImages[5]" :adUrl="adUrls[5]"></row-ad>
        <!-- 周边 -->
        <div class="home-products clearfix">
          <h2 class="products-title clearfix">周边</h2>
          <ul class="tab-list">
            <li class="tab-item">
              <div
                class="tab-title"
                :class="{'tab-active': isTabAcces}"
                v-on:mouseover="changeAccesories"
              >出行</div>
              <product-list :products="Acxs" v-show="isTabAcces"></product-list>
            </li>
            <li class="tab-item">
              <div
                class="tab-title"
                :class="{'tab-active':!isTabAcces}"
                v-on:mouseover="changeAccesories"
              >热门</div>
              <product-list :products="hotAccesories" v-show="!isTabAcces"></product-list>
            </li>
          </ul>
          <div class="products-left">
            <a href>
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca0940f052227d235e7de5678d106c89.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </a>
            <a href>
              <img
                class="product-item"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0497ba8520dc4aca9d55e6b841d42331.jpg?thumb=1&w=281&h=360&f=webp&q=90"
                alt
              />
            </a>
          </div>
        </div>
        <row-ad :imageUrl="adImages[6]" :adUrl="adUrls[6]"></row-ad>
        <!-- 视频 -->
        <div class="home-video clearfix">
          <div class="phone-head">
            <h2 class="category-title">
              视频
              <span class="phone-more">
                <a href>
                  查看更多
                  <span class="arrow-right">></span>
                </a>
              </span>
            </h2>
          </div>
          <ul class="video-list">
            <li class="video-item product-item" v-for="video in videos" :key="video.id">
              <a href="javascript:" @click="playVideo(video.title,video.url)">
                <img :src="video.imgUrl" alt />
                <h3 class="video-title">{{video.title}}</h3>
                <h4 class="video-subtitle">{{video.subtitle}}</h4>
                <span class="icon-play">
                  <i class="iconfont iconplay"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <transition name="fade-video">
        <div class="video-container" v-if="isPlayVideo">
          <div class="video-background"></div>
          <video-pop v-on:closeVideo="onCloseVideo" :videoUrl="videoUrl" :videoTitle="videoTitle"></video-pop>
        </div>
      </transition>
    </div>
    <common-footer></common-footer>
    <common-fix-nav></common-fix-nav>
  </div>
</template>

<script>
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonFooter from "@/components/common/CommonFooter";
import HomeNav from "./components/HomeNav";
import FlashSlide from "./components/FlashSlide";
import CommonFixNav from "@/components/common/CommonFixNav";
import RowAd from "./components/RowAd";
import PhoneList from "./components/PhoneList";
import ProductList from "./components/ProductList";
import VideoPop from "@/components/common/VideoPop";

import FetchApi from "../../api/fetchApi";

export default {
  components: {
    CommonHeader,
    CommonFooter,
    HomeNav,
    CommonFixNav,
    FlashSlide,
    RowAd,
    PhoneList,
    ProductList,
    VideoPop
  },
  data() {
    return {
      //横图图片及url
      adImages: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1471&h=144&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?thumb=1&w=1471&h=144&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1471&h=144&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01cc6a570d32a2ee09a2d5c2009a9968.jpg?thumb=1&w=1471&h=144&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1615d1842fe85914a545297836a44271.jpg?thumb=1&w=1471&h=144&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9880db34d227b6c1df5b45cb7df4f465.jpg?thumb=1&w=1471&h=144&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1471&h=144&f=webp&q=90"
      ],
      adUrls: [
        "/product/64",
        "javascript:",
        "/product/24",
        "javascript:",
        "javascript:",
        "javascript:",
        "/product/56"
      ],

      phones: [],
      hotHomeAppliances: [], //热门家电
      hotIntelliences: [], //热门智能
      hotCollocations: [], //热门搭配
      hotParts: [], //热门配件
      hotAccesories: [], //热门周边

      tvVideos: [], //电视影音
      afs: [], //安防
      cxs: [], //出行
      chargeres: [], //充电器
      earPhones: [], //耳机
      Acxs: [], //周边出行

      isTabTv: false, //是否显示电视影音
      isTabIntelligence: true, //是否显示热门智能
      isTabAfs: false, //是否显示安防
      isTabCxs: false, //是否显示出行
      isTabEarPhones: false, //是否显示耳机
      isTabChargeres: false, //是否显示充电器
      isTabAcces: false, //是否显示周边 出行

      isPlayVideo: false, //是否显示播放器
      videoUrl: "", //视频播放的src
      videoTitle: "", //视频标题
      //视频列表数据
      videos: [
        {
          id: 0,
          title: "2021春季发布会第一场",
          subtitle: "",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg?thumb=1&w=355&h=216&f=webp&q=90",
          url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4"
        },
        {
          id: 1,
          title: "Redmi 10X系列发布会",
          subtitle: "Redmi 10X系列发布会",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=355&h=216&f=webp&q=90",
          url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4"
        },
        {
          id: 2,
          title: "小米10 青春版 发布会",
          subtitle: "",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=355&h=216&f=webp&q=90",
          url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4"
        },
        {
          id: 3,
          title: "小米10 8k手机拍大片",
          subtitle: "",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=355&h=216&f=webp&q=90",
          url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4"
        }
      ],

      //用户信息
      userInfo: {}
    };
  },
  created() {},
  mounted() {
    FetchApi.getAllCategories()
      .then(res => {
        this.phones = res.data[0].products
          .concat(res.data[1].products)
          .slice(0, 8); //手机
        this.tvVideos = res.data[2].products.slice(0, 8); //电视视频
        this.afs = res.data[15].products.slice(0, 8); //智能安防
        this.cxs = res.data[14].products.slice(0, 8); //智能出行
        this.earPhones = res.data[18].products
          .concat(res.data[11].products)
          .slice(0, 8); //耳机
        this.chargeres = res.data[21].products.slice(0, 8); //充电器
        this.Acxs = res.data[14].products.slice(0, 8); //周边出行
      })
      .catch(e => {
        console.log(e);
      });

    FetchApi.getAllTopCategories()
      .then(res => {
        //热门家电
        this.hotHomeAppliances = res.data[1].products.slice(0, 8);

        //热门智能
        this.hotIntelliences = res.data[2].products.slice(0, 8);
        //热门搭配
        this.hotCollocations = res.data[3].products.slice(0, 8);
        //热门配件
        this.hotParts = res.data[4].products.slice(0, 8);
        //热门周边
        this.hotAccesories = res.data[5].products.slice(0, 8);
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    changeTv() {
      this.isTabTv = !this.isTabTv;
    },
    changeIntelligence() {
      this.isTabIntelligence = true;
      this.isTabCxs = false;
      this.isTabAfs = false;
    },
    changeCxs() {
      this.isTabIntelligence = false;
      this.isTabCxs = true;
      this.isTabAfs = false;
    },
    changeAfs() {
      this.isTabIntelligence = false;
      this.isTabCxs = false;
      this.isTabAfs = true;
    },

    changeCollocation() {
      this.isTabEarPhones = !this.isTabEarPhones;
    },
    changeParts() {
      this.isTabChargeres = !this.isTabChargeres;
    },
    changeAccesories() {
      this.isTabAcces = !this.isTabAcces;
    },
    //播放视频
    playVideo(title, url) {
      this.isPlayVideo = true;
      this.videoUrl = url;
      this.videoTitle = title;
    },
    onCloseVideo() {
      this.isPlayVideo = false;
    }
  }
};
</script>

<style lang="scss">
.home-page {
  height: 100%;
  width: 100%;
  .product-item {
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    &:hover {
      z-index: 2;
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -2px, 0);
      -webkit-transform: translate3d(0, -2px, 0);
    }
  }
}

.tab-active {
  border-bottom: 2px solid #ff6700;
  color: #ff6700;
}
.home-sub {
  width: 1226px;
  height: 170px;
  overflow: hidden;
  margin: 14px auto;
  display: flex;
  justify-content: baseline;
  .sub-nav {
    .sub-list {
      width: 234px;
      height: 170px;

      background-color: #5f5750;
      font-size: 12px;

      list-style: none;
      .sub-list-item {
        width: 70px;
        height: 82px;
        position: relative;
        float: left;
        text-align: center;
        padding: 0 3px;
        &:before {
          position: absolute;
          content: "";
          background-color: #665e57;
          top: 2px;
          left: 6px;
          width: 64px;
          height: 1px;
        }
        &:after {
          position: absolute;
          content: "";
          left: 0px;
          top: 6px;
          width: 1px;
          height: 70px;
          background-color: #665e57;
        }
        img {
          display: block;
          width: 24px;
          height: 24px;
          margin: 0 auto 4px;
        }
        a {
          padding-top: 18px;
          display: block;
          color: #fff;
          opacity: 0.7;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
  .sub-item {
    margin-left: 15px;
    img {
      width: 316px;
      height: 170px;
      display: block;
    }
  }
}
.home-main {
  min-width: 1226px;
  height: auto;
  color: #333;
  background-color: #f5f5f5;
  overflow: hidden;
  .main-container {
    width: 1226px;
    margin: 0 auto;
  }
  .home-flashsale {
    width: 1226px;
    .flashsale-top {
      width: 1226px;
      height: 58px;
      line-height: 58px;
      .flashsale-title {
        float: left;
        font-size: 22px;
        font-weight: 200;
      }
      .flashsale-btns {
        float: right;
      }
    }
    .flashsale-content {
      position: relative;
      .flashsale-preview {
        width: 234px;
        height: 300px;
        padding-top: 18px;
        background-color: #f1eded;
        border-top: 1px solid #e53935;
        .times-preview {
          margin-top: 39px;
          font-size: 21px;
          color: #e53935;
          text-align: center;
        }
        .times-img {
          width: 234px;
          img {
            display: block;
            margin: 25px auto;
            border: none;
          }
        }
        .times-info {
          font-weight: 200;
          text-align: center;
        }
        .time-left {
          width: 168px;
          margin: 25px auto 0;
          span {
            width: 46px;
            height: 46px;
            font-size: 24px;
            color: #fff;
            background-color: #605751;
            float: left;
            line-height: 46px;
            text-align: center;
          }
          i {
            float: left;
            font-size: 28px;
            width: 15px;
            height: 46px;
            line-height: 46px;
            font-style: unset;
            text-align: center;
          }
        }
      }
    }
  }
  .home-phone {
    width: 1226px;
    height: auto;
    position: relative;
    .phone-head {
      .category-title {
        font-weight: 200;
        font-size: 22px;
        line-height: 58px;
        color: #333;
      }
      .phone-more {
        float: right;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        color: #424242;
        font-size: 16px;
        font-weight: 400;
        .arrow-right {
          color: #fff;
          padding: 0 4px;
          height: 20px;
          background-color: rgba(100, 100, 100, 0.5);
          border-radius: 50%;
        }
        &:hover {
          a {
            color: #ff6700;
          }
          .arrow-right {
            background-color: #ff6700;
          }
        }
      }
    }
    .phone-left {
      float: left;
      a {
        img {
          width: 234px;
          height: 614px;
        }
      }
    }
  }
  .home-products {
    width: 1226px;
    height: auto;
    position: relative;
    .products-title {
      font-weight: 200;
      font-size: 22px;
      line-height: 58px;
      color: #333;
      width: auto;
      float: left;
    }
    .products-left {
      width: 234px;
      height: auto;
      a {
        display: block;
        margin-bottom: 14px;
        img {
          width: 234px;
          height: 300px;
        }
      }
    }
    .tab-list {
      .tab-item {
        cursor: pointer;
        .tab-title {
          float: right;
          padding-top: 16px;
          padding-bottom: 5px;
          font-size: 16px;
          margin: 0 15px;
          transition: border 0.5s;
        }
      }
    }
  }
  .home-video {
    .phone-head {
      .category-title {
        font-weight: 200;
        font-size: 22px;
        line-height: 58px;
        color: #333;
      }
      .phone-more {
        float: right;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        color: #424242;
        font-size: 16px;
        font-weight: 400;
        .arrow-right {
          color: #fff;
          padding: 0 4px;
          height: 20px;
          background-color: rgba(100, 100, 100, 0.5);
          border-radius: 50%;
        }
        &:hover {
          a {
            color: #ff6700;
          }
          .arrow-right {
            background-color: #ff6700;
          }
        }
      }
    }
    .video-list {
      .video-item {
        position: relative;
        float: left;
        background-color: #fff;
        margin-left: 14px;
        &:hover {
          .icon-play {
            background-color: #ff6700;
          }
        }
        img {
          width: 296px;
          height: 180px;
          margin-bottom: 28px;
        }
        h3 {
          font-size: 14px;
          color: #333;
          margin: 0 14px 6px;
          font-weight: 400;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          text-align: center;
        }
        h4 {
          height: 18px;
          margin: 0 14px;
          font-size: 12px;
          font-weight: normal;
          text-align: center;
          color: #b0b0b0;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        span.icon-play {
          position: absolute;
          left: 20px;
          bottom: 84px;
          width: 32px;
          height: 20px;
          border: 2px solid #fff;
          border-radius: 12px;
          text-align: center;

          i {
            font-size: 16px;
            color: #fff;
          }
        }
      }
      & > li:nth-child(1) {
        margin-left: 0px;
      }
    }
  }
}
.video-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 99;

  .video-background {
    width: 100%;
    height: 100%;
    z-index: 90;
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.fade-video-enter-active {
  animation: fade-video-animation 0.5s;
}
.fade-video-leave-active {
  animation: fade-video-animation 0.5s reverse;
}
@keyframes fade-video-animation {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>