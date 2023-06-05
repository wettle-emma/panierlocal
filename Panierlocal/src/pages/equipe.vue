<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Qui sommes-nous ?</h1>
    <h2 class="text-lg font-bold text-darkGreen pl-4 pb-10">Panier Local, c'est une équipe engagée et proche de ses clients.</h2>
    <p class="pl-4">Nous sommes 3 étudiants du BUT MMI à Montbéliard. Dans le cadre d’un projet universitaire, nous devions réalisé un site à partir d’un nouveau concept. Nous voici :</p>
    
    <div class="mx-auto px-10 pt-10 mb-16 grid grid-cols-1 grid-rows-3 gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-1">

<div class="bg-midGreen grid grid-cols-2 gap-x-3 p-2 rounded-x3l">

  <div class="relative h-28 w-28 m-auto" style="padding-bottom: 50%;">
    <img src="../components/img/payer et nous/emma.webp" alt="" class="absolute h-full w-full rounded-full object-cover">
  </div>

  <div class="flex flex-col justify-center">
    <h4 class="font-inter font-bold text-x3l pb-4">Emma Wettlé</h4>
    <p class="font-inter text-x2l">Chef du projet, designer, développeur et chargé de communication</p>
  </div>
</div>

<div class="bg-midGreen grid grid-cols-2 gap-x-3 p-6 rounded-x3l">

<div class="relative h-32 w-32 m-auto" style="padding-bottom: 50%;">
  <img src="../components/img/payer et nous/chloe.webp" alt="" class="absolute h-full w-full rounded-full object-cover">
</div>

<div class="flex flex-col justify-center">
  <h4 class="font-inter font-bold text-x3l pb-4">Chloe Rosetta</h4>
  <p class="font-inter text-x2l">Designer, développeur et chargé de communication</p>
</div>
</div>

<div class="bg-midGreen grid grid-cols-2 gap-x-3 p-6 rounded-x3l">

<div class="relative h-32 w-32 m-auto" style="padding-bottom: 50%;">
<img src="../components/img/payer et nous/sami.webp" alt="" class="absolute h-full w-full rounded-full object-cover">
</div>

<div class="flex flex-col justify-center">
<h4 class="font-inter font-bold text-x3l pb-4">Sami Ghorzi</h4>
<p class="font-inter text-x2l">Designer, développeur et chargé de communication</p>
</div>
</div>


</div>
</template>