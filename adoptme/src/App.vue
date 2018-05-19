<template>
  <div id="app">
    <el-header>
      <img id="logo" src="./assets/new_logo.png">
    </el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

  #logo {
    width: 100%;
  }

  body {
  background-color: #dfd6e3;
}
</style>
