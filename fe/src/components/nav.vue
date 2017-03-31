<template lang="html">
  <Row type="flex" justify="center" align="middle" class="navigation">
    <Col span="4">
      <div class="logo">TodoJs`s Blog</div>
    </Col>
    <Col span="16">
      <Menu mode="horizontal" width="auto" :theme="theme1" active-name="1" class="navg-list">
        <Menu-item name="1">
          <Icon type="ios-paper"></Icon>
          内容管理
        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-people"></Icon>
          用户管理
        </Menu-item>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <Menu-group title="使用">
            <Menu-item name="3-1">新增和启动</Menu-item>
            <Menu-item name="3-2">活跃分析</Menu-item>
            <Menu-item name="3-3">时段分析</Menu-item>
          </Menu-group>
          <Menu-group title="留存">
            <Menu-item name="3-4">用户留存</Menu-item>
            <Menu-item name="3-5">流失用户</Menu-item>
          </Menu-group>
        </Submenu>

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
