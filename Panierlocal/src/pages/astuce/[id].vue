<script setup lang="ts">
import EmptyHeart from "@/components/icons/50px/EmptyHeart.vue";
import share from "@/components/icons/50px/share.vue";
import un from "@/components/icons/un.vue";
import deux from "@/components/icons/deux.vue";
import trois from "@/components/icons/trois.vue";
import quatre from "@/components/icons/quatre.vue";
import { pb } from "@/backend"
import { RouterLink } from 'vue-router';
import Back from "@/components/icons/28px/Back.vue";

</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

  <h1>{{ astuce.nameAstuce}}</h1>
    <img src="" alt="">
    <div class="flex">
        <RouterLink to="/favoris"><EmptyHeart /></RouterLink>
        <share />
        <div><p>Proposée par Stéphanie</p><img src="../components/img/pdp + events/stephanie.webp" alt=""></div>
    </div>

    <h2 class="font-inter font-bold text-x2l text-center">Pour {{ astuce.nbr_usages }} usages</h2>
    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Produits nécessaires</h3>
    <p>{{ astuce.produits }}</p>
   
    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Etapes</h3>
    <div>
    <un />
    <p>{{ astuce.etape1astuce }}</p>
    <deux />
    <p>{{ astuce.etape2astuce }}</p>
    <trois />
    <p>{{ astuce.etape3astuce }}</p>
    <quatre />
    <p>{{ astuce.etape4astuce }}</p>
    </div>

    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">D'autres astuces pour la maison</h3>
    <div class="relative pt-6 pb-12 ml-4 w-full lg:w-3/5 mx-auto flex justify-center overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-4">
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

    <p class="font-bold text-x2l font-inter mx-auto ml-4">Vous avez une astuce a nous faire partagez ? Publiez la !</p>
    <RouterLink to="ajoutAstuce"><button class="w-52 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter une astuce</button></RouterLink>

</template>