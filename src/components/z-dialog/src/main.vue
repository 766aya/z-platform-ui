<template>
  <el-dialog
    :top="top"
    :width="width"
    :modal="modal"
    :center="center"
    :custom-class="CLASSES"
    :show-close="showClose"
    :fullscreen="FullScreen"
    :lock-scroll="lockScroll"
    :before-close="beforeClose"
    :visible.sync="dialogVisible"
    :append-to-body="appendToBody"
    :destroy-on-close="destroyOnClose"
    :close-on-click-modal="closeOnClickModal"
    :modal-append-to-body="modalAppendToBody"
    :close-on-press-escape="closeOnPressEscape"
    @open="handleDialogStatusChange('open')"
    @opened="handleDialogStatusChange('opened')"
    @close="handleDialogStatusChange('close')"
    @closed="handleDialogStatusChange('closed')">
    <div class="el-dialog__title" slot="title" v-if="$slots.title || title">
      <slot name="title">{{ title }}</slot>
      <button class="el-dialog__headerbtn full-screen" @click="handleFullScreenChange">
        <i class="el-dialog__full-screen el-icon " :class="FullScreen ? 'el-icon-crop' : 'el-icon-full-screen'"></i>
      </button>
    </div>
    <slot></slot>
    <template slot="footer" v-if="hasBtnGroup">
      <slot name="footer">
        <el-button
          v-for="item in btnGroup"
          :key="item.fn"
          :type="item.type"
          :class="item.icon"
          :loading="item.fn !== 'handleCancel' ? LOADING : false"
          @click="handleClick(item)">
          {{ item.label }}
        </el-button>
      </slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "ZDialog",
  data () {
    return {
      dialogVisible: false,
      FullScreen: this.fullscreen,
      LOADING: false
    }
  },
  props: {
    title: String, // 弹窗标题
    beforeClose: Function, // 关闭前方法(阻止弹窗关闭)
    fullscreen: { // 是否为全屏 Dialog
      type: Boolean,
      default: false
    },
    top: { // Dialog CSS 中的 margin-top 值
      type: String,
      default: '0'
    },
    width: { // Dialog 的宽度
      type: String,
      default: '50%'
    },
    modal: { // 是否需要遮罩层
      type: Boolean,
      default: true
    },
    modalAppendToBody: { // 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
      type: Boolean,
      default: true
    },
    appendToBody: { // 	Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
      type: Boolean,
      default: false
    },
    lockScroll: { // 是否在 Dialog 出现时将 body 滚动锁定
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    }, // Dialog 的自定义类名
    closeOnClickModal: { // 是否可以通过点击 modal 关闭 Dialog
      type: Boolean,
      default: false
    },
    closeOnPressEscape: { // 	是否可以通过按下 ESC 关闭 Dialog
      type: Boolean,
      default: true
    },
    showClose: { // 是否显示关闭按钮
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: true
    },
    hasBtnGroup: {
      type: Boolean,
      default: true
    },
    btnGroup: {
      type: Array,
      default: () => [
        {
          label: "保 存",
          type: "primary",
          icon: 'el-icon el-icon-check',
          fn: "handleSubmit"
        }, {
          label: "取 消",
          type: "default",
          icon: "el-icon el-icon-refresh-right",
          fn: "handleCancel"
        }
      ]
    }
  },
  computed: {
    CLASSES () {
      return `z-dialog ${this.customClass} ${ this.hasBtnGroup === false && 'no-btn-group' }`
    }
  },
  methods: {
    open () {
      this.dialogVisible = true
    },
    close () {
      this.dialogVisible = false
    },
    handleFullScreenChange () {
      this.FullScreen = !this.FullScreen
    },
    handleClick (btn) {
      if (btn.fn === 'handleCancel') {
        this.dialogVisible = false
      }
      this.$emit(btn.fn, null, this.done)
    },
    loading () {
      this.LOADING = true
    },
    done () {
      this.LOADING = false
    },
    handleDialogStatusChange (status) {
      this.$emit(status)
    }
  }
}
</script>