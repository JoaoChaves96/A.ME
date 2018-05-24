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
            <el-dropdown @command="handleCommand">
              <el-button class="btn" type="primary">
                {{this.user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">Perfil</el-dropdown-item>
                <el-dropdown-item command="logout">Sair</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
import ProfilePage from './ProfilePage'

export default {
  name: 'CustomHeader',
  components: {NewAdvert, LoginPopup, RegisterPopup, ProfilePage},
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
    handleCommand (command) {
      if (command === 'logout') {
        this.logout()
      } else if (command === 'profile') {
        this.$router.push('/user/' + this.user.id)
      }
    },
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
    margin-top: 0%;
    text-align: center;
  }
</style>

<style scoped>
  .el-dropdown {
    background-color: #f7b733;
    vertical-align: top;
    text-decoration: none;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
