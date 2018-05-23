<template>
  <div>
    <custom-header></custom-header>
    <el-row class="firstRow">
      <el-col :span="9" :offset="1">
        <el-input
          placeholder="ex: Cão Braga"
          suffix-icon="el-icon-search"
          v-model="search">
        </el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-dropdown class="filter">
          <span class="el-dropdown-link">
            Filtrar pesquisa<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <div class="orangeRows">
      <el-row>
        <el-col :span="12" :offset="1">
          Mais Antigos
        </el-col>
      </el-row>
      <el-row>
        <el-col span="22" :offset = "1">
          <hr>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-carousel :interval="3000" type="card" height="300px">
          <el-carousel-item v-for="item in images" :key="item">
            <img width="100%" :src="item">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CustomHeader from './CustomHeader'

export default {
  name: 'MainPage',
  components: {CustomHeader},
  data () {
    return {
      search: '',
      images: ['/static/puppy1.png', '/static/puppy2.png', '/static/puppy3.png', '/static/cat1.png']
    }
  }
}
</script>

<style scoped>
  .firstRow {
    margin-top: 1%;
  }

  .filter {
    margin-top: 7%;
    font-weight: bold;
    color: black;
  }

  .el-dropdown-link {
    cursor: pointer;
  }
  .orangeRows {
    margin-top: 8%;
    color: #fc4a1a;
    font-size: 1.4em;
  }

  hr {
    border-color: #fc4a1a;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
