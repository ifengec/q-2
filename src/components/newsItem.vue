<template>
  <div class="news-item clearfix" v-if="newsItem">
    <div class="news-media">
      <router-link :to="{ name: 'detail', params: { newsId: newsItem.id} }" class="href-abs"></router-link>
      <div class="top-padding"></div>
      <div class="img-box">
        <img :src="newsItem.img">
      </div>
    </div>
    <div class="news-content">
      <h2 class="news-title">
        <router-link :to="{ name: 'detail', params: { newsId: newsItem.id} }" class="href-abs"></router-link>
        {{newsItem.title}}
      </h2>
      <div class="news-info">
        {{newsItem.info}}
      </div>
      <div class="news-foot">
        <div class="news-author">
          动点科技
        </div>
        <div class="news-time">
          {{newsItem.addTime}}
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['newsItem'],
    created () {
    }
  }
</script>

<style lang="scss">
</style>
