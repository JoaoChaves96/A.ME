<template>
  <div>
    <el-row>
      <div v-if="user.id === '' || user.id === null">
        <el-col :span="2" :offset="18">
          <login-popup></login-popup>
        </el-col>
        <el-col :span="2" :offset="1">
          <register-popup></register-popup>
        </el-col>
      </div>
      <div v-else>
        <el-col :span="3" :offset="15">
          <new-advert></new-advert>
        </el-col>
        <el-col :span="2">
          <div class="name">
            {{ this.user.name }}
          </div>
        </el-col>
        <el-col :span="2">
          <el-button @click="logout" class="btn" icon="el-icon-back">Sair</el-button>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import LoginPopup from './LoginPopup'
import RegisterPopup from './RegisterPopup'
import NewAdvert from './NewAdvert'

export default {
  name: 'CustomHeader',
  components: {NewAdvert, LoginPopup, RegisterPopup},
  data () {
    return {
      user: {
        id: '',
        name: '',
        email: ''
      }
    }
  },
  methods: {
    logout () {
      localStorage.setItem('id', '')
      localStorage.setItem('name', '')
      localStorage.setItem('email', '')
      console.log(this.user)
      this.$router.push({name: 'Main'})
      location.reload()
    }
  },
  mounted () {
    this.user.id = localStorage.getItem('id')
    this.user.name = localStorage.getItem('name')
    this.user.email = localStorage.getItem('email')
    console.log(this.user)
  }
}
</script>

<style>
  .btn {
    width:90%;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-weight: bold;
  }

  .name {
    margin-top: 10%;
    text-align: center;
  }

</style>
