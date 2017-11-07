<template>
  <div id="more">
    <el-button type="primary" round v-if="done" @click="loadMore">加载更多</el-button>
    <div class="el-loading" v-if="loading">
      <div class="el-loading-spinner"><i class="el-icon-loading"></i><p class="el-loading-text">拼命加载中</p></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['done', 'loading', 'activeName'],
    methods: {
      loadMore () {
        console.log(this.activeName)
      }
    }
  }
</script>

<style lang="scss">
  #more{
    text-align: center;
    padding: 1rem;
    background-color: #fff;
    .el-loading{
      transition: opacity .3s;
      position: relative;
      width: 100%;
      min-height: 1rem;
      margin-top: 2rem;
    }
  }
</style>
