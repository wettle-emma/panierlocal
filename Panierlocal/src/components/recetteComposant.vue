<script setup lang="ts">
import { pb } from '@/backend';
import type { RecettesResponse} from '@/pocketbase-types'; 
import EmptyHeart from "@/components/icons/50px/EmptyHeart.vue";
import share from "@/components/icons/50px/share.vue";
import un from "@/components/icons/un.vue";
import deux from "@/components/icons/deux.vue";
import trois from "@/components/icons/trois.vue";
import quatre from "@/components/icons/quatre.vue";
import Back from "@/components/icons/28px/Back.vue";

const props: RecettesResponse = defineProps<RecettesResponse>()

const img0= props.imageRecette
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

  <h1>{{ nameRecette}}</h1>
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
    <h2 class="font-inter font-bold text-x2l text-center mt-12">Pour {{ nbr_personnes }} personnes</h2>
    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Ingrédients</h3>
    <p class="ml-4 text-lg lg:flex lg:justify-center">{{ ingredientscette }}</p>
   
    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">Etapes</h3>
    <div>
    <un class="mx-auto mb-4" />
    <p class="flex justify-center ml-4">{{ etape1recette }}</p>
    <deux class="mx-auto my-4" />
    <p class="flex justify-center ml-4">{{ etape2recette }}</p>
    <trois class="mx-auto my-4" />
    <p class="flex justify-center ml-4">{{ etape3recette }}</p>
    <quatre class="mx-auto my-4" />
    <p class="flex justify-center ml-4">{{ etape4recette }}</p>
    </div>
</div>
</div>
    <h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">D'autres recettes</h3>
    <div class="relative pt-6 pb-12 ml-4 w-1/2 lg:w-full overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-4">
          <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/smoothieBowl.webp" alt="Produits vitre" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Smoothie bowl</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Bernard</p>
            </div>
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/lasagne.webp" alt="Vaisselle" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Lasagne en 20min</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Justine</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/salade.webp" alt="Vitre" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Salade de carottes</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Mélanie</p>
            </div>
        </div>
    </div>

    <p class="flex justify-center font-bold text-x2l font-inter mx-auto ml-4 mt-16">Vous avez une recette a nous faire partagez ? Publiez la !</p>
    <RouterLink to="/ajoutRecette" class="flex justify-center"><button class="w-auto rounded-x2l bg-midGreen px-8 py-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter une recette</button></RouterLink>

</template>