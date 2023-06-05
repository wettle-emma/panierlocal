<script setup lang="ts">
import { allProduits } from '@/backend';
import ProduitCard from '@/components/ProduitCard.vue';

const listeProduits = await allProduits()
</script>

<template>
    <h1>Produits</h1>
    <h2 class="text-xl font-montserrat font-medium uppercase">Les plus populaires</h2>

    <ul class="grid grid-cols-2 gap-6 mx-5 lg:grid-cols-4">
                    <li v-for="produits of listeProduits" v-bind="{...produits}" :v-key="produits.id">
                    <RouterLink :to="{ name: 'produit-id', params: {id: produits.id} }">
                    <ProduitCard v-bind="{...produits}"/> 
                    </RouterLink>
                </li>
                </ul>
    <div>
        <img src="../components/img/illustrations/Marketplace-bro 1.webp" alt="">
        <RouterLink to="/ajoutProduit"><button class="w-50 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Ajouter un produit</button></RouterLink>
    </div>
    
</template>