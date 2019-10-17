<template>
  <div class="layout-wrap">
    <Header class="layout-header" />
    <div class="mid-section">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
  import Header from '../components/layout/header';
  import Footer from '../components/layout/footer';

  export default {
      components: { Header, Footer }
  }
</script>
<style>
  * {
    padding: 0;
    margin: 0;
  }

  .layout-wrap {
    background-color: #f5f5f5;
    padding-top: 80px;
    position: relative;
  }

  .layout-header {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }

  .mid-section {
    padding: 0 20px;
    width: 1000px;
    margin: 0 auto;
    background-color: #fff;
  }
</style>
