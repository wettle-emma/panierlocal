<script setup lang="ts">
import { allRecettes } from '@/backend';
import RecetteCard from '@/components/RecetteCard.vue';

const listeRecettes = await allRecettes()
</script>

<template>
    <h1>Recettes</h1>
    <h2 class="text-xl font-montserrat font-medium uppercase">Les plus populaires</h2>

    <ul class="grid grid-cols-2 gap-6 mx-5 lg:grid-cols-4">
                    <li v-for="recettes of listeRecettes" v-bind="{...recettes}" :v-key="recettes.id">
                    <RouterLink :to="{ name: 'recette-id', params: {id: recettes.id} }">
                    <RecetteCard v-bind="{...recettes}"/> 
                    </RouterLink>
                </li>
                </ul>
    <div>
        <img src="../components/img/illustrations/Cooking-cuate 1.webp" alt="">
        <RouterLink to="/ajoutRecette"><button class="w-50 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter une recette</button></RouterLink>
    </div>
    
</template>