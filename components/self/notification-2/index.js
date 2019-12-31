import Notification from './notification.vue';
import notify from './instance';

export default (Vue) => {
    Vue.component(Notification.name, Notification);
    Vue.prototype.$myNotify = notify;
}

/*
* Vue：
* 1. extend：使用基础 Vue 构造器，创建一个“子类”，参数是一个包含组件选项的对象； Vue.extend( options )
* 2. component：注册或获取全局组件；注册还会自动使用给定的id设置组件的名称； Vue.component( id, [definition] )*/