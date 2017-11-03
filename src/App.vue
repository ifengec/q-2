<template>
  <div id="app">
    <el-container class="header-style">
      <v-header></v-header>
      <router-view/>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import header from 'components/header/header.vue'
export default {
  name: 'app',
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  },
  components: {
    'vHeader': header
  }
}
</script>
<style lang="scss">
  @import "./assets/sass/style.scss";
  .main-index{
    .el-carousel__item{
      -webkit-border-radius: 0.2rem;
      -moz-border-radius: 0.2rem;
      border-radius: 0.2rem;
    }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0px;
  }

</style>
