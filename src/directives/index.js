import store from '@/store'
export const imgerror = {
  inserted(el, binging, vnode) {
    // console.log(el)
    // console.log(binging)
    // console.log(vnode)
    el.onerror = function() {
      // 当图片出现异常的时候 会将指令配置的默认图片设置为该图片的内容
      // dom可以注册error事件
      el.src = binging.value // 这里不能写死
    }
  }
}
export const isHas = {
  inserted(el, binging) {
    const isHas = store.state.user.userInfo.roles.points.includes(binging.value)
    if (isHas) return
    el.remove()
  },
  bind() {
    console.log('用了权限控制指令')
  }
}
