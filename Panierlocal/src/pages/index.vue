<script setup lang="ts">
import logo from '@/components/icons/logo/logo.vue';
import ChevronDown from '@/components/icons/30px/ChevronDown.vue';
</script>

<template>
    <logo />
    <p class="text-center mt-20 text-x2l">Panier local permet à chacun d’agir à son échelle contre le gaspillage. Tout en agissant pour la planète. Panier local nous rapproche pour une cause qui en vaut la peine.</p>

    <ChevronDown class="content-center" />

    <div>
       <h1>A ne pas manquer</h1>
       <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <div class="relative h-56 rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="src/components/img/accueil/brocante.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="brocante">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="src/components/img/accueil/marché.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="marché de Reims">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="src/components/img/accueil/cours.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="cours de jardinage">
        </div>
    </div>
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
       </div>
    </div>

    <div>
        <p class="text-darkGreen text-x4l font-montserrat font-bold">Les profils les plus visités</p>
    <div class="flex flex-wrap">
  <div class="w-1/2 lg:max-w[100px] p-4">
    <img src="src/components/img/accueil/accueil pdp/bernard.webp" alt="photo de profil de Bernard">
  </div>
  <div class="w-1/2 lg:max-w[100px] p-4">
    <img src="src/components/img/accueil/accueil pdp/stephanieaccueil.webp" alt="photo de profil de Stéphanie">
  </div>
  <div class="w-1/2 lg:max-w[100px] p-4">
    <img src="src/components/img/accueil/accueil pdp/casquette.webp" alt="Photo de profil">
  </div>
  <div class="w-1/2 lg:max-w[100px] p-4">
    <img src="src/components/img/accueil/accueil pdp/rouge.webp" alt="photo de profil">
  </div>
  <div class="w-1/2 lg:max-w[100px] p-4">
    <img src="src/components/img/accueil/accueil pdp/trait.webp" alt="photo de profil">
  </div>
</div>
</div>



</template>