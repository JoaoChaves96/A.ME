<template>
  <div>
    <router-link to="/main">
      <el-button class="back" icon="el-icon-back">Voltar </el-button>
    </router-link>
    <el-row>
      <el-col :span="12" class="edit-profile">
        <div class="edit">
          <h3 class="title">Editar Perfil</h3>
          <el-form>
            <el-form-item>
              <el-row>
                <el-col :span="5">
                  <span>Localização: </span>
                </el-col>
                <el-col :span="19">
                  <el-input prefix-icon="el-icon-location" v-model="editForm.city" :placeholder="this.user.city"> </el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="5">
                  <span>Email: </span>
                </el-col>
                <el-col :span="19">
                  <el-input prefix-icon="el-icon-message" v-model="editForm.email" :placeholder="this.user.email"> </el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="5">
                  <span>Contacto: </span>
                </el-col>
                <el-col :span="19">
                  <el-input prefix-icon="el-icon-phone" v-model="editForm.phone" :placeholder="this.user.phone"> </el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item> <el-button class="edit-btn" type="primary">Editar</el-button> </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="12" class="profile-posts">
        <div class="posts">
          <h3 class="title"> Os meus anúncios </h3>
          <el-table style="text-align:left;" :data="post">
            <el-table-column prop=name label="Nome"></el-table-column>
            <el-table-column prop=location label="Localização"></el-table-column>
            <el-table-column prop=type label="Tipo"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CustomHeader from './CustomHeader'
export default {
  name: 'ProfilePage',
  components: {CustomHeader},
  data () {
    return {
      editForm: {
        location
      },
      user: {},
      post: []
    }
  },
  mounted () {
    this.user.id = localStorage.getItem('id')
    this.user.name = localStorage.getItem('name')
    this.user.email = localStorage.getItem('email')
    this.user.city = localStorage.getItem('location')
    this.user.phone = localStorage.getItem('phone')
    this.getUserPosts()
  },
  methods: {
    getUserPosts () {
      this.axios.get('api/anuncio/user/' + this.user.id)
        .then(response => {
          this.post = response.data
        })
        .catch(error => {
          console.log('GET request failed with error ' + error)
        })
    }
  }
}
</script>
<style scoped>
  .el-input {
    width: 90%;
  }
  .edit-profile {
    text-align: center;
    width: 50%;
    padding-left: 5%;
    padding-right: 10%;
  }
  .edit {
    border: solid 2px black;
    background-color: white;
  }
  .profile-posts {
    text-align: center;
    width: 50%;
    padding-left: 5%;
    padding-right: 10%;
  }
  .posts {
    border: solid 2px black;
    background-color: white;
  }
  .title {
    color: #FF4724;
  }
  .edit-btn {
    border-color: #f7b733;
    background-color: #f7b733;
  }
  .el-table {
    padding: 3%;
  }
  .back {
    width: 10%;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5%;
    margin-left: 5%;
    margin-top: 5%;
  }
</style>
