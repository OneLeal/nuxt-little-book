<template>
    <transition name="fade">
        <div class="notification" v-show="visible">
            <p class="notification-ctx">{{ ctx }}</p>
            <el-button type="primary" size="small" @click="handleClose">关 闭</el-button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "notification",
        props: {
            ctx: {
                type: String,
                required: true
            },
        },
        methods: {
            handleClose(e) {
                e.preventDefault();
                this.$emit('closed');
            }
        }
    }
</script>

<style scoped lang="scss">
    .notification {
        background-color: rgba(42, 42, 42, .7);
        transition: all .5s;
        padding: 20px;
        min-width: 300px;
        min-height: 60px;
        position: fixed;
        top: 50px;
        left: 20px;

        .notification-ctx {
            font-size: 16px;
            color: #fff;
            margin-bottom: 20px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        opacity: 1;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>