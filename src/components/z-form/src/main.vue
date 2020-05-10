<template>
  <avue-form ref="form" class="z-form" v-model="formData" :option="option" @submit="handleSubmit"></avue-form>
</template>

<script>
export default {
  name: "ZForm",
  data () {
    return {
      OPTION: this.option,
      formData: {}
    }
  },
  model: {
    event: "change",
    prop: "value"
  },
  props: {
    option: {
      type: Object,
      default: {
        menuBtn: false,
        labelPosition: "right",
        column: []
      }
    },
    value: {
      type: Object,
      required: true,
    }
  },
  computed: {
    column () {
      return this.option.column || []
    }
  },
  watch: {
    option: {
      deep: true,
      immediate: true,
      handler (val) {
        if (Array.isArray(val.column)) {
          this.OPTION = val
        } else {
          this.OPTION = {
            ...val,
            column: []
          }
        }
      }
    },
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
  },
  methods: {
    validate (cb = () => {}) {
      this.$refs['form'].validate((valid) => {
        cb(valid)
      })
    },
    handleSubmit (value, loading, done) {
      this.$emit('submit', value, loading, done)
    }
  }
}
</script>
