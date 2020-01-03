<template>
  <transition
    name="el-fade-in"
    @after-leave="afterLeave"
    @after-enter="afterEnter"
  >
    <div v-show="visible" class="notification" :style="style">
      <slot>
        <div v-if="isVNode">
          <div v-html="content" />
        </div>
        <div v-else>{{ content }}</div>
      </slot>

      <div class="btn-close" @click="handleClose">
        <i class="icon-clean iconfont" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: { type: [Object, String], required: true },
    isVNode: { type: Boolean, default: false },
  },
  data() {
    return {
      visible: true,
    }
  },
  computed: {
    style() {
      return {}
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },

    afterLeave() {
      this.$emit('closed')
    },

    afterEnter() {},
  },
}
</script>

<style lang="scss" scoped>
.notification {
  background-color: #fff;
  min-width: 300px;
  transition: all 0.5s;
  position: fixed;
  left: calc(50% - 20px);
  transform: translateX(-50%);
  z-index: 99;
  box-shadow: 0 0 6px 2px rgba(0, 55, 175, 0.27);
  border-radius: 4px;

  .btn-close {
    cursor: pointer;
    color: #fff;
    text-align: center;
    position: absolute;
    right: -34px;
    bottom: 50%;
    transform: translateY(50%);
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background: rgba(0, 55, 175, 0.5);
    box-shadow: 0 0 3px 1px rgba(0, 55, 175, 0.27);
  }
}
</style>
