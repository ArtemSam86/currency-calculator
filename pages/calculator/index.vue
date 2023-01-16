<template>
  <div class="calculator-page">
    <h1 class="calculator-page__title">Валютный калькулятор</h1>
    <section class="calculator-page__calculator">
      <div class="calculator-page__calculator-inputs">
        <WindowResults
            drag-with="move"
            :is-show="isShowWindow"
            :result-list="getResultList"
            @on-click-button="onClickButton"
            @close-window="isShowWindow = !isShowWindow"
        />
        <UInput
            v-model="currencyOne"
            title="Валюта 1"
            placeholder="Введите название или код"
            @focusin="onFocus($event, 1)"
        />
        <UInput
            v-model="currencyTwo"
            title="Валюта 2"
            placeholder="Введите название или код"
            @focusin="onFocus($event, 2)"
        />
        <UInput
            v-model="numberOfCurrencyUnits"
            type="number"
            title="Количество"
            placeholder="Введите число"
        />
        <MsgInfo type="secondary" :message="infoMessage">
          <template #icon>
            <InfoRed />
          </template>
        </MsgInfo>
      </div>
      <InfoBanner/>
    </section>
    <section>
      <TechSupport/>
    </section>
  </div>
</template>

<script>
import UInput from "~/components/U/Input/UInput.vue";
import MsgInfo from "~/components/Messages/Info/MsgInfo.vue";
import InfoBanner from "@/components/InfoBanner/InfoBanner.vue";
import TechSupport from "@/components/TechSupport/TechSupport.vue";
import WindowResults from "@/components/U/WindowResults/WindowResults.vue";
import UButton from "@/components/U/Button/UButton.vue";
import InfoRed from "~/assets/icons/info-red.svg?inline"
export default {
  name: "calculator",
  components: {
    UInput,
    MsgInfo,
    InfoBanner,
    TechSupport,
    WindowResults,
    UButton,
    InfoRed
  },
  data() {
    return {
      selectedInput: 0,
      currencyOne: '',
      currencyTwo: '',
      currencyList: {},
      resultList: {},
      numberOfCurrencyUnits: 0,
      isShowWindow: false,
    };
  },
  computed: {
    infoMessage() {
      return this.totalCalculate ? `Итого: ${this.totalCalculate}` : 'Итого: ...'
    },
    totalCalculate() {
      return this.convertCurrency(this.numberOfCurrencyUnits, this.currencyOne, this.currencyTwo, this.currencyList).toFixed(2);
    },
    getResultList() {
      return Object.keys(this.resultList).length
          ? this.convertObjectToArray(this.resultList)
          : this.convertObjectToArray(this.currencyList);
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

  watch: {
    currencyOne: {
      handler(value) {
        this.resultList = this.searchCurrency(value);
      },
    },
    currencyTwo: {
      handler(value) {
        this.resultList = this.searchCurrency(value);
      },
    },
  },

  methods: {
    onClickButton(code) {
      if (this.selectedInput === 1) {
        this.currencyOne = code;
      }
      if (this.selectedInput === 2) {
        this.currencyTwo = code;
      }
    },

    onFocus(e, num) {
      if (num !== undefined) {
        this.selectedInput = num;
        this.resultList = this.currencyList;
      }
      this.isShowWindow = e;
    },

    convertObjectToArray(obj) {
      let arr = [];
      for (let key in obj) {
        arr.push(obj[key]);
      }
      return arr;
    },

    convertCurrency(count, currOne, currTwo, currList) {
      const valOne = currList?.[currOne]?.["Value"];
      const valTwo = currList?.[currTwo]?.["Value"];
      const nomOne = currList?.[currOne]?.["Nominal"];
      const nomTwo = currList?.[currTwo]?.["Nominal"];
      if (valOne && valTwo && nomOne && nomTwo) {
        return (valOne / nomOne) / (valTwo / nomTwo) * count;
      }
      return 0;
    },

    searchCurrency(value) {
      let result = {};
      for (let key in this.currencyList) {
        if (
            key.includes(value.toUpperCase())
            ||
            this.currencyList[key]["Name"].toLowerCase().includes(value.toLowerCase())
        )
        {
          result[key] = this.currencyList[key];
        }
      }
      return result;
    },
  },
}
</script>

<style scoped lang="scss">
.calculator-page {
  $calculator-page: &;

  @apply relative flex flex-col gap-10;

  &__title {
    @apply font-medium text-34 leading-10 text-primary;
  }
  &__calculator {
    @apply flex flex-row gap-9;
    &-inputs {
      @apply flex flex-col gap-[30px];
    }
  }
}
</style>
