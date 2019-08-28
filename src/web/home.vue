<!--
 * @Author: 刘攀
 * @Date: 2019-08-28 15:57:26
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-28 17:21:41
 * @Description: file content
 -->
<template>
  <div :class="$style.homePage">{{hometitle}}</div>
</template>

<script>
export default {

  name: 'home',
  data () {
    return {
      hometitle: '首页标题'
    }
  }
}
</script>
<style  lang='scss' module>
.homePage {
  color: #fe5c5c;
}
</style>
