<script setup>
onMounted(() => {
  sessionStorage.redirect = location.href;
})
</script>

<template>
  <div>
    not-found
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>