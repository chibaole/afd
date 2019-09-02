<!--
 * @Author: 刘攀
 * @Date: 2019-08-28 15:57:26
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-09-02 10:19:42
 * @Description: file content
 -->
<template>
  <div :class="$style.homePage">
    {{hometitle}}
    <button class="btn" @click="createMenu">
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
    async createMenu() {
          // 获取token验证
          console.log('创建公众号菜单')
      try {
        const response = await axios.get("http://49.235/131/207/crateMenu");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted(){
    // this.checkToken()
  }
};
</script>
<style  lang='scss' module>
.homePage {
  color: #fe5c5c;
}
</style>
