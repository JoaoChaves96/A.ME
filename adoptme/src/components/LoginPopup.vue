<template>
  <div>
    <el-button class="btn" @click="dialogVisible = true">Log In</el-button>
    <el-dialog title="Log In"
               :visible="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <el-form ref="loginForm" :model="loginForm">
        <el-form-item label="E-mail">
          <el-input placeholder="example@example.com" v-model="loginForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input placeholder="********" type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="formBtn">
          <el-button class="btn" @click="login" type="primary">Log In</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LoginPopup',
  data () {
    return {
      dialogVisible: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(() => {
          this.dialogVisible = false
          done()
        })
        .catch(() => {
        })
    },
    login () {
      if (this.loginForm.email === '' || this.loginForm.password === '') {
        alert('Invalid inputs. Try again!')
      } else {
        this.axios.post('api/user/auth', {
          email: this.loginForm.email,
          password: this.loginForm.password
        })
          .then(function (response) {
            localStorage.setItem('id', response.data.user.id)
            localStorage.setItem('name', response.data.user.name)
            localStorage.setItem('email', response.data.user.email)
            console.log('response')
            console.log(response)
            location.reload()
          })
          .catch(function (error) {
            console.log('error: ' + error)
          })
      }
    }
  }
}
</script>

<style>
  .formBtn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
