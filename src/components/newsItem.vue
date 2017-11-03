<template>
  <div class="news-item clearfix">
    <div class="news-media">
      <router-link :to="{ name: 'detail', params: { newsId: newsId} }" class="href-abs"></router-link>
      <div class="top-padding"></div>
      <div class="img-box">
        <img src="http://image.woshipm.com/wp-files/2017/11/cxvc.jpg!/both/215x140">
      </div>
    </div>
    <div class="news-content">
      <h2 class="news-title">
        <router-link :to="{ name: 'detail', params: { newsId: newsId} }" class="href-abs"></router-link>
        iPhone X 的12个隐藏细节
      </h2>
      <div class="news-info">
        关于iPhone X 的隐藏细节，你知道多少？文章为你一一解读。 iPhone X 是苹果对 iOS 核心操作的一次重构，第一次 iPhone 有了更高的屏幕，第一次 iPhone 启用人脸识别，...
      </div>
      <div class="news-foot">
        <div class="news-author">
          动点科技
        </div>
        <div class="news-time">
          2017/11/02
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['newsId']
  }
</script>

<style lang="scss">
</style>
