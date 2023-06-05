<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Panier</h1>
    <div class="mx-auto grid grid-cols-1 gap-4 lg:grid lg:grid-cols-3 lg:mx-auto">

<div class="grid grid-cols-2 pb-4 lg:pb-12">

  <div class="relative h-28 w-28 m-auto" style="padding-bottom: 50%;">
    <img src="../components/img/panier/carotte.webp" alt="">
  </div>

  <div class="flex flex-col justify-center">
    <h4 class="font-normal text-black text-lg">Lot de carotte bio</h4>
    <p class="text-base text-lightGreen uppercase">1,50€</p>
  
  
    <div class="flex items-center">
      <button class="bg-black text-white font-semibold py-2 px-4 rounded-full">
      -
    </button>
      <input type="number" class="text-center w-10 bg-transparent py-2 px-4 rounded-none" value="1">
      <button class="bg-midGreen text-white font-semibold py-2 px-4 rounded-full">
      +
      </button>
    </div>

  </div>

  <div class="relative h-28 w-28 mt-6 m-auto" style="padding-bottom: 50%;">
    <img src="../components/img/panier/pain.webp" alt="">
  </div>

  <div class="flex flex-col justify-center">
    <h4 class="font-normal text-black text-lg">Pain au seigle</h4>
    <p class="text-base text-lightGreen uppercase">1,20€</p>
  
  
    <div class="flex items-center">
      <button class="bg-black text-white font-semibold py-2 px-4 rounded-full">
      -
    </button>
      <input type="number" class="text-center w-10 bg-transparent py-2 px-4 rounded-none" value="1">
      <button class="bg-midGreen text-white font-semibold py-2 px-4 rounded-full">
      +
      </button>
    </div>

  </div>

  <div class="relative h-28 w-28 mt-6 m-auto" style="padding-bottom: 50%;">
    <img src="../components/img/panier/oeufs.webp" alt="">
  </div>

  <div class="flex flex-col justify-center">
    <h4 class="font-normal text-black text-lg">6 oeufs bio</h4>
    <p class="text-base text-lightGreen uppercase">2,61€</p>
  
  
    <div class="flex items-center">
      <button class="bg-black text-white font-semibold py-2 px-4 rounded-full">
      -
    </button>
      <input type="number" class="text-center w-10 bg-transparent py-2 px-4 rounded-none" value="1">
      <button class="bg-midGreen text-white font-semibold py-2 px-4 rounded-full">
      +
      </button>
    </div>

  </div>

  <div class="relative h-28 w-28 mt-6 m-auto" style="padding-bottom: 50%;">
    <img src="../components/img/panier/basilic.webp" alt="">
  </div>

  <div class="flex flex-col justify-center">
    <h4 class="font-normal text-black text-lg">Basilic</h4>
    <p class="text-base text-lightGreen uppercase">0,90€</p>
  
  
    <div class="flex items-center">
      <button class="bg-black text-white font-semibold py-2 px-4 rounded-full">
      -
    </button>
      <input type="number" class="text-center w-10 bg-transparent py-2 px-4 rounded-none" value="1">
      <button class="bg-midGreen text-white font-semibold py-2 px-4 rounded-full">
      +
      </button>
    </div>

  </div>

  <div class="relative h-28 w-28 mt-6 m-auto" style="padding-bottom: 50%;">
    <img src="../components/img/panier/patate.webp" alt="">
  </div>

  <div class="flex flex-col justify-center">
    <h4 class="font-normal text-black text-lg">Pommes de terre</h4>
    <p class="text-base text-lightGreen uppercase">1,96€</p>
  
  
    <div class="flex items-center">
      <button class="bg-black text-white font-semibold py-2 px-4 rounded-full">
      -
    </button>
      <input type="number" class="text-center w-10 bg-transparent py-2 px-4 rounded-none" value="1">
      <button class="bg-midGreen text-white font-semibold py-2 px-4 rounded-full">
      +
      </button>
    </div>

  </div>

  <div class="relative h-28 w-28 mt-6 m-auto" style="padding-bottom: 50%;">
    <img src="../components/img/panier/viande.webp" alt="">
  </div>

  <div class="flex flex-col justify-center">
    <h4 class="font-normal text-black text-lg">2 steak de boeuf</h4>
    <p class="text-base text-lightGreen uppercase">8,00€</p>
  
  
    <div class="flex items-center">
      <button class="bg-black text-white font-semibold py-2 px-4 rounded-full">
      -
    </button>
      <input type="number" class="text-center w-10 bg-transparent py-2 px-4 rounded-none" value="1">
      <button class="bg-midGreen text-white font-semibold py-2 px-4 rounded-full">
      +
      </button>
    </div>

  </div>

</div>

</div>

<div class="bg-white pb-12 mt-8 lg:w-1/2 lg:mx-auto">

<div class="border mx-auto border-lightGray w-2/3"></div>

    <div class="grid grid-cols-2 pb-4 mt-4 md:pb-2 lg:pb-4">
      <div>
        <p class="mx-6">Total :</p>
      </div>

      <div>
        <p class="text-right mx-6">16,17€</p>
      </div>
    </div>
    
  <div class="flex justify-center items-center mb-6 mx-6 md:w-1/2 md:m-auto md:mb-12 lg:m-auto lg:w-2/3">
    <RouterLink to="/payer"><button class="w-50 rounded-x2l bg-Pop p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Acheter</button></RouterLink>

</div>
</div>
</template>