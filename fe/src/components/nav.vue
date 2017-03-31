<template lang="html">
  <Row type="flex" justify="center" align="middle" class="navigation">
    <Col span="4">
      <div class="logo">TodoJs`s Blog</div>
    </Col>
    <Col span="16">
      <Menu mode="horizontal" width="auto" :theme="theme1" active-name="1" class="navg-list">
        <Menu-item name="1">
          <Icon type="ios-paper"></Icon>
          首页
        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-people"></Icon>
          前端开发
        </Menu-item>
        <Menu-item name="3">
          <Icon type="ios-people"></Icon>
          杂文摘要
        </Menu-item>
        <Menu-item name="4">
          <Icon type="ios-people"></Icon>
          电影推荐
        </Menu-item>
        <Menu-item name="5">
          <Icon type="ios-people"></Icon>
          音乐推荐
        </Menu-item>
      </Menu>
    </Col>
  </Row>
</template>

<script>
export default {
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>
