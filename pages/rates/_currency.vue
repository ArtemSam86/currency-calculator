<template>
  <div class="currency-page">
    <h1 class="currency-page__title">Курс рубля</h1>
    <section class="currency-page__currencys">
      <CurrencyCard
          :key="`${prop}-${i}`"
          v-for="(prop, i) in getKeysFromCurrencyList"
          :currency-card="currencyList[prop]"
      >
        <template #icon-card>
          <CurrencyBlue v-if="(i % 2 === 0)"/>
          <CurrencyRed v-else/>
        </template>
      </CurrencyCard>
    </section>
    <section>
      <MsgInfo
          message="Телефон: 8 (800) 888-90-28, email: info@example.ru."
          type="gray"
      >
        <template #icon>
          <InfoBlue/>
        </template>
      </MsgInfo>
    </section>
  </div>
</template>

<script>
import CurrencyCard from "@/components/CurrencyCard/CurrencyCard.vue";
import MsgInfo from "@/components/Messages/Info/MsgInfo.vue";
import InfoBlue from "~/assets/icons/info-blue.svg?inline"
import CurrencyRed from "~/assets/icons/currency-red.svg?inline"
import CurrencyBlue from "~/assets/icons/currency-blue.svg?inline"
export default {
  name: "CurrencyPage",
  components: { CurrencyCard, MsgInfo, InfoBlue, CurrencyRed, CurrencyBlue },
  data() {
    return {
      currencyList: {}
    };
  },
  computed: {
    getKeysFromCurrencyList() {
      return Object.keys(this.currencyList);
    },
  },
  async created() {
    await this.$axios
        .get('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(({ data }) => {
          const { Valute } = data;
          this.currencyList = Valute;
        })
        .catch((error) => {
          console.error(error);
        });
  },
}
</script>

<style scoped lang="scss">
.currency-page {
  $currency-page: &;

  @apply relative flex flex-col gap-10 w-[1439px];

  &__title {
    @apply text-primary font-bold text-36 leading-[50px];
  }

  &__currencys {
    @apply flex flex-row gap-[30px] overflow-x-scroll pb-10;

    &::-webkit-scrollbar {
      @apply h-2.5;
    }

    &::-webkit-scrollbar-thumb {
      @apply bg-primary rounded-lg;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: 5px 5px 5px -5px rgba(15, 68, 113, 0.5) inset;
      @apply rounded-lg;
    }
  }
}
</style>
