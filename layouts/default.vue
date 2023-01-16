<template>
    <div class="default-layout">
      <TheHeader/>
      <div class="default-layout__pages">
        <Nuxt />
      </div>
    </div>
</template>

<script>
import TheHeader from "~/components/TheHeader/TheHeader.vue";
export default {
  components: { TheHeader },
}
</script>

<style lang="scss">
.default-layout {
  $default-layout: &;
  @apply relative;

  &__pages {
    @apply flex pt-[76px] justify-center items-center;
  }
}
button,
input,
optgroup,
select,
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

input::-webkit-input-placeholder,
:-moz-placeholder,
::-moz-placeholder,
:-ms-input-placeholder,
::-ms-input-placeholder,
::placeholder
{
  @apply font-normal text-14 leading-7 text-text-gray-300;
}

html {
    font-size: 12px;
}

body {
    @apply font-roboto text-text-main;
    font-size: 1.4rem;
    overflow-x: hidden;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
}

</style>
