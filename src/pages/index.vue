<template>
  <el-main>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="18" class="main-index">
          <v-carousel></v-carousel>
          <v-cats></v-cats>
        </el-col>
        <el-col :span="6">

        </el-col>
      </el-row>
    </div>
  </el-main>
</template>
<script type="text/ecmascript-6">
  import carousel from 'components/carousel.vue'
  import cats from 'components/cats.vue'
  export default {
    components: {
      'vCarousel': carousel,
      'vCats': cats
    }
  }
</script>

<style lang="scss">

</style>
