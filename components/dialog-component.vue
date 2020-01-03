<template>
    <div class="dialog">
        <p class="title">提 示</p>
        <slot />
    </div>
</template>

<script>
    export default {
        name: "dialog-component",
    }
</script>

<style lang="scss" scoped>
    .dialog {
        width: 660px;
        position: fixed;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 3px 1px rgba(0,55,175,0.27);

        .title {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            font-size: 16px;
            font-weight: bold;
            text-indent: 10px;
            background: rgb(201, 178, 244);
            height: 35px;
            line-height: 35px;
        }
    }
</style>