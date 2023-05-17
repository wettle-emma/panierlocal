<script setup lang="ts">
	import { RouterView } from 'vue-router'
  import FooterPage from './components/FooterPage.vue';
  import HeaderPage from './components/HeaderPage.vue';
</script>

<template>
  <HeaderPage />
  <main>
  <RouterView />
  <p>Emma la besta</p>
  </main>
  <FooterPage />
</template>