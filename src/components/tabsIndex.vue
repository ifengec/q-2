<template>
  <div id="cats">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="政策资讯" name="first">
        <div class="first">
          <v-news v-for="item in tabsData.first" :key="item.id"
                  :newsItem="item"></v-news>
        </div>
      </el-tab-pane>
      <el-tab-pane label="防务智库" name="second">
        <div class="second">
          <v-news v-for="item in tabsData.second" :key="item.id" :newsItem="item"></v-news>
        </div>
      </el-tab-pane>
      <el-tab-pane label="黑科技" name="third">
        <div class="third">
          <v-news v-for="item in tabsData.third" :key="item.id" :newsItem="item"></v-news>
        </div>
      </el-tab-pane>
      <el-tab-pane label="明星BOSS" name="fourth">
        <div class="fourth">
          <v-news v-for="item in tabsData.fourth" :key="item.id" :newsItem="item"></v-news>
        </div>
      </el-tab-pane>
      <v-more :showMoreBtn="showMoreBtn" :addNewsItem="addNewsItem" :btnTxt="loadBtn.txt"></v-more>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import newsItem from 'components/newsItem.vue'
  import more from 'components/more.vue'
  import { Loading } from 'element-ui'
  const tabsApi = 'static/data/tabs-data.json'
  export default {
    data () {
      return {
        activeName: 'first', // tab 默认选中项
        showMoreBtn: false, // more
        tabsData: {
          first: [],
          second: [],
          third: [],
          fourth: []
        },
        tabsShowLoading: {
          first: true,
          second: true,
          third: true,
          fourth: true
        },
        loadingI: [], // 存放loading 实例
        isloading: false,
        loadBtn: {
          txt: '加载更多',
          txt1: '加载更多',
          txt2: '加载中...'
        }
      }
    },
    created () {
      let _this = this
      _this.setTabsData()
    },
    methods: {
      handleClick (tab, event) {
        let _this = this
        let acName = _this.activeName
        let node = document.querySelector('.' + acName)
        _this.closeLoading(_this.loadingI)
        if (!node.innerHTML) {
          _this.showMoreBtn = false
          _this.setTabsData(acName)
        } else {
          _this.showMoreBtn = true
        }
      },
      loadMore () {
        var self = this
        self.show = true
        console.log(this.activeName)
        console.log('loading... ' + new Date())
      },
      closeLoading (arr) {
        let _this = this
        if (arr.length === 0) {
          return
        }
        for (let item of arr) {
          item.close()
        }
        _this.loadingI = []
      },
      showLoading (acName) {
        let _this = this
        let id = '#pane-' + acName
        let target = document.querySelector(id)
        // console.log(target)
        let options = {
          fullscreen: true,
          target: target,
          text: '努力加载中...'
        }
        _this.loadingI.push(Loading.service(options))
      },
      setTabsData (acName, length) {
        let _this = this
        if (!acName) {
          acName = 'first'
        }
        if (!length) {
          length = 0
        }
        _this.$http.get(tabsApi, {params: {'step': 10, 'length': length}}).then((resp) => {
          if (_this.tabsShowLoading[acName]) {
            _this.showLoading(acName)
            _this.tabsShowLoading[acName] = false
          }
          // console.log(activeName + ' get data')
          let tabsData = resp.body[acName].slice(0, 10)
          setTimeout(function () {
            _this.tabsData[acName].push.apply(_this.tabsData[acName], tabsData)
            _this.closeLoading(_this.loadingI)
            _this.isloading = false
            _this.showMoreBtn = true
            _this.loadBtn.txt = _this.loadBtn.txt1
          }, 500)
        }, () => {
          console.log('error')
        })
      },
      addNewsItem () {
        let _this = this
        if (_this.isloading) return
        _this.isloading = true
        _this.loadBtn.txt = _this.loadBtn.txt2
        let acName = _this.activeName
        let length = _this.tabsData[acName].length
        if (length > 100) {
          _this.showMoreBtn = false
          return
        }
        _this.setTabsData(acName, length)
      }
    },
    components: {
      'vNews': newsItem,
      'vMore': more
    }
  }
</script>

<style lang="scss">

</style>
