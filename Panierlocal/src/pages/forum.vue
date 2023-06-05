<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Forum</h1>

  <h2 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Ecologie</h2>

  <div class="relative pt-6 pb-12 ml-4 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-2">
          <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-5/6" data-carousel-item>
                    <img src="../components/img/forum/ampoule.webp" alt="ampoule" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Consommer moins d'énergie</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Stéphanie</p>
            </div>
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-5/6" data-carousel-item>
                    <img src="../components/img/forum/velo.webp" alt="vélo" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Le vélo plus souvent</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Stéphanie</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-5/6" data-carousel-item>
                    <img src="../components/img/forum/marche.webp" alt="Marché" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Consommer local</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Pascal</p>
            </div>
        </div>
    </div>

  <h2 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Maison</h2>

  <div class="relative pt-6 pb-12 ml-4 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-2">
          <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-11/12" data-carousel-item>
                    <img src="../components/img/forum/produit.webp" alt="Produits vitre" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Lave-vitre au citron</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Stéphanie</p>
            </div>
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-11/12" data-carousel-item>
                    <img src="../components/img/forum/vaisselle.webp" alt="Vaisselle" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">La vaisselle avec moins d'eau</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Jules</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-11/12" data-carousel-item>
                    <img src="../components/img/forum/vitre.webp" alt="Vitre" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Laver ses vitres efficacement</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par David</p>
            </div>
        </div>
    </div>

  <h2 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Podcast</h2>
 
  <div class="relative pt-6 pb-12 ml-4 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-2">
          <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/forum/sgm.webp" alt="ampoule" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Podcast de Super Green Me</p>
            </div>
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/forum/franceCulture.webp" alt="vélo" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Podcats de France Culture</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/forum/chaleurHumaine.webp" alt="Marché" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Podcast du Monde</p>
            </div>
        </div>
    </div>

    <h2 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Astuce</h2>

    <div class="relative pt-6 pb-12 ml-4 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-2">
          <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/forum/vivrebio.webp" alt="ampoule" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Vivre bio</p>
            </div>
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/forum/maisonEcolo.webp" alt="vélo" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">La Maison écologique</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/forum/feelgreen.webp" alt="Marché" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Feel Green</p>
            </div>
        </div>
    </div>

    <p class="font-bold text-x2l font-inter mx-auto ml-4">Vous avez une astuce a nous faire partagez ? Publiez la !</p>
    <RouterLink to="/ajoutAstuce"><button class="w-52 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter une astuce</button></RouterLink>
</template>