<template>
  <div id="cats">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <v-news :newsId='item' v-for="item in 4" :key="item"></v-news>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second"><v-news :newsId='item' v-for="item in 4" :key="item"></v-news></el-tab-pane>
      <el-tab-pane label="角色管理" name="third"><v-news :newsId='item' v-for="item in 4" :key="item"></v-news></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"><v-news :newsId='item' v-for="item in 4" :key="item"></v-news></el-tab-pane>
      <v-loading :done="done" :loading="loading" @click="showLoading" :activeName="activeName"></v-loading>
    </el-tabs>
  </div>

</template>
<script type="text/ecmascript-6">
  import newsItem from 'components/newsItem.vue'
  import loading from 'components/more.vue'
  export default {
    data () {
      return {
        activeName: 'first',
        busy: false,
        show: false,
        done: true,
        loading: false
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
      loadMore () {
        var self = this
        self.show = true
        console.log(this.activeName)
        console.log('loading... ' + new Date())
      },
      showLoading () {
        this.loading = true
      }
    },
    components: {
      'vNews': newsItem,
      'vLoading': loading
    }
  }
</script>

<style lang="scss">

</style>
