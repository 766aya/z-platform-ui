<template>
  <div id="app">
    <ZCard type="primary">
      <ZControlBar title="部门管理" :total="pagination.total">
        <ZButton type="success">新增</ZButton>
      </ZControlBar>
    </ZCard>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: {},
      pagination: {
        total: 100
      }
    }
  },
  methods: {
    handleOpen () {
      this.$refs['dialog'].open()
    },
  },
  mounted () {
    
  }
}
</script>

<style lang="scss">
#app {

}
</style>
