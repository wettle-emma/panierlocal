<script setup lang="ts">
import { pb } from '@/backend';
import type { ProduitsResponse } from '@/pocketbase-types'; 
import Euro from '@/components/icons/28px/Euro.vue';
import EmptyHeart from '@/components/icons/50px/EmptyHeart.vue';
import message from '@/components/icons/50px/message.vue';
import MapMarker from '@/components/icons/28px/Map Marker.vue';
import Info from '@/components/icons/28px/Info.vue';
import CookingBook from '@/components/icons/28px/CookingBook.vue';
import Back from '@/components/icons/28px/Back.vue';

const props: ProduitsResponse = defineProps<ProduitsResponse>()

const img0= props.imageProduit
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })
</script>

<template>
    <main>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <div class="lg:grid lg:grid-cols-2">
        <div class="lg:grid-cols-1">
            <h1>{{ nameProduit}}</h1>
            <img class="w-screen lg:ml-2" :src="urlImg">
            <div class="flex space-between mt-4">
                <div class="flex items-center">
        <RouterLink class="ml-4" to="/favoris"><EmptyHeart /></RouterLink>
        <RouterLink class="ml-4" to="/messagerie"><message /></RouterLink>
        <RouterLink to="/panier"><button class="w-40 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-20 text-x2l font-inter bold text-black uppercase">Ajouter au panier</button></RouterLink>
    </div>
    </div>
    </div>
    </div>

    <ul class="block ml-10 mt-4">
        <li class="flex mt-4 gap-2"><Euro />{{ price }}€/kilo</li>
        <li class="flex mt-4 gap-2"><MapMarker />{{ adresse }}</li>
        <li class="flex mt-4 gap-2"><Info />Publié par Bernard Meunier le {{ datePublication }}</li>
    </ul>

    <CookingBook class="flex pt-10" /><h3 class="font-montserrat font-bold text-x3l text-darkGreen ml-8 my-10">D'autres idées recettes</h3>
    <div class="relative pt-6 pb-12 ml-4 w-full mx-auto overflow-y-hidden" data-carousel="slide">
        <div class="relative flex h-120 gap-4">
          <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/lasagne.webp" alt="Produits vitre" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Lasagne en 20 min</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Stéphanie</p>
            </div>
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/wok.webp" alt="Vaisselle" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Wok de légumes</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par Jules</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/smoothieBowl.webp" alt="Vitre" class="mb-2">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Smoothie Bowl</p>
                    <p class="font-darkGrey font-inter font-light text-base ml-4">par David</p>
            </div>
        </div>
    </div>
</main>
</template>