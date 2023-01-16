<template>
  <div :class="[`${cssClass} u-container__${type}`]">
    <slot name="content"/>
  </div>
</template>

<script>
export default {
  name: "UContainer",
  props: {
    cssClass: {
      type: String,
      default: 'u-container'
    },
    type: {
      type: String,
      default: 'gray',
      validate: (val) => ['secondary', 'gray'].includes(val),
    },
  },
}
</script>

<style scoped lang="scss">
@import "u-container";
</style>
