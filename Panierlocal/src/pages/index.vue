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