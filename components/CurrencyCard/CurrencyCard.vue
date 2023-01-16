<template>
  <UContainer type="gray" css-class="currency-card">
    <template #content>
      <slot name="icon-card"/>
      <div class="currency-card__title">
        <h1>{{ getCharCode }}</h1>
        <p>{{ getName }}</p>
      </div>
      <UList :list="getNominalAndValue" css-class="currency-card__list">
        <template #icon-marker>
          <span class="currency-card__marker"/>
        </template>
      </UList>
    </template>
  </UContainer>
</template>

<script>
import UContainer from "@/components/U/Container/UContainer.vue";
import UList from "@/components/U/List/UList.vue";
export default {
  name: "CurrencyCard",
  components: { UContainer, UList },
  props: {
    currencyCard: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getCharCode() {
      return this.currencyCard["CharCode"];
    },
    getName() {
      return this.currencyCard["Name"];
    },
    getNominalAndValue() {
      return [
        `Номинал: ${this.currencyCard["Nominal"]}`,
        `Курс: ${this.currencyCard["Value"]}`
      ];
    },
  },
}
</script>

<style lang="scss">
@import "currency-card";
</style>
