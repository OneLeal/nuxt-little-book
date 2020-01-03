<template>
    <div>
        <p>指数：</p>
        <div class="inp">
            <el-input v-model="num" />
        </div>
        <div class="odds">
            <div>
                <ValueChange :number="init1" />
                <el-button type="primary" size="small" @click="handleAdd(1)">新 增</el-button>
            </div>

            <div>
                <ValueChange :number="init2" />
                <el-button type="primary" size="small" @click="handleAdd(2)">新 增</el-button>
            </div>

            <div>
                <ValueChange :number="init3" />
                <el-button type="primary" size="small" @click="handleAdd(3)">新 增</el-button>
            </div>
        </div>

        <hr />

        <div class="odds">
            <div v-for="(item, index) of arr" :key="index">
                <ValueChange :number="item" />
                <el-button type="info" size="small" @click="handleChange(index)">变 化</el-button>
            </div>
        </div>

        <hr />

        <div class="notify-section">
            <div class="btn-group">
                <el-button @click="handleDispatch(1)" size="small" type="primary">通 知</el-button>
                <el-button @click="handleDispatch(2)" size="small" type="info">介 绍</el-button>
                <el-button @click="handleDispatch(3)" size="small" type="warning">警 告</el-button>
                <el-button @click="handleDispatch(4)" size="small" type="danger">错 误</el-button>
            </div>

            <transition name="el-fade-in">
                <div v-show="music_list.length > 0">
                    <DialogMusic>
                        <ul v-for="item of music_list" :key="item.name">
                            <transition name="el-fade-in" @after-leave="afterLeave(item)">
                                <div class="container" v-show="item.show">
                                    <li class="item"><span>歌曲：</span><span>{{ item.msg.name }}</span></li>
                                    <li class="item"><span>歌手：</span><span>{{ item.msg.singer }}</span></li>
                                    <li class="item"><span>收藏：</span><span>{{ item.msg.num }}</span></li>
                                    <li class="item"><el-button @click="handleClose(item)" size="small" type="text">已 读</el-button></li>
                                </div>
                            </transition>
                        </ul>
                    </DialogMusic>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import DialogMusic from '../components/dialog-component'
    import ValueChange from '../components/value-change'
    export default {
        name: "about",
        components: { ValueChange, DialogMusic },
        data() {
            return {
                num: '',
                init1: 5,
                init2: 12,
                init3: 16,
                arr: [10, 20, 30, 40, 50],
                music1: { name: '大田后生仔', singer: '王雨萌', num: '999+' },
                music2: { name: '下山', singer: '小师妹', num: '999+' },
                music3: { name: '句号', singer: '邓紫棋', num: '999+' },
                music4: { name: '加减乘除', singer: '花童', num: '999+' },
                music_list: [],
            }
        },
        methods: {
            handleAdd(flag) {
                this['init' + flag] = Number(this.num);
                this.num = ''
            },

            handleChange(index) {
                this.arr[index] = Number(this.num)
                this.num = ''
            },

            handleDispatch(flag) {
                let obj = {
                    msg: this['music' + flag],
                    show: true,
                    timer: setTimeout(() => {
                        const index = this.music_list.findIndex(item => item.msg.name === this['music' + flag].name);
                        this.music_list[index].show = false;
                        clearTimeout(this.music_list[index].timer);
                    }, 8000)
                };

                this.music_list.push(obj);
            },

            handleClose(target) {
                const index = this.music_list.findIndex(item => item.msg.name === target.msg.name);
                this.music_list[index].show = false;
                if (this.music_list[index].timer) {
                    clearTimeout(this.music_list[index].timer);
                }
            },

            afterLeave(target) {
                const index = this.music_list.findIndex(item => item.msg.name === target.msg.name);
                this.music_list.splice(index, 1)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .odds {
        display: flex;

        div {
            text-align: center;
        }
    }

    .inp {
        width: 100px;
        margin: 10px 0;
    }

    .notify-section {
        ul {
            border-bottom: 1px rgba(0, 55, 175, .1) dashed;

            .container {
                display: flex;
            }

            li {
                height: 35px;
                line-height: 35px;
                font-size: 16px;
                list-style: none;
                width: 200px;
                text-indent: 10px;
            }

            li:last-of-type {
                width: 60px;
            }
        }

        ul:last-of-type {
            border-bottom: none;
        }

        margin: 20px 0;
    }
</style>
