<template>
  <NuxtChild keep-alive/>
</template>
<script>
export default {
  data() {
    return {
      currencyList: {},
    };
  },
  created() {
    this.$router.push('/calculator');
  },
}
</script>
