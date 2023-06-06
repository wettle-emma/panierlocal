<script setup lang="ts">
import { allRecettes } from '@/backend';
import RecetteCard from '@/components/RecetteCard.vue';
import Back from '@/components/icons/28px/Back.vue';

const listeRecettes = await allRecettes()
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Recettes</h1>
    <h2 class="text-xl font-montserrat font-medium uppercase ml-6">Les plus populaires</h2>

    <ul class="grid grid-cols-2 gap-6 mx-5 lg:grid-cols-4">
                    <li v-for="recettes of listeRecettes" v-bind="{...recettes}">
                    <RouterLink :to="{ name: 'recettes-id', params: {id: recettes.id} }">
                    <RecetteCard v-bind="{...recettes}"/> 
                    </RouterLink>
                </li>
                </ul>
    <div class="my-8 mx-auto lg:grid lg:grid-cols-2">
        <img src="../components/img/illustrations/Cooking-cuate 1.webp">
        <RouterLink to="/ajoutRecette" class="flex justify-center items-center"><button class="flex items-center w-auto h-12 px-8 py-4 rounded-x2l bg-midGreen text-x2l font-inter bold text-black uppercase ">Ajouter une recette</button></RouterLink>
    </div>
    
</template>