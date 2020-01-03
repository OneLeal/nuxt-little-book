import Vue from 'vue'
import { isVNode } from '../../utils/vdom'
import Component from './notification'
const NotificationConstructor = Vue.extend(Component)

let seed = 1
const instances = []
const initHeight = 5

const notify = options => {
  // 解构参数
  const { autoClose, ...rest } = options

  // 实例化 Notification
  const instance = new NotificationConstructor({
    propsData: { ...rest },
    data: { autoClose: autoClose === undefined ? 3000 : autoClose },
  })

  if (isVNode(options.content)) {
    instance.$slots.default = [options.content]
    instance.content = ''
  }

  // 设置 id （第几个）
  const id = `notification_${seed++}`
  instance.id = id

  // 手动挂载
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  // 设置高度
  let verticalOffset = 193
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + initHeight
  })
  verticalOffset += initHeight
  instance.verticalOffset = verticalOffset

  // 提示消息框关闭后
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })

  // 提示消息框关闭时
  instance.$on('close', () => {
    instance.vm.visible = false
  })

  instances.push(instance)
  return instance.vm
}

const removeInstance = instance => {
  if (!instance) return
  const len = instances.length

  // 从数组中移除实例
  const index = instances.findIndex(item => {
    return item.id === instance.id
  })
  instances.splice(index, 1)

  // 剩余的实例高度重置
  if (len <= 1) return
  const h = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(
      instances[i].verticalOffset - h - initHeight
    )
  }
}

export default notify
