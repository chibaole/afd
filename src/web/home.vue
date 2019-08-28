<!--
 * @Author: 刘攀
 * @Date: 2019-08-28 15:57:26
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-28 16:21:39
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
      hometitle: '首页'
    }
  }
}
</script>
<style lang="scss" model>
.homePage {
  color: #fe5c5c;
}
</style>
