<template>
  <header>
		<div class="logo"></div>
		<div class="box_wrapper">
			<nav>
				<a href="javascript:;" class="active">首页</a>
				<a href="javascript:;">技术天地</a>
				<a href="javascript:;">生活随笔</a>
				<a href="javascript:;">电影收藏夹</a>
				<a href="javascript:;">音乐推荐</a>
			</nav>
		</div>
		
	</header>
</template>
<script>
  export default {}
</script>
<style lang="less">
  header {
		position: absolute; z-index: 2;
    width: 100%; height: 90px;
		background: #fff;
		box-shadow: 0 0.4em 0.4em 0 #eee;
		display: flex; justify-content: space-between;
		align-items: center;
		.box_wrapper {
			height: 100%;
			nav {
				float: right;
				height: 100%; 
				display: flex; align-items: center;
				justify-content: center;
				& > a {
					height: 100%; padding: 0 24px; 
					flex: 0 0 auto; display: flex; align-items: center;
					&.active,&:hover {
						color: #1397fd; font-weight: 600;
						background: rgba(231,231,231,.5);
						box-shadow: 0 0.1em 0.2em 0 #e7e7e7 inset;
					}
				}
			}
		}
  }
</style>