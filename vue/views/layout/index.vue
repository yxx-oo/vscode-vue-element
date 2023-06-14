<template>
  <el-container style="height: 100%">
    <el-header>
      <!-- <HeaderBar /> -->
    </el-header>
    <el-container>
      <div
        ref="layoutContent"
        class="mainBox main-warpper"
      >
        <router-view/>
      </div>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class LayoutContainer extends Vue {

  mounted() {
  
  }

  created() {
  }

  destroyed() {
    // clearTimeout(this.timeKey);
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  height: auto !important;
}
// .scrollBox {
//   .scrollStyle();
// }
.mainBox {
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  > div {
    padding: 24px 24px 20px;
    // height: 100%;
  }
}
</style>
