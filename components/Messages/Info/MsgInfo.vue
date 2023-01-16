<template>
  <UContainer :type="type" css-class="msg-info">
    <template #content>
      <slot name="icon"/>
      <p class="msg-info__text">{{ message }}</p>
    </template>
  </UContainer>
</template>

<script>
import UContainer from "@/components/U/Container/UContainer.vue";
export default {
  name: "MsgInfo",
  components: { UContainer },
  props: {
    type: {
      type: String,
      default: 'gray'
    },
    message: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import "msg-info";
</style>
