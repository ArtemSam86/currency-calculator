<template>
  <label class="u-input">
    <p class="u-input__title">{{ title }}</p>
    <input
        class="u-input__input"
        :placeholder="placeholder"
        :value="value"
        :type="type"
        @input.prevent="$emit('input', $event.target.value)"
        @focusin="$emit('focusin', true)"
        @focusout="$emit('focusout', false)"
    />
  </label>
</template>

<script>
export default {
  name: "UInput",
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validate: (val) => ['text', 'number', 'email', 'tel', 'password'].includes(val)
    },
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Введите значение',
    },
  },
}
</script>

<style scoped lang="scss">
@import "u-input";
</style>
