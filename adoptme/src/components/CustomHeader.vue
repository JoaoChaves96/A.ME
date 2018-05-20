<template>
  <div>
    <el-row>
      <el-col :span="2" :offset="18">
        <login-popup></login-popup>
      </el-col>
      <el-col :span="2" :offset="1">
        <register-popup></register-popup>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LoginPopup from './LoginPopup'
import RegisterPopup from './RegisterPopup'

export default {
  name: 'CustomHeader',
  components: {LoginPopup, RegisterPopup}
}
</script>

<style>
  .btn {
    width:100%;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1em;
  }

</style>
