<template>
  <div>
    <Header />
    <RouterView />
  </div>

</template>

<script setup>
import Header from '@/components/Navigation/Header.vue'
import { RouterView } from 'vue-router'
</script>




<style scoped></style>
