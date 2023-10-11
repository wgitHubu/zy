import Vue from 'vue' // 引入Vue
import VueI18n from 'vue-i18n' // 引入国际化的包
import zh from './lang/zh'
import en from './lang/en'
import Cookies from 'js-cookie'

Vue.use(VueI18n) // 全局注册国际化包

export const messages = {
  zh,
  en
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: Cookies.get('lang') || 'zh', // 设置地区
  messages // 设置地区信息
})

export default i18n
