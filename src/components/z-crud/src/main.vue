<template>
  <avue-crud class="z-crud" :data="data" :option="OPTION" :page="page" :table-loading="tableLoading">
    <template v-for="item in column" :slot="item.prop" slot-scope="scope">
      <slot :name="item.prop" v-bind="scope"></slot>
    </template>
  </avue-crud>
</template>

<script>
export default {
  name: "ZCrud",
  data () {
    return {
      OPTION: {}
    }
  },
  props: {
    data: { // 数据
      type: Array,
      default: () => []
    },
    option: { // avue配置项
      type: Object,
      default: () => {
        return {
          menuAlign: "center",
          align: "center",
          menu: false,
          header: false,
          column: []
        }
      }
    },
    page: {
      type: Object
    },
    tableLoading: {
      type: Boolean,
      default: false
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
    }
  }
}
</script>