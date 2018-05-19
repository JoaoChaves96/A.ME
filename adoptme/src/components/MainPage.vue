<template>
  <div>
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
      <el-col :span="2" :offset="4">
        <el-button class="btn">Log In</el-button>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button class="btn">Registar</el-button>
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
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in images" :key="item">
            <h1>{{ item }}</h1>
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      search: '',
      images: ['@/assets/puppy1.png', '@/assets/puppy2.png', '@/assets/puppy3.png', '@/assets/cat1.png']
    }
  }
}
</script>

<style scoped>
  .firstRow {
    margin-top: 1%;
  }

  .btn {
    width:100%;
    background-color: #f7b733;
    text-align: center;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1em;
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
    margin-top: 10%;
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
