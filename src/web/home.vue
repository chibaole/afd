<!--
 * @Author: 刘攀
 * @Date: 2019-08-28 15:57:26
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-29 15:36:59
 * @Description: file content
 -->
<template>
  <div :class="$style.homePage">
    {{hometitle}}

    <button class="btn">
             <span class="badge badge-primary">创建自定义菜单</span>
    </button>
    </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "home",
  data() {
    return {
      hometitle: "首页标题"
    };
  },
  methods: {
    async checkToken() {
      try {
        const response = await axios.get("http://7b22078e.ngrok.io/api/v1/menu");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style  lang='scss' module>
.homePage {
  color: #fe5c5c;
}
</style>
