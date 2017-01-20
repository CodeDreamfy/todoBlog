<template>
  <div id="app">
     <my-header></my-header>
     <my-nav></my-nav>
     <my-content></my-content>
  </div>
</template>

<script>
import myHeader from './components/myHeader';
import myNav from './components/myNav';
import myContent from './components/myContent';

export default {
  components: {
    myHeader,
    myNav,
    myContent
  }
}
</script>

<style lang="less">
@import "~normalize.css/normalize.css";
@import "./lib/common.css";
#app {
  width: 1120px;
  margin: 0 auto;
}
</style>
