export const crudOption = {
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

export const formOption = {
  menuBtn: false,
  labelPosition: "right",
  column: [
    {
      label: "部门名称",
      prop: "deptName",
      type: "input",
      span: 24,
      rules: [
        { required: true, message: '请输入部门名称', trigger: 'blur' }
      ]
    }, {
      label: "联系人",
      prop: "contacts",
      type: "input",
      span: 24,
      rules: [
        { required: true, message: '请输入联系人', trigger: 'blur' }
      ]
    }, {
      label: "联系方式",
      prop: "phone",
      type: "input",
      span: 24,
      rules: [
        { required: true, message: '请输入联系方式', trigger: 'blur' }
      ]
    }
  ]
}