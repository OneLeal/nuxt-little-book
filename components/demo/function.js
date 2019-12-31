import Vue from 'vue';
import Component from './func-notification';

const NotificationConstructor = Vue.extend(Component);

const instances = [];   // 存储通知组件的实例
let seed = 1;        // 用来生成组件的 id

const notify = (opts) => {
    if (Vue.prototype.$isServer)
        return;

    const { autoClose } = opts;

    const instance = new NotificationConstructor({
            propsData: opts,
            data: {
                autoClose: autoClose === undefined ? 3000 : autoClose
            }
        });

    instance.id = `notification_${seed++}`;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);

    let verticalOffset = 0;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16
    });
    verticalOffset += 16;
    instance.verticalOffset = verticalOffset;
    instances.push(instance);
    return instance.vm;
};

export default notify;