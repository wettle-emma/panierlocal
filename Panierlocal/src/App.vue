<script setup lang="ts">
	import { RouterView } from 'vue-router'
  import FooterPage from './components/FooterPage.vue';
  import HeaderPage from './components/HeaderPage.vue';

   var pocketbase_ip=''
   if(import.meta.env.MODE === 'production')
    pocketbase_ip='http://193.168.146.228:80'
   else
    pocketbase_ip='http://127.0.0.1:8090'
    alert(pocketbase_ip)
</script>

<template>
  <HeaderPage />
  <main class="pt-8 w-screen">
    <Suspense>
     <RouterView />
    </Suspense>
</main>
  <FooterPage />
</template>