<script setup lang="ts">
import logo from '@/components/icons/logo/logo.vue';
import logoAccueil from '@/components/icons/logo/logoAccueil.vue';
</script>

<template>
  <div class="pt-48">
    <logoAccueil class="mx-auto mb-16"/>
    <p class="text-center text-x2l mx-10"><span class="bold text-Pop">Panier local</span> permet à chacun d’agir à son échelle <span class="bold text-Pop">contre le gaspillage</span>. Tout en agissant pour la <span class="bold text-Pop">planète</span>. Panier local nous <span class="bold text-Pop">rapproche</span> pour une <span class="bold text-Pop">cause</span> qui en vaut la peine.</p>
  </div>
    
    <div class="mt-20 ml-4">
       <h1 class="pt-0">A ne pas manquer</h1>
       <div class="relative pt-6 pb-16 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-4">
          <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-11/12" data-carousel-item>
                    <img src="../components/img/accueil/marché.webp" alt="Marché de Reims" class="mb-2">
            </div>
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-11/12" data-carousel-item>
                    <img src="../components/img/accueil/brocante.webp" alt="brocante" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-11/12" data-carousel-item>
                    <img src="../components/img/accueil/cours.webp" alt="Cours de jardinage" class="mb-2">
            </div>
        </div>
    </div>
    </div>

    <div class="ml-4 lg:mb-16">
        <p class="text-darkGreen text-x4l font-montserrat font-bold">Les profils les plus visités</p>
        <div class="relative pt-6 pb-16 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-4">
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil pdp/bernard.webp" alt="Bernard" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil pdp/casquette.webp" alt="Photo de profil" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil pdp/rouge.webp" alt="Photo de profil" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil pdp/stephanieaccueil.webp" alt="Photo de profil" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil pdp/trait.webp" alt="Photo de profil" class="mb-2">
            </div>
        </div>
    </div>
</div>

<div class="ml-4 lg:mb-16">
        <p class="text-darkGreen text-x4l font-montserrat font-bold">Les favoris de la semaine</p>
        <div class="relative pt-6 pb-16 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-4">
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris semaine/carottes.webp" alt="carottes" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris semaine/marche.webp" alt="marché" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris semaine/smoothieBowl.webp" alt="smoothie bowl" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris semaine/spaghetti.webp" alt="spaghetti" class="mb-2">
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/5" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris semaine/viande.webp" alt="viande" class="mb-2">
            </div>
        </div>
    </div>
</div>

<div class="mb-16 ml-4 lg:mb-16">
        <p class="text-darkGreen text-x4l font-montserrat font-bold">Vos favoris</p>
        <div class="relative pt-6 pb-16 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-4">
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris/basilic.webp" alt="basilic" class="mb-2">
                    <p class="font-inter font-light text-base uppercase mt-2">Plantes aromatiques</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris/lasagne.webp" alt="lasagne" class="mb-2">
                    <p class="font-inter font-light text-base uppercase mt-2">Lasagnes en 20min</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris/oeufs.webp" alt="oeufs" class="mb-2">
                    <p class="font-inter font-light text-base uppercase mt-2">Oeufs bio en plein air</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris/pain.webp" alt="pain" class="mb-2">
                    <p class="font-inter font-light text-base uppercase mt-2">Pain au seigle</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-1/2" data-carousel-item>
                    <img src="../components/img/accueil/accueil favoris/smoothieBowl.webp" alt="smoothie bowl" class="mb-2">
                    <p class="font-inter font-light text-base uppercase mt-2">Smoothie Bowl</p>
            </div>
          </div>
    </div>
</div>


</template>