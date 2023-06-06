<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';

</script>

<template>
  <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

  <h1>Votre profil</h1>
  <div class="mb-10 lg:grid lg:grid-cols-2 lg:gap-2">
    <div class="">
      <div class="grid grid-cols-2 gap-2">
        <div class="ml-4">
          <img class="w-2/3 lg:w-2/5" src="../components/img/pdp + events/stephanie.webp" alt="Photo de profil de Stéphanie">
          <p class="text-base text-grey mt-1">Modifier la photo de profil</p>
        </div>
        
        <div class="">
          <p class="uppercase text-x2l text-center mb-4">Stéphanie Levèque</p>
          <div class="bg-darkGrey h-px w-auto mr-2"></div>
          <p class="font-inter text-base text-darkGrey mx-auto my-2">3 rue du champs, 68390 Baldersheim</p>
          <div class="bg-darkGrey h-px w-auto mr-2"></div>
          <p class="font-inter text-base text-darkGrey mx-auto my-2">Secrétaire médicale</p>
          <div class="bg-darkGrey h-px w-auto mr-2"></div>
          <p class="font-inter text-base text-darkGrey mx-auto my-2">J'aime cuisiner et partager mes recettes avec autrui</p>
          <div class="bg-darkGrey h-px w-auto mr-2"></div>
        </div>
      </div>

      <div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-8 flex items-center justify-center"><p class="font-inter font-semibold text-[13px] text-grey text-center">Modifier l'addresse email</p></div>
      <div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-4 flex items-center justify-center"><p class="font-inter font-semibold text-[13px] text-grey text-center">Modifier votre mot de passe</p></div>
    </div>

    <div>
      <div class="w-auto h-px my-6 bg-black lg:hidden"></div>
      <p class="font-inter font-bold text-Pop text-x2l text-center mb-6">Vos points : 500 points</p>

      <div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-4 flex items-center justify-center"><p class="font-inter font-semibold text-xl text-center">Supprimer un produit</p></div>
      <RouterLink to="/favoris"><div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-4 flex items-center justify-center"><p class="font-inter font-semibold text-xl text-center">Favoris</p></div></RouterLink>
      <RouterLink to="/messagerie"><div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-4 flex items-center justify-center"><p class="font-inter font-semibold text-xl text-center">Messagerie</p></div></RouterLink>
      <RouterLink to="/ajoutContenu" class="flex justify-center"><button class="w-auto h-auto rounded-x2l bg-midGreen px-12 py-2 mt-6 mb-10 text-x2l font-inter bold text-black uppercase">Ajouter un contenu</button></RouterLink>
    </div>
  </div>
  

</template>