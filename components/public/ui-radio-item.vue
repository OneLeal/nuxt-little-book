<template>
    <div class="ui-radio">
        <input class="radio-style" type="radio" :value="value" :checked="radio === value" @change="handleChange">
        <slot />
    </div>
</template>

<script>
    import VIcon from './icon'
    export default {
        components: { VIcon },
        props: {
            value: { type: [String, Number], default: '' },
            radio: { type: [String, Number], default: '' },
        },
        model: {
            prop: 'radio',
            event: 'change'
        },
        methods: {
            handleChange() {
                this.$emit('update:radio', this.value)
                this.$emit('change', this.value)
            }
        }
    }
</script>

<style scoped lang="scss">
    .ui-radio {
        .radio-style {
            margin-right: 10px;
        }
    }
</style>