<template>
  <div id="app">
    <ZCard type="primary">
      <ZControlBar title="部门管理" :total="pagination.total">
        <ZButton type="success" @click="handleCreate">新增</ZButton>
      </ZControlBar>
      <ZCrud :data="mainTableData" :option="crudOption" :page="pagination">
        <template slot="menu" slot-scope="scope">
          <ZButton type="text" @click="handleView(scope.row)">查看</ZButton>
          <ZButton type="text" @click="handleUpdate(scope.row)">编辑</ZButton>
          <ZButton type="text" @click="handleDelete(scope.row)">删除</ZButton>
        </template>
      </ZCrud>
    </ZCard>
    <MainDialog ref="mainDialog" @create="handleCreateSubmit" @update="handleUpdateSubmit"></MainDialog>
  </div>
</template>

<script>
import MainDialog from "./mainDialog"
import { crudOption } from "./const/index"

export default {
  name: 'app',
  components: {
    MainDialog
  },
  data () {
    return {
      crudOption,
      pagination: {
        total: 100,
        currentPage: 2,
        pageSize: 20,
      },
      mainTableData: [
        {
          deptName: "浙江自贸区跨境电商服务有限公司",
          contacts: "周庆强",
          phone: "15395801721"
        }
      ],
    }
  },
  methods: {
    handleOpen () {
      this.$refs['dialog'].open()
    },
    handleDelete(scope) {
      console.log(scope)
    },
    handleView (data) {
      this.$refs['mainDialog'].open({...data}, 'detail')
    },
    // 新增 - 打开弹窗
    handleCreate () {
      this.$refs['mainDialog'].open({}, 'create')
    },
    // 修改 - 打开弹窗
    handleUpdate (data) {
      this.$refs['mainDialog'].open({...data}, 'update')
    },
    handleCreateSubmit (formData, done) {
      new Promise((resolve) => {
        console.log(formData)
        resolve()
      }).then(() => {
        this.$message.success('新增部门成功')
        done()
        this.$refs['mainDialog'].close()
      }).catch(() => {
        done()
      })
    },
    handleUpdateSubmit (formData, done) {
      new Promise((resolve) => {
        console.log(formData)
        resolve()
      }).then(() => {
        this.$message.success('修改部门成功')
        done()
        this.$refs['mainDialog'].close()
      }).catch(() => {
        done()
      })
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
