<script setup lang="ts">
import { pb } from '@/backend';
import type { AstucesResponse } from '@/pocketbase-types'; 
import EmptyHeart from "@/components/icons/50px/EmptyHeart.vue";
import share from "@/components/icons/50px/share.vue";
import un from "@/components/icons/un.vue";
import deux from "@/components/icons/deux.vue";
import trois from "@/components/icons/trois.vue";
import quatre from "@/components/icons/quatre.vue";
import Back from "@/components/icons/28px/Back.vue";

const props: AstucesResponse = defineProps<AstucesResponse>()

const img0= props.imageAstuce
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

  <h1>{{ nameAstuce }}</h1>
  <div></div>
  <div></div>
  <div class="lg:grid lg:grid-cols-2">
    <div class="lg:grid-cols-1">
        <img class="w-screen lg:ml-2" :src="urlImg">
        <div class="flex space-between mt-4">
            <div class="flex items-center">
                <RouterLink class="ml-4" to="/favoris"><EmptyHeart /></RouterLink>
                <RouterLink class="ml-4" to="share"><share /></RouterLink>
                    <div class="flex items-center ml-12">
                        <p class="mr-2">Proposée par Stéphanie</p>
                        <img class="w-1/6" src="../components/img/pdp + events/stephanie.webp" alt="">
                    </div>
            </div>
        </div>
   </div>

   <div class="lg:grid-cols-2">
    <h2 class="font-inter font-bold text-x2l text-center">Pour {{ nbr_usages }} usages</h2>
    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Produits nécessaires</h3>
    <p class="ml-4 text-lg lg:flex lg:justify-center">{{ produits }}</p>
   
    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Etapes</h3>
    <div>
    <un class="mx-auto mb-4" />
    <p class="flex justify-center ml-4">{{ etape1astuce }}</p>
    <deux class="mx-auto my-4" />
    <p class="flex justify-center ml-4">{{ etape2astuce }}</p>
    <trois class="mx-auto my-4" />
    <p class="flex justify-center ml-4">{{ etape3astuce }}</p>
    <quatre class="mx-auto my-4" />
    <p class="flex justify-center ml-4">{{ etape4astuce }}</p>
    </div>
</div>
  </div>

    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">D'autres astuces pour la maison</h3>
    <div class="relative pt-6 pb-12 ml-4 w-1/2 lg:w-full mx-auto overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-4">
          <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/forum/produit.webp" alt="Produits vitre" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Lave-vitre au citron</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Stéphanie</p>
            </div>
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/forum/vaisselle.webp" alt="Vaisselle" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">La vaisselle avec moins d'eau</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Jules</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/forum/vitre.webp" alt="Vitre" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Laver ses vitres efficacement</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par David</p>
            </div>
        </div>
    </div>

    <p class="flex justify-center font-bold text-x2l font-inter mx-auto ml-4">Vous avez une astuce a nous faire partagez ? Publiez la !</p>
    <RouterLink to="ajoutAstuce" class="flex justify-center"><button class="w-auto rounded-x2l bg-midGreen px-8 py-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter une astuce</button></RouterLink>

</template>