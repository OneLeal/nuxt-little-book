<template>
  <div class="home-wrap">
    <div class="home-top">
      <h1>小红书</h1>
      <em>标记美好生活</em>
      <div class="home-pictures-wrap">
        <p><img style="width: 200px;" src="../static/imgs/01.jpg" alt=""></p>
        <p><img style="width: 200px;" src="../static/imgs/01.jpg" alt=""></p>
        <p><img style="width: 200px;" src="../static/imgs/01.jpg" alt=""></p>
        <p><img style="width: 200px;" src="../static/imgs/01.jpg" alt=""></p>
      </div>
    </div>

    <div class="home-container">
      <Container />
      <el-button @click="loginOut" type="text" class="mt-20">退 出</el-button>
    </div>
  </div>
</template>

<script>
  import Container from '../components/home/container'
export default {
  components: { Container },
    beforeMount() {
      let value = localStorage.getItem('testNuxtLocalValue')
        if (value) {
            this.showMsg('info', '登录成功')
        } else {
            this.showAlert('info', '温馨提示', '请先登录', this.jumpToLoginPage)
        }
    },
    methods: {
        jumpToLoginPage() {
            this.$router.push('/login')
        },

        loginOut() {
            localStorage.removeItem('testNuxtLocalValue')
            this.$router.push('/login')
            this.showMsg('info', '您已退出')
        },

        showAlert(type, title, content, dosomething){
            this.$alert(content, title, {
                type: type || 'info',
                confirmButtonText: '确定',
                callback: action => {
                    if (dosomething) {
                        dosomething();
                    }
                }
            });
        },

        showMsg(type, msg){
            this.$message({
                type: type,
                duration: 2000,
                showClose: true,
                message: msg
            });
        },
    }
}
</script>

<style>
  @import "../style/common.css";

  .home-wrap {
    padding: 20px 0;
  }

  .home-wrap .home-top {
    border-bottom: 1px #999 solid;
  }

  .home-wrap .home-top h1 {

  }

  .home-wrap .home-top em {
    font-size: 18px;
    color: #333;
    margin-top: 10px;
  }

  .home-container {
    height: 75vh;
    margin-top: 20px;
  }

  .home-pictures-wrap {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
</style>
