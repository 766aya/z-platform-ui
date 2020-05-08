<template>
  <div class="z-card" :class="[type]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZCard",
  props: {
    type: {
      default: "default",
      type: String
    },
    backgroundColor: {
      default: "",
      type: String
    },
    borderColor: {
      default: "",
      type: String
    }
  },
}
</script>