<template>
  <div id="more">
    <el-button type="primary" round v-if="!showMore" @click="addNewsItem">加载更多</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['done', 'showMore', 'activeName', 'addNewsItem']
  }
</script>

<style lang="scss">
  #more {
    text-align: center;
    padding: 1rem;
    background-color: #fff;
    .el-loading {
      transition: opacity .3s;
      position: relative;
      width: 100%;
      min-height: 1rem;
      margin-top: 2rem;
    }
  }
</style>
