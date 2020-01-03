<template>
    <div class="value-change">
        <p :class="[ { 'color-red': colorRed }, { 'color-blue': colorBlue } ]">{{ number }}</p>
    </div>
</template>

<script>
    export default {
        name: "value-change",
        props: {
            number: { type: Number }
        },
        data() {
            return {
                colorRed: false,
                colorBlue: false,
                timer: null
            }
        },
        watch: {
            number(val, prev) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }

                if (val > prev) {
                    this.colorRed = true
                    this.colorBlue = false
                } else if (val < prev) {
                    this.colorRed = false
                    this.colorBlue = true
                } else {
                    this.colorRed = false
                    this.colorBlue = false
                }

                this.timer = setTimeout(() => {
                    this.colorBlue = false
                    this.colorRed = false
                    clearTimeout(this.timer)
                }, 5000);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .value-change {
        p {
            text-align: center;
            width: 60px;
            font-size: 16px;
            padding: 5px 10px;
            border-radius: 4px;
            color: #333;
        }

        p.color-red {
            color: #ff2c39;
            background-color: rgba(242, 196, 188, 0.8);
        }

        p.color-blue {
            color: #007aff;
            background-color: rgba(198, 146, 244, 0.8);
        }
    }
</style>