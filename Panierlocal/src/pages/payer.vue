<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Payer</h1>
    <div class="grid-cols-1 grid-rows-4 lg:w-1/2 m-auto">

<div class="border-2 border-darkGreen w-full h-8 rounded-x2l mx-auto mt-4 mb-6 flex items-center justify-center">
    <p class="text-center lg:text-2xl lg:p-4">Livrer à : Stéphanie Lévèque, 12 rue des fleurs, 68390 Sausheim</p>
</div>

      <div class="grid grid-cols-3 grid-rows-2 mx-2 md:pb-2 lg:pb-4">
        <div class="col-span-2">
          <input class="w-4 h-4 m-2" type="checkbox" id="id1">
      <label class="text-justify text-x2l" for="id1">Livraison avec la poste</label>
        </div>

        <div class=""> 
          <p class="text-right mx-6 text-x2l">2.00 €</p>
        </div>
        
        <div class="col-span-2">
          <input class="w-4 h-4 m-2" type="checkbox" id="id1">
      <label class="text-justify text-x2l" for="id1"> Récolte en voiture</label>
        </div>

        <div class=""> 
          <p class="text-right mx-6 text-x2l">Gratuit</p>
        </div>
      </div>



    <div class="grid grid-cols-2 pb-4 mt-4 md:pb-2 lg:pb-4">
      <div class="border-2 border-darkGreen w-full h-8 rounded-x2l mx-auto mt-4 flex items-center justify-center">
        <p class="mx-4 text-x2l">Total :</p>
        <p class="text-right mx-6 text-x2l">16.17 €</p>
      </div>
    </div>
</div>

<p class="text-x2l ml-4">Moyen de payement</p>

<div class="mx-6 py-8 grid grid-cols-2 gap-y-4 gap-x-4 lg:grid-cols-3 lg:w-1/2 lg:m-auto xl:grid-cols-3">

  <div>
    <div class=" relative pb-2/3" style="padding-bottom: 60%;">
      <img src="../components/img/payer et nous/cb.webp" alt="">
    </div>
    </div>

    <div>
    <div class=" relative pb-2/3" style="padding-bottom: 60%;">
      <img src="../components/img/payer et nous/mastercard.webp" alt="">
    </div>
  </div>

  <div>
    <div class=" relative pb-2/3" style="padding-bottom: 60%;">
      <img src="../components/img/payer et nous/visa.webp" alt="">
    </div>
  </div>

  <div class="bg-transparent">
    <div class=" relative pb-2/3" style="padding-bottom: 60%;">
      <img src="../components/img/payer et nous/apple.webp" alt="">
    </div>
  </div>

  <div class="bg-transparent">
    <div class=" relative pb-2/3" style="padding-bottom: 60%;">
      <img src="../components/img/payer et nous/google.webp" alt="">
    </div>
  </div>

  <div class="bg-transparent">
    <div class=" relative pb-2/3" style="padding-bottom: 60%;">
      <img src="../components/img/payer et nous/paypal.webp" alt="">
    </div>
  </div>
  
</div>

<div class="flex justify-center items-center mx-6 my-10 lg:my-20 lg:m-auto lg:w-1/3">
    <button class="w-52 rounded-x2l bg-Pop p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Payer</button>
  </div>

</template>