<template>
  <div class="test-page">
    <div class="test-loading">
      <loading :containerSize="'huge'"></loading>
      <div class="test-slice">
        {{sliceString}}
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/common/Loading";
export default {
  components: {
    Loading
  },
  data(){
    return {
      string: "123456789"
    }
  },
  computed: {
    sliceString(){
      return this.string.slice(0,4);
    }
  }

};
</script>

<style lang="scss" scoped>

.test-loading {
 
  margin: auto;
  background-color: #f5f5f5;
}
</style>