<template>
  <ul :class="cssClass">
    <li :key="i" v-for="(item, i) in list">
      <slot name="icon-marker"/>
      <p>{{ item }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UList",
  props: {
    cssClass: {
      type: String,
      default: 'u-list',
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
@import "u-list";
</style>
