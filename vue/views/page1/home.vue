<template>
  <div style="color: red">
    <!-- <div>{{ title }}</div>
    <el-button type="" @click="click">getSettingConfig</el-button>
    <el-button type="" @click="$vscPost('updateSettingConfig')"
      >updateSettingConfig</el-button
    >
    <el-button type="" @click="axiosTest">axiosTest</el-button> -->

    <el-button type="primary" @click="openPage(666)">创建工程</el-button>
    <el-button type="primary" @click="openPage(888)">代码仓库克隆</el-button>

    <el-form v-if="openPageVal === 666" ref="form" :model="form" label-width="80px" style="width:400px">
      <el-form-item label="工程名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="工程路径">
        <input type="file" id="file" hidden @change="fileChange" webkitdirectory>
        <el-input placeholder="文件夹目录" v-model="form.imgSavePath" class="input-with-select">
            <el-button slot="append" icon="el-icon-folder" type="success" @click="btnChange"></el-button>
      </el-form-item>
      <el-form-item label="打开方式">
        <el-select v-model="form.type" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>


    <el-form v-else-if="openPageVal === 888" ref="form" :model="form" label-width="80px" style="width:400px">
       <el-form-item label="仓库地址">
        <el-input v-model="form2.url"></el-input>
      </el-form-item>
      <el-form-item label="分支">
        <el-input v-model="form2.name"></el-input>
      </el-form-item>
      <el-form-item label="工程路径">
        <input type="file" id="file" hidden @change="fileChange" webkitdirectory>
        <el-input placeholder="文件夹目录" v-model="form2.imgSavePath" class="input-with-select">
            <el-button slot="append" icon="el-icon-folder" type="success" @click="btnChange"></el-button>
      </el-form-item>
      <el-form-item label="打开方式">
        <el-select v-model="form2.type" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "tplFormCreatePage",
  data() {
    return {
      form: {
        name: "",
        type: "",
        imgSavePath: "",
      },
      form2: {
        name: "",
        type: "",
        url: "",
        imgSavePath: "",
      },
      title: "",
      openPageVal: "",
    };
  },
  mounted() {},
  methods: {
    openPage(val) {
      this.openPageVal = val;
    },
    async click() {
      await this.$vscPost("getSettingConfig").then((res) => {
        this.title = res;
      });
    },
    axiosTest() {
      axios
        .get(`http://10.18.89.194:12023/mesh/alive`)
        .then((response) => {
          const data = response.data;

          resolve(data);
        })
        .catch((err) => console.log(err));
    },
    fileChange(e) {
      try {
        const fu = document.getElementById("file");
        if (fu == null) return;

        console.log(
          "文件夹路径",
          fu.files[0].webkitRelativePath,
          fu.files[0].path
        );
        var webkitRelativePath = fu.files[0].webkitRelativePath;
        var path = fu.files[0].path;
        var zhenshi = path.substring(
          0,
          path.indexOf(
            webkitRelativePath.split("/")[
              webkitRelativePath.split("/").length - 1
            ]
          ) - 1
        );
        console.log("真实路径", zhenshi.replace(/\\/g, "/"));
        this.form.imgSavePath = zhenshi.replace(/\\/g, "/");
      } catch (error) {
        console.debug("choice file err:", error);
      }
    },
    btnChange() {
      var file = document.getElementById("file");
      file.click();
    },
  },
};
</script>

<style lang="scss">
</style>
