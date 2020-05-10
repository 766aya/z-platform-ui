<template>
  <div id="app">
    <ZCard type="primary">
      <ZControlBar title="部门管理" :total="pagination.total">
        <ZButton type="success">新增</ZButton>
      </ZControlBar>
      <ZCrud :data="mainTableData" :option="crudOption" :page="pagination">
        <template slot="menu" slot-scope="scope">
          <ZButton type="text">编辑</ZButton>
          <ZButton type="text" @click="handleDelete(scope)">删除</ZButton>
        </template>
      </ZCrud>
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
      crudOption: {
        menuAlign: "center",
        align: "center",
        menu: false,
        header: false,
        border: true,
        column: [
          {
            label: "部门名称",
            prop: "deptName"
          }, {
            label: "联系人",
            prop: "contacts"
          }, {
            label: "联系方式",
            prop: "phone"
          }, {
            label: "操作",
            prop: "menu",
            width: 150,
            slot: true
          }
        ]
      }
    }
  },
  methods: {
    handleOpen () {
      this.$refs['dialog'].open()
    },
    handleDelete(scope) {
      console.log(scope)
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="scss">
#app {

}
</style>
