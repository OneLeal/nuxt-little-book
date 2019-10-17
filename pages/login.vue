<template>
    <div class="login-wrap">
      <el-button type="primary" @click="login">登 录</el-button>
    </div>
</template>

<script>
    export default {
        name: "login",
        layout: 'login',
        methods: {
            login() {
                localStorage.setItem('testNuxtLocalValue', '夜班三更过天桥，从来不敢回头看')
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
  .login-wrap {
    padding-top: 200px;
    text-align: center;
  }
</style>
