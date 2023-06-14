<template>
  <div class="app">
    <nav>
      <router-link to="/" style="color: #fff;">Home</router-link> |
      <router-link to="/about" style="color: #fff;">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { sayOpSuccess, sayOpError } from "../../lib/utils";

export default {
  name: "tplFormCreatePage"
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  & > * {
    margin-bottom: 10px;
  }
  .button-block {
    text-align: right;
  }
  .tpl-form-create {
    margin-bottom: 20px;
  }
  .path-block {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    color: #c0c4cc;
    & .el-button {
      margin-left: 10px;
    }
  }
}
</style>
