<template>
  <avue-detail v-model="formData" :option="option"></avue-detail>
</template>

<script>
export default {
  name: "ZDetail",
  data () {
    return {
      formData: {}
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  model: {
    prop: "value",
    event: "change"
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler (val) {
        this.formData = val
      }
    },
    formData: {
      deep: true,
      handler (val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>