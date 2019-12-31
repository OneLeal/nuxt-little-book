import Vue from 'vue';
import Component from './extend-notify';

const ConstructorOfComponent = Vue.extend(Component);
let seed = 1;
let instanceArr = [];

const notify = (options) => {
    if (Vue.prototype.$isServer)
        return;

    const { autoClose, ...rest } = options;
    const instance = new ConstructorOfComponent({
       propsData: { ...rest }, data: { autoClose: autoClose === undefined ? 3000 : autoClose }
    });

    instance.id = `notify_${seed++}`;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);

    //计算高度
    let verticalOffSet = 0;
    instanceArr.forEach(item => {
        verticalOffSet += item.$el.offsetHeight + 16;
    });

    verticalOffSet += 16;
    instance.verticaloffset = verticalOffSet;
    console.log(instance.verticaloffset);
    instanceArr.push(instance);
    return instance.vm;
};

export default notify;