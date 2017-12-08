<template>
<div id="header">
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-row>

        <el-col :span="24">
          <el-menu-item index="1"><a href="/"><img class="logo" src="../../assets/logo.png"></a></el-menu-item>
          <el-menu-item index="2"><el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input21">
          </el-input></el-menu-item>
        </el-col>
      </el-row>
    </el-menu>
  </el-header>
</div>
</template>
<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          activeIndex: '1',
          input21: ''
        }
      },
      methods: {
        handleSelect (key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }
</script>

<style lang="scss">

</style>
