<template>
  <div class="layout-wrap">
    <Head class="layout-header" />
    <div class="mid-section">
      <nuxt />
    </div>
    <Foot />
  </div>
</template>
<script>
  import Head from '../components/layout/head';
  import Foot from '../components/layout/foot';

  export default {
      components: { Head, Foot }
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
