<template>
  <NuxtChild />
</template>
<script>
export default {
  middleware: 'redirect',
  created() {
    this.$router.push('/calculator');
  },
}
</script>
