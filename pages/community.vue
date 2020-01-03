<template>
    <div class="community-wrap">
        <p>community 社区</p>
        <div v-for="item of arr" :key="item.name">
            <CheckBox v-model="item.checked" @change="handleChange">
                <span class="ctx">{{ item.name }}</span>
            </CheckBox>
        </div>

        <UiRadio :radio="radio" :opts="radio_opts" @change="handleChangeRadio">
            <div class="title">ADC 选择：</div>
        </UiRadio>

        <div>选择台词：</div>
        <div v-for="item of mid_opts">
            <RadioItem v-model="mid" :value="item.value" @change="handleChangeRadioItem">{{ item.label }}</RadioItem>
        </div>
    </div>
</template>

<script>
    import UiRadio from '../components/public/ui-radio'
    import CheckBox from '../components/public/my-check-box'
    import RadioItem from '../components/public/ui-radio-item'
    import Vue from 'vue'
    export default {
        name: "community",
        components: { CheckBox, UiRadio, RadioItem },
        data(){
            return {
                radio: '2',
                radio_opts: [
                    { value: '1', label: '寒冰' },
                    { value: '2', label: '女警' },
                    { value: '3', label: '卡莎' },
                    { value: '4', label: '烬' },
                ],

                mid: '3',
                mid_opts: [
                    { value: '1', label: '吾之荣耀，离别已久 ——亚索' },
                    { value: '2', label: '真正的大师永远都怀着一颗学徒的心 ——易' },
                    { value: '3', label: '夜晚越黑暗，星星越明亮 ——布隆' },
                ],

                arr: [
                    { name: '电影', checked: true },
                    { name: '音乐', checked: true },
                    { name: '阅读', checked: false },
                    { name: '运动', checked: false },
                    { name: '情感', checked: false },
                ],
            }
        },
        methods: {
            handleChange(value) {
                console.log("res: " + value)
            },

            handleChangeRadio(value) {
                console.log('已选择: ' + value)
            },

            handleChangeRadioItem(value) {
                console.log('已选择台词: ' + value)
            },
        },
    }
</script>

<style lang="scss" scoped>
    .community-wrap {
        .ctx {
            font-size: 12px;
        }

        .notify-wrap {
            margin: 50px 0;
        }
    }
</style>
