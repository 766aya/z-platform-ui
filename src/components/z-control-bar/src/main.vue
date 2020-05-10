<template>
  <div class="z-control-bar">
    <div class="title-layout">
      <span class="title">{{ title }}</span>
      <span class="total" v-if="total">(共{{ total }}条)</span>
    </div>
    <div class="button-layout">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZControlBar",
  props: {
    title: String,
    total: Number
  }
}
</script>