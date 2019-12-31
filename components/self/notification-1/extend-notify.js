import Notification from './notification';

export default {
    extends: Notification,
    data() {
        return {
            verticalOffset: 0,
            autoClose: 3000,
            visible: true,
        }
    },
    computed: {
        style() {
            return {
                position: 'fixed',
                left: '20px',
                top: `${this.verticalOffset}px`
            }
        }
    },
    beforeDestroy() {
        this.clearTimer();
    },
    mounted() {
        this.createTimer();
    },
    methods: {
        createTimer() {
            if (this.autoClose) {
                this.timer = setTimeout(() => {
                    this.visible = false;
                }, this.autoClose);
            }
        },

        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        }
    }
}