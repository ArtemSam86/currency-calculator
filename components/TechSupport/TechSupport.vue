<template>
  <UContainer
      type="secondary"
      css-class="tech-support"
  >
    <template #content>
      <div class="tech-support__info">
        <h1>
          Нужна помощь?<br>Мы поможем! Просто свяжитесь с нами.
        </h1>
        <p>
          Наши специалисты с радостью ответят на все ваши
          вопросы и дадут<br>профессиональную консультацию по товарам.
        </p>
      </div>
      <div class="tech-support__contacts">
        <h1>8 (800) 888-90-28</h1>
        <p>или</p>
        <h2>info@example.ru</h2>
      </div>
    </template>
  </UContainer>
</template>

<script>
import UContainer from "@/components/U/Container/UContainer.vue";
export default {
  name: "TechSupport",
  components: { UContainer },
}
</script>

<style scoped lang="scss">
@import "tech-support";
</style>
