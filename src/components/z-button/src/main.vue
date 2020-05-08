<template>
  <el-button
    class="z-button"
    :icon="icon"
    :size="size"
    :type="type"
    :plain="plain"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    :autofocus="autofocus"
    :nativeType="nativeType"
  >
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "ZButton",
  props: {
    size: String, // 尺寸
    type: { // 类型
      type: String,
      default: ""
    },
    plain: Boolean, // 是否朴素按钮
    round: Boolean, // 是否圆角按钮
    circle: Boolean, // 是否圆形按钮
    loading: Boolean, // 是否加载中状态
    disabled: Boolean, // 是否禁用状态
    icon: String, // 图标类名
    autofocus: Boolean, // 是否默认聚焦
    nativeType: String, // 原生 type 属性
    permissions: String, // 权限标识
  }
}
</script>

<style>

</style>