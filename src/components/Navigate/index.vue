<template>
  <Menu mode="horizontal" @on-select="select">
    <MenuItem class="logo" name="logo">
      <Image src="https://s1.ax1x.com/2022/07/04/jYBcRS.png" alt="logo"/>
    </MenuItem>
    <MenuItem name="home">
      <Icon type="ios-home"/>
      首页
    </MenuItem>
    <MenuItem name="article">
      <Icon type="ios-bookmarks"/>
      文章
    </MenuItem>
    <MenuItem name="bangumi">
      <Icon type="logo-playstation"/>
      番剧
    </MenuItem>
    <MenuItem name="note">
      <Icon type="ios-clipboard"/>
      笔记
    </MenuItem>
    <Submenu name="more">
      <template #title>
        <Icon type="ios-stats"/>
        更多
      </template>
      <MenuGroup title="后台">
        <MenuItem name="3-1">后台登录</MenuItem>
        <MenuItem name="3-2">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<script>
import {useRouter} from "vue-router";
import {ref} from "vue";

export default {
  name: "Navigate",
  setup() {
    const router = useRouter()

    return {
      select(name) {
        router.push({
          path: '/' + name
        })
      }
    }
  },
}
</script>

<style scoped>
.logo:hover {
  border-bottom: 0 !important;
}
</style>