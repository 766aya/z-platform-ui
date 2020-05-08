<template>
  <div id="app">
    <el-button type="primary" @click="handleOpen">打开弹窗</el-button>
    <ZDialog ref="dialog"></ZDialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: {}
    }
  },
  methods: {
    handleOpen () {
      this.$refs['dialog'].open()
    }
  },
  created () {
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
