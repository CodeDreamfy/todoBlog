<template>
  <header>
		<div class="box_wrapper">
      <div class="logo"></div>
			<nav>
				<a href="javascript:;" :class="{ active: status==0}">首页</a>
				<a href="javascript:;" :class="{ active: status==1}">技术天地</a>
				<a href="javascript:;" :class="{ active: status==2}">生活随笔</a>
				<a href="javascript:;" :class="{ active: status==3}">电影收藏夹</a>
				<a href="javascript:;" :class="{ active: status==4}">音乐推荐</a>
			</nav>
		</div>

	</header>
</template>
<script>
  export default {
		data() {
			return {
				status: 0
			}
		}
	}
</script>
<style lang="less">
  header {
		flex: 0 0 90px;
		background: #fff;
		box-shadow: 0 0.4em 0.4em 0 #eee;
		display: flex; justify-content: space-between;
		align-items: center; position: relative; z-index: 1;
		.box_wrapper {
			height: 90px; flex:none;
      display: flex; justify-content: space-between;
      align-items: center;
      .logo {
        width: 80px; height: 80px;
        border-radius: 50%; transition: all 0.6s;
        background: url(../assets/face.jpg) no-repeat center center;
        background-size: 60px 60px;
        &:hover {
          box-shadow: 0.1em 0.1em 0.3em 0 #ccc inset;
          background-size: 80px 80px;
        }
      }
			nav {
				height: 100%; flex: none;
				display: flex; align-items: center;
				justify-content: center;
				& > a {
					height: 100%; padding: 0 24px;
					flex: 0 0 auto; display: flex; align-items: center;
					&.active {
						color: #1397fd; font-weight: 600;
						background: rgba(231,231,231,.5);
						box-shadow: 0 0.1em 0.2em 0 #e7e7e7 inset;
					}
          &:hover.active { background: rgba(231,231,231,.5); }
          &:hover {
            background: rgba(231,231,231,.3);
          }
				}
			}
		}
  }
</style>
