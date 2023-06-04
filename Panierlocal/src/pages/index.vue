<script setup lang="ts">
import logo from '@/components/icons/logo/logo.vue';
</script>

<template>
  <div class="pt-48">
    <logo class="mx-auto mb-16"/>
    <p class="text-center text-x2l mx-10">Panier local permet à chacun d’agir à son échelle contre le gaspillage. Tout en agissant pour la planète. Panier local nous rapproche pour une cause qui en vaut la peine.</p>
  </div>
    
    <div class="mt-20">
       <h1 class="pt-0">A ne pas manquer</h1>
       <div class="carousel carousel-center rounded-box">
        <div class="carousel-item">
            <img src="src/components/img/accueil/brocante.webp" alt="brocante">
        </div>
        <div class="carousel-item">
            <img src="src/components/img/accueil/marché.webp" alt="marché de Reims">
        </div>
        <div class="carousel-item">
            <img src="src/components/img/accueil/cours.webp" alt="cours de jardinage">
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