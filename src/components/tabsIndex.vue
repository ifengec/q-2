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
      <v-more :done="done" :loading="loading" :addNewsItem="addNewsItem"></v-more>
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
        },
        loadingT: ''
      }
    },
    created () {
      let _this = this
      _this.getTabsData()
    },
    methods: {
      handleClick (tab, event) {
        let _this = this
        let acName = _this.activeName
        let node = document.querySelector('.' + acName)
        if (!node.innerHTML) {
          _this.getTabsData(_this.activeName)
        }
        _this.loading = false
      },
      loadMore () {
        var self = this
        self.show = true
        console.log(this.activeName)
        console.log('loading... ' + new Date())
      },
      showLoading (activeName) {
        let id = '#pane-' + activeName
        let target = document.querySelector(id)
        console.log(target)
        let options = {
          fullscreen: true,
          target: target,
          text: '努力加载中...'
        }
        this.loadingT = Loading.service(options)
      },
      getTabsData (activeName) {
        if (!activeName) {
          activeName = 'first'
        }
        let _this = this
        _this.$http.get(tabsApi).then((resp) => {
          console.log(activeName + ' get data')
          _this.showLoading(activeName)
          setTimeout(function () {
            _this.tabsData[activeName] = resp.body[activeName].slice(0, 10)
            _this.loadingT.close()
          }, 3000)
        }, () => {
          console.log('error')
        })
      },
      addNewsItem () {
        let _this = this
        if (_this.loading) return
        _this.loading = true
        let acName = _this.activeName
        let node = document.querySelector('.' + acName)
        let selector = '.' + acName + ' .news-item'
        let list = document.querySelectorAll(selector)
        let length = list.length
        let html = node.innerHTML
        if (length > 100) {
          _this.loading = true
          return
        }
        _this.showLoading()
        _this.$http.get(tabsApi).then((resp) => {
          let tabsData = resp.body[acName].slice(0, 10)
          for (let val of tabsData) {
            html += '<div class="news-item clearfix">' +
              '<div class="news-media">' +
              '<a href="/detail/' + val.id + '/" class="href-abs"></a>' +
              '<div class="top-padding"></div>' +
              '<div class="img-box">' +
              '<img src="' + val.img + '">' +
              '</div></div>' +
              '<div class="news-content">' +
              '<h2 class="news-title">' +
              '<a href="/detail/' + val.id + '/" class="href-abs"></a>' + val.title + '</h2>' +
              '<div class="news-info">' + val.info + '</div>' +
              '<div class="news-foot">' +
              '<div class="news-author">' + val.author + '</div>' +
              '<div class="news-time">' + val.addTime + '</div></div></div></div>'
          }
          _this.appendHTML(node, html)
          _this.loadingT.close()
          _this.loading = false
        }, () => {
          console.log('error')
        })
      },
      appendHTML (el, html) {
        let divTemp = document.createElement('div')
        let nodes = null
        let fragment = document.createDocumentFragment()
        divTemp.innerHTML = html
        nodes = divTemp.childNodes
        for (var i = 0, length = nodes.length; i < length; i += 1) {
          fragment.appendChild(nodes[i].cloneNode(true))
        }
        el.appendChild(fragment)
        nodes = null
        fragment = null
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
