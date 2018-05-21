<template>
  <div>
    <el-button class="btn" @click="dialogVisible = true">Registar</el-button>
    <el-dialog title="Registar"
               :visible="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <el-form ref="registerForm" :model="registerForm">
        <el-form-item label="Nome">
          <el-input placeholder="John Doe" v-model="registerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="E-mail">
          <el-input placeholder="example@example.com" v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Telefone">
          <el-input placeholder="912345678" v-model="registerForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input placeholder="********" type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item class="formBtn">
          <el-button class="btn" @click="register" type="primary">Registar</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'RegisterPopup',
  data () {
    return {
      dialogVisible: false,
      registerForm: {
        name: '',
        email: '',
        phone: '',
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
    register () {
      let app = this
      if (this.registerForm.name === '' || this.registerForm.email === '' || this.registerForm.password === '') {
        alert('Invalid inputs. Try again!')
      } else {
        app.axios.post('api/user/create', {
          name: this.registerForm.name,
          email: this.registerForm.email,
          phone: this.registerForm.phone,
          password: this.registerForm.password
        })
          .then(function () {
            alert('registered successfully')
            location.reload()
          })
      }
    }
  }
}
</script>

<style>

</style>
