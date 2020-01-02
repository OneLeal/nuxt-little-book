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
        <el-button type="primary" @click="handleNotify">提 示</el-button>
        <el-button type="info" @click="myNotify">介绍</el-button>
        <el-button type="warning" @click="elNotify">警 告</el-button>
        <el-button @click="loginOut" type="text" class="mt-20">退 出</el-button>
    </div>
  </div>
</template>

<script>
    import Music from  '../components/test/music'
  import Container from '../components/home/container';
  import notify from '../components/self/notification-1/function';
  import Notification from '../components/self/notification-1/notification';
  import Vue from 'vue';
  import MyNotification from '../components/self/notification-2/index';
export default {
  components: { Container },
    created() {
      Vue.use(MyNotification);
    },
    beforeMount() {
      let value = localStorage.getItem('testNuxtLocalValue')
        if (value) {
            this.showMsg('info', '登录成功')
        } else {
            this.showAlert('info', '温馨提示', '请先登录', this.jumpToLoginPage)
        }
    },
    mounted() {
      Vue.component(Notification.name, Notification);
      Vue.prototype.$uiNotify1 = notify;
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

        handleNotify() {
          this.$uiNotify1({
            autoClose: 1500,
            ctx: "你好，奥特曼",
          });
        },

        elNotify() {
            this.$notify({
                customClass: 'myStyle',
                message: this.$createElement(Music),
                duration: 0,
            });
        },

        myNotify() {
           this.$myNotify({
               isVnode: true,
              content: this.$createElement(Music),
              autoClose: 4000
           });
        },
    }
}
</script>

<style>
  @import "../style/common.css";

  .myStyle {
      width: 850px;
      background-color: #f7f7f7;
      margin-right: 50%;
      margin-top: 50px;
      transform: translateX(50%);
  }

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
