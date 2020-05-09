<template>
  <div id="app">
    <ZCard>{{ 20 | priceFilter('', '元') }}</ZCard>
    <ZCard>{{ '15395801721' | replaceStr([3, 4, 4], 0) }}</ZCard>
    <ZCard>{{ '330902199809253811' | replaceStr([14, 4, 0], 0) }}</ZCard>
    <ZCard>{{ '2020-05-09 23:26:00' | dateFormat('MM-ddD Thh:mm') }}</ZCard>
    <ZCard>
      <div>
        <span style="margin-right: 10px;" v-for="item in getWeekDates(-1)">{{ item.strDate | dateFormat('MM-dd D') }}</span>
      </div>
      <div>
        <span style="margin-right: 10px;" v-for="item in getWeekDates(0)">{{ item.strDate | dateFormat('MM-dd D') }}</span>
      </div>
      <div>
        <span style="margin-right: 10px;" v-for="item in getWeekDates(1)">{{ item.strDate | dateFormat('MM-dd D') }}</span>
      </div>
      <div>
        <span style="margin-right: 10px;" v-for="item in getWeekDates(2)">{{ item.strDate | dateFormat('MM-dd D') }}</span>
      </div>
      <div>
        <span style="margin-right: 10px;" v-for="item in getWeekDates(3)">{{ item.strDate | dateFormat('MM-dd D') }}</span>
      </div>
    </ZCard>
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
  },
  mounted () {
    
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
