<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div v-if="show">
        <el-button @click="dialogVisible = true; show = !show" class="btn">Contactar Anunciante</el-button>
      </div>
    </transition>
    <el-dialog :visible="dialogVisible"
               width="40%"
               :before-close="handleClose">
      <div style="text-align: center;">
        <h2>O novo membro já vai a caminho! Parabéns!</h2>
        <video width="100%" height="100%" autoplay muted loop>
          <source src="../assets/aquisition.mp4" type="video/mp4">
        </video>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AdvertHeader',
  data () {
    return {
      dialogVisible: false,
      show: true
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
      this.show = true
    }
  }
}
</script>

<style scoped>
  .btn {
    width:100%;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.2em;
  }

  div.el-dialog__header {
    background-color: black;
  }
</style>
