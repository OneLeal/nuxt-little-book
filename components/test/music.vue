<template>
    <div class="music">
        <p class="title">今日推荐</p>

        <ul class="list">
            <li>
                <div class="name">歌名</div>
                <div class="singer">歌手</div>
                <div class="like">喜欢</div>
                <div class="info">歌词</div>
                <div class="btn">操作</div>
            </li>
            <li v-for="(item, index) of arr" :key="index">
                <div class="name">{{ item.name }}</div>
                <div class="singer">{{ item.singer }}</div>
                <div class="like">{{ item.like }}</div>
                <div class="info">{{ item.info }}</div>
                <div class="btn">
                    <el-button type="primary" size="small" @click="handleClose">关 闭</el-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "music",
        data() {
            return {
                arr: [
                    { name: '都说',
                        singer: '龙梅子/老猫',
                        like: '999+',
                        info: '跨过山和大海一片苍茫，回家的路很长'
                    },

                    { name: '绿色',
                        singer: '陈雪凝',
                        like: '999+',
                        info: '若不是你突然闯进我生活'
                    },

                    { name: '爸爸妈妈',
                        singer: '王蓉',
                        like: '999+',
                        info: '我爱他，他是我心中的那只雨蝶'
                    },

                    { name: '下个路口见',
                        singer: '李宇春',
                        like: '999+',
                        info: '刚下的地铁还不算拥挤'
                    },
                ]
            }
        },
        methods: {
            handleClose() {
                console.log(this.$notify.close)
                this.$notify.close()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .music {
        width: 760px;
        padding: 20px;

        .title {
            font-weight: bold;
            font-size: 16px;
            color: #000;
            margin-bottom: 20px;
        }

        .list {
            border-radius: 4px;
            border: 1px #ccc solid;

            li {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-bottom: 1px #ccc solid;

                div {
                    font-size: 14px;
                    color: #333;
                    text-align: center;
                    padding: 5px 10px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }

            li:last-of-type {
                border-bottom: none;
            }

            li div.name {
                width: 150px;
            }

            li div.singer {
                width: 150px;
            }

            li div.like {
                width: 150px;
            }

            li div.info {
                width: 200px;
            }

            li div.btn {
                width: 150px;
            }
        }
    }
</style>