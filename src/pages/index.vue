<template>
  <el-main>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="18" class="main-index">
          <v-carousel></v-carousel>
          <v-tabs></v-tabs>
        </el-col>
        <el-col :span="6">

        </el-col>
      </el-row>
    </div>
  </el-main>
</template>
<script type="text/ecmascript-6">
  import carousel from 'components/carousel.vue'
  import tabs from 'components/tabsIndex.vue'
  export default {
    components: {
      'vCarousel': carousel,
      'vTabs': tabs
    }
  }
</script>

<style lang="scss">

</style>
