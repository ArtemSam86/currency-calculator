<template>
  <button
      class="u-button"
      @click="$emit('on-click-button', title)"
  >
    <slot name="icon"/>
    {{ title }} {{ description }}
  </button>
</template>

<script>
export default {
  name: "UButton",
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import "u-button";
</style>
