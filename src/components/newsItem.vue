<template>
  <div class="news-item clearfix">
    <div class="news-media">
      <div class="top-padding"></div>
      <div class="img-box">
        <img src="http://image.woshipm.com/wp-files/2017/11/cxvc.jpg!/both/215x140">
      </div>
    </div>
    <div class="news-content">
      <div class="news-title">
        <router-link :to="{ name: 'detail', params: { newsId: newsId} }" class="href-abs"></router-link>
        iPhone X 的12个隐藏细节
      </div>
      <div class="news-info"></div>
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
  @import "../assets/sass/scss/extend";
.news-item{
  padding: 0.5rem;
  border-bottom:1px solid #eee;
  .news-media{
    position: relative;
    display: inline-block;
    float: left;
    width:10.75rem;
    overflow: hidden;
    @extend %boxSize;
    .top-padding{
      padding-top:65%;
    }
    .img-box{
      position: absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      display: block;
      img{
        display: block;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        max-width:100%;
        max-height:100%;
      }
    }
  }
  .news-content{
    display: inline-block;
    padding-left:1rem;
    .news-title{
      position: relative;
      font-size:0.9rem;
      margin-bottom:0.75rem;
      font-weight: bold;
    }
  }
}
</style>
