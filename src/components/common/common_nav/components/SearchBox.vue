<template>
  <div class="search-container">
    <input
      type="text"
      :placeholder="holderKey"
      v-on:focus="focusEvent()"
      v-on:blur="onBlur"
      v-model="searchKey"
    />
    <i class="iconfont iconsearch search-btn" :class="{active:isActive}" @click="submitSearch()"></i>
    <ul class="search-key-list" v-show="isSearchListShow">
      <li
        class="search-key-item"
        v-for="searchkey in searchkeys"
        :key="searchkey.id"
        v-on:mousedown="submitSearch(searchkey.name)"
      >
        <a href="javscript:">{{searchkey.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  
  data(){
    return {
      isActive: false,
      isSearchListShow: false,
      isHoverAll: false,
      searchkeys: [
        { id: "1", name: "全部商品"},
        { id: "2", name: "小米手机" },
        { id: "3", name: "黑鲨4"  },
        { id: "4", name: "小米11" },
        { id: "5", name: "耳机"  },
        { id: "6", name: "Redmi" }
      ],
      searchIndex: 0,
      holderkeys: ["小米11","电视","笔记本"],//
      searchKey: "", //搜索框提交关键词
      holderKey: "Redmi", //搜索框默认关键词
    }
  },
  mounted(){
    setInterval(() => {
      if (this.searchIndex > this.holderkeys.length - 1) {
        this.searchIndex = 0;
      }
      this.searchIndex++;
      this.holderKey = this.holderkeys[this.searchIndex];
    }, 5000);
  },
  methods: {
    //搜索框focus 事件
    focusEvent() {
      //改变搜索按钮样式
      this.isActive = true;
      //显示搜索列表
      this.isSearchListShow = true;
    },
    //搜索框失去焦点事件
    onBlur() {
      //改变搜索按钮样式
      this.isActive = false;
      //隐藏搜索列表
      this.isSearchListShow = false;
    },
    //搜索按钮点击
    submitSearch(key) {
      //console.log('search');
      //取消搜索框样式
      this.isActive = false;

      if (key) {
        this.$router.push("/search?keyword=" + key);
        this.$router.go(0)
      } else {
        if (!this.searchKey) {
          // 如果搜索框内容为空则提交默认搜索内容
          let searchKey = (this.searchKey = this.holderKey);
          this.$router.push("/search?keyword=" + searchKey);
          this.$router.go(0);
        } else {
          //提交搜索词
          this.$router.push("/search?keyword=" + this.searchKey);
          this.$router.go(0);
        }
      }
    },
    
    
  }
};
</script>

<style lang="scss">
@import "@/assets/app.scss";
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
</style>