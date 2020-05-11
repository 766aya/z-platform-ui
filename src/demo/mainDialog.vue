<template>
  <ZDialog ref="dialog" :title="titles[status]" @handleSubmit="handleSubmit" @closed="handleClosed">
    <ZForm ref="form" v-model="formData" :option="formOption" @submit="handleSubmit"></ZForm>
  </ZDialog>
</template>

<script>
import { formOption } from "./const/index"

export default {
  name: "DeptDialog",
  data () {
    return {
      formOption,
      formData: {},
      status: "detail",
      titles: {
        create: "新增部门",
        update: "修改部门",
        detail: "部门详情"
      }
    }
  },
  methods: {
    open (formData, status) {
      this.formData = formData
      this.status = status
      this.$refs['dialog'].open()
    },
    close () {
      this.$refs['dialog'].close()
    },
    loading () {
      this.$refs['dialog'].loading()
      this.$refs['form'].loading()
    },
    done () {
      this.$refs['dialog'].done()
      this.$refs['form'].done()
    },
    handleSubmit (form, done, loading) {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading()
          this.$emit(this.status, this.formData, this.done)
        } else {
          this.$message.error('请完善表单内容')
        }
      })
    },
    handleClosed () {
      this.formData = {}
      this.$refs['form'].resetForm()
    }
  },
}
</script>

<style>

</style>