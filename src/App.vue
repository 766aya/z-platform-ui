<template>
  <div id="app">
    <ZButton @click="handleSubmit" type="primary">提交</ZButton>
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
    },
    handleSubmit (loading, done, e) {
      loading()
      setTimeout(() => {
        done()
      }, 1000);
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
