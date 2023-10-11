<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <svg-icon icon-class="language" class-name="language" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for=" (value ,key) in messages" :key="key" :disabled="lang===key" @click.native="ToggleLang(key)">{{ value.name }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { messages } from '@/i18n'
import Cookie from 'js-cookie'
export default {
  name: 'ToggleLang',
  data() {
    return {
      messages,
      lang: Cookie.get('lang') || 'zh'
    }
  },
  methods: {
    ToggleLang(lang) {
      // 改变切换语言
      this.$i18n.locale = lang
      Cookie.set('lang', lang)
      this.lang = lang
      // 路由强制刷新当前页面
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.language{
 color: #fff;
 font-size: 18px;
}
</style>
