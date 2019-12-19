<template>
    <div class="ui-radio">
        <slot />

        <div v-for="item of opts" :key="item.value">
            <input type="radio" v-model="receive_radio" :value="item.value" @change="handleChange">
            <span>{{ item.label }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ui-radio",
        props: {
            radio: { type: [Number, String], default: '' },
            opts: { type: Array, default: () => [] }
        },
        data() {
            return {
                receive_radio: this.radio
            }
        },
        watch: {
            radio(value) {
                this.receive_radio = value
            }
        },
        methods: {
            handleChange() {
                this.$emit('change', this.receive_radio)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>