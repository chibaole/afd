<!--
 * @Author: 刘攀
 * @Date: 2019-08-28 15:15:17
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-28 17:50:41
 * @Description: file content
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
