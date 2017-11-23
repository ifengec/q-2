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
    props: ['newsItem']
  }
</script>

<style lang="scss">
  .news-media {
    .img-box {
      img {
        -webkit-transition: all 0.35s;
        -moz-transition: all 0.35s;
        -ms-transition: all 0.35s;
        -o-transition: all 0.35s;
        transition: all 0.35s;
      }
    }
    &:hover {
      .img-box {
        img {
          -webkit-transform: scale(1.2, 1.2);
          -moz-transform: scale(1.2, 1.2);
          -ms-transform: scale(1.2, 1.2);
          -o-transform: scale(1.2, 1.2);
          transform: scale(1.2, 1.2);
        }
      }
    }
  }


</style>
