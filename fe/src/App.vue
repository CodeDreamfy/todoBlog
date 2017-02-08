<template>
	<div class="wrapper">
		<my-header></my-header>
		<my-content></my-content>
	</div>
</template>

<script>
import myHeader from './components/myHeader';
import myContent from './components/myContent';

export default {
  components: {
    myHeader,
    myContent
  }
}
</script>

<style lang="less">
@import "~normalize.css/normalize.css";
@import "./lib/common.css";
.wrapper {
  margin: 0 auto; height: 100%; overflow: hidden;
	display: flex; flex-direction: column;
}
</style>
