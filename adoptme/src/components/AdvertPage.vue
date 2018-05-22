<template>
    <div>
      <custom-header></custom-header>
      <el-row class="firstRow">
        <el-col :offset="1" :span="7">
          <div class="animalName">
            {{ this.advert.name }}, {{ this.advert.location }}
          </div>
        </el-col>
      </el-row>
      <el-row class="imgRow">
        <el-col :span="7" :offset="1">
          <div class="image">
            <img :src="this.advert.image" onerror="this.onerror=null;this.src='http://via.placeholder.com/350x150';">
          </div>
        </el-col>
        <el-col :span="5" :offset="2">
          <el-row class="attributes">
            <b>Tipo: </b> {{ this.advert.type }}
          </el-row>
          <el-row class="attributes">
            <b>Raça: </b> {{ this.advert.breed }}
          </el-row>
          <el-row class="attributes">
            <b>Sexo: </b> {{ this.advert.sex }}
          </el-row>
          <el-row class="attributes">
            <b>Porte: </b> {{ this.advert.port }}
          </el-row>
          <el-row class="attributes">
            <b>Pêlo: </b> {{ this.advert.fur }}
          </el-row>
        </el-col>
      </el-row>
      <div v-if="!sameUser">
        <el-row>
            <el-col :span="5" :offset="16">
              <el-button class="btn">Contactar Anunciante</el-button>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="13" :offset="1">
            <div style="word-wrap: break-word;">
              {{ this.advert.description }}
            </div>
          </el-col>
        </el-row>
      </div>
      <div v-else>
        <el-row>
          <el-col class="sameUser" :span="13" :offset="1">
            <div style="word-wrap: break-word;">
              {{ this.advert.description }}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import CustomHeader from './CustomHeader'
export default {
  name: 'AdvertPage',
  components: {CustomHeader},
  data () {
    return {
      sameUser: false,
      user: '',
      advert: {}
    }
  },
  mounted () {
    let app = this

    app.user = localStorage.getItem('id')
    console.log(this.user)

    let request = 'api/advert/' + this.$route.params.advertId

    this.axios.get(request)
      .then(response => {
        app.advert = response.data

        if (app.advert.userId === app.user) {
          console.log('same user')
          app.sameUser = true
        }
      })
      .catch(error => {
        console.log('GET request failed with error ' + error)
      })
  }
}
</script>

<style scoped>
  .firstRow {
    margin-top: 2%;
  }

  .imgRow {
    margin-top: 2%
  }

  .animalName {
    font-weight: bold;
    font-size: 2em;
    color: #fc4a1a;
  }

  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  .image {
    width: 100%;
    height: auto;
  }

  .attributes {
    margin-top: 5%;
  }

  .btn {
    width:100%;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.2em;
  }

  .sameUser {
    margin-top: 5%
  }
</style>
