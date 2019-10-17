<template>
    <div class="home-container-wrap">
      <el-button type="text" @click="flag = !flag">为什么选择小红书？</el-button>
      <transition name="slider">
        <div class="section" v-show="flag">
          <el-alert
            class="list"
            v-for="item of list"
            :key="item.id"
            :title="item.ctx"
            :closable="false"
            :type="item.type">
          </el-alert>
        </div>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "container",
        data() {
            return {
                flag: true,
                list: [
                    { id: 1, title: '人群', ctx: '最具社交驱动力的年轻人', type: 'success' },
                    { id: 2, title: '场景', ctx: '分享生活方式，直击消费决策', type: 'info' },
                    { id: 3, title: '内容', ctx: '美好、真实、多元的社区氛围', type: 'warning' },
                    { id: 4, title: '效果', ctx: '真实口碑成就年轻人热爱的品牌', type: 'error' },
                ]
            }
        }
    }
</script>

<style scoped>
  .slider-enter-active {
    transition: all .5s;
    animation: slider-down 0.5s;
  }

  .slider-leave-active {
    transition: all .5s;
    animation: slider-down 0.5s reverse;
  }

  .slider-enter, .slider-leave-to {
    opacity: 0;
  }

  @keyframes slider-down {
    0% { height: 0; }
    100% { height: 210px; }
  }

  .home-container-wrap .section .list {
    margin-top: 20px;
    font-size: 18px;
  }
</style>
