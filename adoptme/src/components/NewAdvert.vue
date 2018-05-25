<template>
  <div>
    <el-button class="btn" @click="dialogVisible = true" icon="el-icon-plus">Novo Anúncio</el-button>
    <el-dialog title="Novo Anúncio"
               :visible="dialogVisible"
               width="70%"
               :before-close="handleClose">
      <el-form ref="advertForm" :model="advertForm" label-width="20%">
        <el-row>
          <el-col :span="12">
              <el-form-item label="Nome">
                <el-input class="formInput" v-model="advertForm.name"></el-input>
              </el-form-item>
              <el-form-item label="Localização">
                <el-input class="formInput" v-model="advertForm.location"></el-input>
              </el-form-item>
            <el-form-item label="Tipo">
              <el-input class="formInput" v-model="advertForm.type"></el-input>
            </el-form-item>
              <el-form-item label="Raça">
                <el-input class="formInput" v-model="advertForm.breed"></el-input>
              </el-form-item>
              <el-form-item label="Sexo">
                <el-input class="formInput" v-model="advertForm.sex"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="5" :offset="1">
            <input type="file" id="file" ref="file" accept="image/*" @change="onSelected">
            <div class="imgDiv" style="margin-top: 10%">
              <img width="100%" height="100%" :src="imageUrl" v-show="showPreview">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="Porte">
              <el-input class="formInput" v-model="advertForm.port"></el-input>
            </el-form-item>
            <el-form-item label="Pêlo">
              <el-input class="formInput" v-model="advertForm.fur"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="Descrição">
              <el-input rows="4" type="textarea" v-model="advertForm.description"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="4">
            <el-form-item>
              <el-button class="createBtn" @click="createAdvert" type="primary">Criar anúncio</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'NewAdvert',
  data () {
    return {
      dialogVisible: false,
      imageSelected: null,
      imageUrl: '',
      showPreview: false,
      advertForm: {
        name: '',
        location: '',
        type: '',
        breed: '',
        sex: '',
        port: '',
        fur: '',
        image: '',
        description: ''
      }
    }
  },
  methods: {
    onSelected (file) {
      this.imageSelected = this.$refs.file.files[0]

      let reader = new FileReader()
      this.imageUrl = URL.createObjectURL(this.imageSelected)

      this.advertForm.image = '/static/' + this.imageSelected.name

      reader.addEventListener('load', function () {
        this.showPreview = true
        console.log(this.imageUrl)
      }.bind(this), false)

      if (this.imageSelected) {
        /*
          Ensure the file is an image file.
        */
        if (/\.(jpe?g|png|gif)$/i.test(this.imageSelected.name)) {
          /*
            Fire the readAsDataURL method which will read the file in and
            upon completion fire a 'load' event which we will listen to and
            display the image in the preview.
          */
          reader.readAsDataURL(this.imageSelected)
        }
      }
    },
    handleClose (done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(() => {
          this.dialogVisible = false
          done()
        })
        .catch(() => {
        })
    },
    createAdvert () {
      let app = this
      if (this.advertForm.name === '' || this.advertForm.type === '' || this.advertForm.location === '' || this.advertForm.description === '') {
        this.$message.error('Os campos "Nome", "Localização" e "Descrição" têm obrigatoriamente que ser preenchidos!')
      } else {
        this.axios.post('api/anuncio', {
          userId: localStorage.getItem('id'),
          name: this.advertForm.name,
          location: this.advertForm.location,
          type: this.advertForm.type,
          breed: this.advertForm.breed,
          sex: this.advertForm.sex,
          port: this.advertForm.port,
          fur: this.advertForm.fur,
          image: this.advertForm.image,
          description: this.advertForm.description
        })
          .then(function (response) {
            app.dialogVisible = false
            let url = '/advert/' + response.data._id
            app.$router.push({path: url})
          })
          .catch(function (error) {
            console.log('error: ' + error)
          })
      }
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
  }

  .createBtn {
    width:30%;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-weight: bold;
  }

  .formInput {
    width: 80%;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 100%;
    display: block;
  }

  .imgDiv {
    width: 100%;
    margin-left: 25%;
    height: 100%;
    overflow: auto;
  }
</style>
