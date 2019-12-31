<template>
    <div>
        <transition name="el-fade-in">
            <div class="notification" :style="style" v-show="visible">
                <p class="notification-ctx">{{ ctx }}</p>
                <div>
                    <el-button type="primary" @click="handleClose">确 定</el-button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "notification",
        props: {
            ctx: {
                type: String, default: '劝人学医，天打雷劈；劝人学法，千刀万剐！'
            }
        },
        computed: {
            style() {
                return {}
            }
        },
        methods: {
            handleClose(e) {
                e.preventDefault();
                this.$emit('closed');
            }
        },
    }
</script>

<style lang="scss" scoped>
    .notification {
        position: fixed;
        min-width: 300px;
        background-color: rgba(42, 42, 42, .7);
        padding: 20px;
        box-shadow: 0 0 3px 1px rgba(0,55,175,0.27);
        transition: all .7s;

        .notification-ctx {
            font-size: 16px;
            color: #fff;
            margin-bottom: 10px;
        }
    }
</style>