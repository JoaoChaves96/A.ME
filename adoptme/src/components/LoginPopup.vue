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
          <el-button class="btn" type="primary">Log In</el-button>
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
