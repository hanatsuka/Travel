<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <keep-alive exclude="Detail"><!-- 让vue取缓存的内容，避免重复进行ajax请求 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
