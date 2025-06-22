<template>
  <div class="progressBar" v-if="loading">
    <v-progress-circular indeterminate color="danger" :size="50" />
  </div>
  <div v-else>
    <Header />
    <RouterView />
  </div>

</template>

<script setup>
import {firstLoad} from '@/composables/auth'
import Header from '@/components/Navigation/Header.vue'


const { loading } = firstLoad();


</script>




<style scoped></style>
