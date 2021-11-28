<template>
  <div class="test-page">
    <div class="test-loading">
      <loading :containerSize="'huge'"></loading>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/common/Loading";
export default {
  components: {
    Loading
  }
};
</script>

<style lang="scss" scoped>
.test-loading {
 
  margin: auto;
  background-color: #f5f5f5;
}
</style>