<template class="hello">
  <div>
    <div class="video">
      <video autoplay muted loop>
        <source src="../assets/home.mp4" type="video/mp4">
      </video>
    </div>
    <div>
      <router-link to="/main">
        <el-button class="btn">Entrar</el-button>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .video {
    position:fixed;
    right: 0;
    margin:0;
    width:100%;
    height:100%;
    overflow: hidden;
  }
  .video video {
    position: absolute;
    width: 100% !important;
    height: auto !important;
    background-size: cover;
    transition: 1s opacity;
    z-index:-1;
  }

  .btn {
    width:10%;
    position: relative;
    margin-top: 30%;
    margin-left: 45%;
    z-index: 1000;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-family: 'Courier New';
    font-weight: bold;
    font-size: 1em;
  }
</style>
