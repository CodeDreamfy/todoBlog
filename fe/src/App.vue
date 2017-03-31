<template>
  <div id="app" class="layout">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from '@/components/nav'

export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>

<style lang="less">
@import "./style/main.less";
</style>
