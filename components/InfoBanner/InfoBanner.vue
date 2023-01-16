<template>
  <UContainer type="secondary" css-class="info-banner">
    <template #content>
      <p class="info-banner__title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
      </p>
      <div class="info-banner__description">
        <UList :list="list">
          <template #icon-marker>
            <span class="info-banner__marker"/>
          </template>
        </UList>
        <div class="info-banner__collage">
          <img
              class="info-banner__collage__img-one"
              src="../../assets/images/img-1.jpg"
              alt=""
          />
          <img
              class="info-banner__collage__img-two"
              src="../../assets/images/img-2.jpg"
              alt=""
          />
          <img
              class="info-banner__collage__img-three"
              src="../../assets/images/img-3.jpg"
              alt=""
          />
          <img
              class="info-banner__collage__img-four"
              src="../../assets/images/img-4.png"
              alt=""
          />
        </div>
      </div>
    </template>
  </UContainer>
</template>

<script>
import UContainer from "@/components/U/Container/UContainer.vue";
import UList from "@/components/U/List/UList.vue";
export default {
  name: "InfoBanner",
  components: { UContainer, UList },
  data() {
    return {
      list: [
        'incididunt ut labore et dolore magna aliqua',
        'incididunt ut labore et',
        'incididunt ut labore et dolore',
        'labore et dolore',
        'incididunt ut',
        'incididunt ut labore et dolore',
        'incididunt ut labore',
      ],
    };
  },
}
</script>

<style scoped lang="scss">
@import "info-banner";
</style>
