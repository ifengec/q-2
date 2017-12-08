<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgData" :key="item.id">
      <div class="paddingTop"></div>
      <div class="img-box">
        <img :src="item.url">
      </div>
      <h3>{{ item.title }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script type="text/ecmascript-6">
  const api = 'static/data/img-carousel.json'
  export default {
    data () {
      return {
        imgData: []
      }
    },
    created () {
      let _this = this
      _this.setImg()
    },
    methods: {
      setImg () { // carousel 数据
        let _this = this
        _this.$http.get(api, {params: {'num': 10}}).then((resp) => {
          _this.imgData = resp.body['data']
        }, () => {
          console.log('error')
        })
      }
    }
  }
</script>
<style lang="scss">
  $index-carousel-padding-top: 30.85%;
  .el-carousel__container{
    height:auto;
    padding-top:$index-carousel-padding-top;
    -webkit-border-radius: 0.2rem;
    -moz-border-radius: 0.2rem;
    border-radius: 0.2rem;
    overflow: hidden;
  }
  .el-carousel__item h3 {
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    line-height: 1.5rem;
    padding:0 1rem;
    color: #d1f1ee;
    font-size: 16px;
    background-color: rgba(0,0,0,0.3);
    margin: 0;
    z-index: 10;
  }
  .el-carousel__item {
    background-color: #dee7f2;
    .paddingTop {
      padding-top: $index-carousel-padding-top;
    }
    .img-box {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        max-width: 100%;
        max-height: 100%;
        width:100%;
        margin: auto;
      }
    }
  }
</style>
