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
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>{{ nameProduit}}</h1>
    <img :src="urlImg">
    <div class="flex">
        <RouterLink to="/favoris"><EmptyHeart /></RouterLink>
        <RouterLink to="/messagerie"><message /></RouterLink>
        <RouterLink to="/panier"><button class="w-40 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter au panier</button></RouterLink>
    </div>

    <ul>
        <li><Euro />{{ price }}€/kilo</li>
        <li><MapMarker />{{ adresse }}</li>
        <li><Info />Publié par {{  }} le {{ publier }}</li>
        <li><CookingBook />Idée recettes avec des carottes</li>
    </ul>


</template>