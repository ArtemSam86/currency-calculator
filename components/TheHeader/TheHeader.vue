<template>
  <div class="header">
    <nav>
      <ul class="header__menu">
        <li
            class="header__menu-item"
            :key="i"
            v-for="(item, i) in menu"
        >
          <NuxtLink
              exact-active-class="header__menu-item__active"
              :to="{ name: item.to, params: item.params }"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      menu: [
        { title: 'Калькулятор', to: 'calculator', params: {} },
        { title: 'Курс рубля', to: 'rates-currency', params: { currency: 'rub' } },
      ],
    };
  },
}
</script>

<style scoped lang="scss">
@import "header";
</style>
