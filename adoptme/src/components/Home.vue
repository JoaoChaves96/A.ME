<template class="hello">
  <div>
    <div class="video">
      <video autoplay muted loop>
        <source src="../assets/background.mp4" type="video/mp4">
      </video>
      <audio autoplay loop>
        <source src="../assets/background.wav" type="audio/wav">
      </audio>
    </div>
    <div>
      <router-link to="/main">
        <el-button class="btn">ENTRAR</el-button>
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
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
  .video video {
    position: fixed;
    width: 100% !important;
    height: auto !important;
    background-size: cover;
    transition: 1s opacity;
    z-index:-1;
  }

  .btn {
    width:10%;
    position: absolute;
    top: 70%;
    right: 45%;
    z-index: 1000;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-family: 'Courier New';
    font-weight: bold;
    font-size: 1.8em;
  }
</style>
