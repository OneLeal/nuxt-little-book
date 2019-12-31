<template>
    <transition name="el-fade-in" @after-leave="afterLeave" @after-enter="afterEnter">
        <div class="notification" :style="style" v-show="visible">
            <p class="content">{{content}}</p>
            <div>
                <el-button
                        size="small"
                        type="primary"
                        @click.stop.prevent="handleClose"
                >关 闭</el-button>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Notification',
        props: {
            content: {
                type: String,
                required: true
            },
        },
        data () {
            return {
                visible: true
            }
        },
        computed: {
            style () {
                return {}
            }
        },
        methods: {
            handleClose () {
                this.$emit('close')
            },

            afterLeave () {
                this.$emit('closed')
            },

            afterEnter() {}
        }
    }
</script>

<style scoped>
    .notification {
        background-color: rgba(75, 75, 75, .85);
        padding: 20px;
        min-width: 300px;
        transition: all .5s;
        position: fixed;
        left: 20px;
    }
    .content {
        color: #fff;
    }
</style>