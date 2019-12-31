import Notification from './notification';

export default {
    extends: Notification,
    data() {
        return {
            verticalOffset: 0,
            autoClose: 3000,
            visible: true
        }
    },
    computed: {
        style() {
            return {
                position: 'fixed',
                left: '50px',
                top: `${this.verticalOffset}px`
            }
        }
    },
    methods: {
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        
        createTimer() {
            if (this.autoClose) {
                this.timer = setTimeout(() => {
                    this.visible = false;
                }, this.autoClose);
            }
        }
    },
    beforeDestroy() {
        this.clearTimer();
    },
    mounted() {
        this.createTimer();
    }
}

/*
* 扩展 Notification 组件
* */