<template>
  <div>
    <custom-header></custom-header>
    <el-row class="firstRow">
      <el-col :span="9" :offset="1">
        <el-input placeholder="ex: Cão Braga" suffix-icon="el-icon-search" v-model="search" @change="filter"> </el-input>
      </el-col>
      <el-row class="results">
        <el-col :span="8" class="results" v-for="o in posts" :key="o.id" :offset="0">
          <el-card :body-style="{padding:'5px'}">
            <img :src='o.image' class="image">
            <div style="padding: 15px">
              <span> <a :href="'#/advert/'+ o._id"> {{o.name}} </a>, {{o.location}} </span>
              <div class="post-description">
                <span> {{o.description}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
    <div class="orangeRows">
      <el-row>
        <el-col :span="12" :offset="1">
          Mais Antigos
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22" :offset = "1">
          <hr>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-carousel :interval="2000" type="card" height="30em">
          <el-carousel-item class="photo" v-for="item in images" :key="item">
            <img height="100%" width="100%" :src="item">
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
      images: ['/static/puppy1.png', '/static/puppy2.png', '/static/puppy3.png', '/static/cat1.png'],
      posts: []
    }
  },
  mounted () {
    this.getAllPosts()
  },
  methods: {
    getAllPosts () {
      this.axios.get('api/anuncios')
        .then(response => {
          console.log(response)
          this.posts = response.data
        })
        .catch(error => {
          console.log('GET request failed with error ' + error)
        })
    },
    filter () {
      var tempPost = []

      if (this.search) {
        for (var i = 0; i < this.posts.length; i++) {
          let comparison = this.posts[i].type + ' ' + this.posts[i].location
          comparison = comparison.toLowerCase()
          if (comparison.includes(this.search.toLowerCase())) {
            console.log('tem')
            tempPost.push(this.posts[i])
          }
        }

        this.posts = tempPost
      } else {
        this.posts = this.getAllPosts()
      }
    }
  }
}
</script>

<style scoped>
  .firstRow {
    margin-top: 1%;
  }

  .image {
    width: 100%;
    display: block;
  }

  .post-description{
    margin-top: 13px;
    line-height: 12px;
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
  .el-row.results{
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .el-col.results {
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
  }
</style>
