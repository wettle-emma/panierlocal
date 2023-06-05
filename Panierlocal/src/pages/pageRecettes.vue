<script setup lang="ts">
import { allProduits } from '@/backend';
import ProduitCard from '@/components/ProduitCard.vue';

const listeProduits = await allProduits()
</script>

<template>
    <h1>Recettes</h1>
    <h2 class="text-xl font-montserrat font-medium uppercase">Les plus populaires</h2>

    <ul class="grid grid-cols-2 gap-6 mx-5 ">
                    <li v-for="produits of listeProduits" v-bind="{...produits}" :v-key="produits.id">
                    <RouterLink :to="{ name: 'produit-id', params: {id: produits.id} }">
                    <ProduitCard v-bind="{...produits}"/> 
                    </RouterLink>
                </li>
                </ul>
</template>