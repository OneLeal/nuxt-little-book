<template>
    <div class="my-check-box">
      <div class="icon-style" v-show="!checked">
        <i :class="['iconfont']">&#xe631;</i>
      </div>
      <div class="icon-style" v-show="checked">
        <i :class="['iconfont', { 'active': checked }]">&#xe634;</i>
      </div>

      <div class="check-icon-wrap">
        <input
          class="check-icon"
          type="checkbox"
          :checked="checked"
          @change="handleChange"
        />
      </div>
      <div>
        <slot />
      </div>
    </div>
</template>

<script>
    export default {
        name: "my-check-box",
        props: {
          checked: { type: Boolean, default: false },
        },
        model: {
          prop: 'checked',
          event: 'change'
        },
        methods: {
          handleChange() {
            this.$emit('change', event.target.checked)
          }
        },
    }
</script>

<style scoped lang="scss">
  .my-check-box {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .check-icon {
      cursor: pointer;
      opacity: 0;
      margin-right: 10px;
    }

    .icon-style {
      position: absolute;
      top: 0;
      left: 0;

      .active {
        color: #007aff;
      }
    }

    .iconfont {
      font-size: 14px;
      color: #ccc;
      transition: all .5s;
      vertical-align: bottom;
    }
  }
</style>
