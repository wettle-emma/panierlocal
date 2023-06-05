<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Evènements</h1>
    <p class="font-inter font-xl uppercase text-center">Les évènements écologiques proches de chez vous</p>
    <p class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Mai 2023</p>
    <div class="max-1-xl px-10 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:max-w-7xl">

  <div>
    <img src="../components/img/evenements/Component 25.webp" alt="">
  </div>

<div class="">
<img src="../components/img/evenements/Component 26.webp" alt="">
</div>



<div class="">
    <RouterLink to="/evenement">
<img  src="../components/img/evenements/Component 27.webp" alt="">
</RouterLink>
</div>



<div class="">
<img src="../components/img/evenements/Component 28.webp" alt="">
</div>
</div>

<RouterLink to="/ajoutEvenement"><button class="w-50 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter un évènement</button></RouterLink>

</template>