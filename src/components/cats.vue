<template>
  <div id="cats">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="政策资讯" name="first">
        <div v-if="tabsData.first">
          <v-news v-for="item in tabsData.first" :key="item.id" :newsItem="item"></v-news>
        </div>
      </el-tab-pane>
      <el-tab-pane label="防务智库" name="second"><v-news v-for="item in tabsData.second" :key="item.id" :newsItem="item"></v-news></el-tab-pane>
      <el-tab-pane label="黑科技" name="third"><v-news v-for="item in tabsData.third" :key="item.id" :newsItem="item"></v-news></el-tab-pane>
      <el-tab-pane label="明星BOSS" name="fourth"><v-news v-for="item in tabsData.fourth" :key="item.id" :newsItem="item"></v-news></el-tab-pane>
      <v-loading :done="done" :loading="loading" @click="showLoading" :activeName="activeName"></v-loading>
    </el-tabs>
  </div>

</template>
<script type="text/ecmascript-6">
  import newsItem from 'components/newsItem.vue'
  import loading from 'components/more.vue'
  const tabsApi = 'static/data/tabs-data.json'
  export default {
    data () {
      return {
        activeName: 'first',
        busy: false,
        show: false,
        done: true,
        loading: false,
        first: '',
        tabsData: {
          first: [],
          second: '',
          third: '',
          fourth: ''
        }
      }
    },
    created () {
      let _this = this
      _this.getTabsData()
    },
    methods: {
      handleClick (tab, event) {
        let _this = this
        _this.getTabsData(_this.activeName)
      },
      loadMore () {
        var self = this
        self.show = true
        console.log(this.activeName)
        console.log('loading... ' + new Date())
      },
      showLoading () {
        this.loading = true
      },
      getTabsData (activeName) {
        if (!activeName) {
          activeName = 'first'
        }
        let _this = this
        _this.$http.get(tabsApi).then((resp) => {
          console.log('http get')
          _this.tabsData[activeName] = resp.body[activeName].slice(0, 10)
        }, () => {
          console.log('error')
        })
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
