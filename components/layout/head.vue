<template>
  <div class="header-wrap">
    <div class="header-wrap-container">
      <nuxt-link class="nav-list-item" to="/">首 页</nuxt-link>
      <nuxt-link class="nav-list-item" to="/community">社区精选</nuxt-link>
      <nuxt-link class="nav-list-item" to="/about">关于我们</nuxt-link>
<!--      <nuxt-link class="nav-list-item" to="/login">登 录</nuxt-link>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
  .header-wrap {
    height: 60px;
    padding: 10px 0;
    background-color: #409EFF;
    opacity: .95;
  }

  .header-wrap .header-wrap-container {
    width: 1000px;
    margin: 0 auto;
  }

  .header-wrap .header-wrap-container .nav-list-item {
    line-height: 60px;
    font-size: 20px;
    color: #fff;
    transition: all .5s;
    margin-right: 60px;
    text-decoration: none;
  }

  .header-wrap .header-wrap-container .nav-list-item:hover {
    color: #ffed3a;
  }
</style>
