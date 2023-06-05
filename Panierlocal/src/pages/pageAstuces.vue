<script setup lang="ts">
import { allAstuces } from '@/backend';
import AstuceCard from '@/components/AstuceCard.vue';

const listeAstuces = await allAstuces()
</script>

<template>
    <h1>Astuces</h1>
    <h2 class="text-xl font-montserrat font-medium uppercase">Les plus populaires</h2>

    <ul class="grid grid-cols-2 gap-6 mx-5 lg:grid-cols-4">
                    <li v-for="astuces of listeAstuces" v-bind="{...astuces}" :v-key="astuces.id">
                    <RouterLink :to="{ name: 'astuce-id', params: {id: astuces.id} }">
                    <AstuceCard v-bind="{...astuces}"/> 
                    </RouterLink>
                </li>
                </ul>
    <div>
        <img src="../components/img/illustrations/Instruction manual-rafiki 1.webp" alt="">
        <RouterLink to="/ajoutAstuce"><button class="w-50 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter une astuce</button></RouterLink>
    </div>
    
</template>