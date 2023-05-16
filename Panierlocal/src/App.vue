<script setup lang="ts">
	import { RouterView } from 'vue-router'
  import Footer from './components/footer.vue';
  import Header from './components/header.vue';
</script>

<template>
  <Header />

  <main>
  <RouterView />
  </main>

  <Footer />

</template>