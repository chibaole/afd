<!--
 * @Author: 刘攀
 * @Date: 2019-08-28 15:57:26
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-29 14:21:43
 * @Description: file content
 -->
<template>
  <div :class="$style.homePage">{{hometitle}}</div>
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
        const response = await axios.get("www.lpfyy.com/api/v1/wxToken");
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
