<template>
  <div id="app">
    <y-button icon="settings"
              @click="test"
              icon-position="left">
      按钮
    </y-button>
    <y-button icon="loading"
              icon-position="right">
      按钮
    </y-button>
    <y-button icon="settings"
              icon-position="left">
      按钮
    </y-button>
    <y-button icon="settings"></y-button>
    <!--    <y-button icon="settings" icon-position="up">-->
    <!--        按钮-->
    <!--    </y-button>-->
    <y-icon name="download"></y-icon>
    <y-button-group>
      <y-button icon="left">上一页</y-button>
      <y-button>更多</y-button>
      <y-button icon="right"
                icon-position="right">下一页
      </y-button>
    </y-button-group>
    <y-button>确认</y-button>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

:root {
  --button-color: #6e6d7a;
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 8px;
  --border-color: #E7E7E9;
  --border-color-hover: #666;
  }
</style>
