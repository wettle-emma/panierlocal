<script setup lang="ts">
import { allProduits } from '@/backend';
import produitCard from '@/components/ProduitCard.vue';
import Back from '@/components/icons/28px/Back.vue';

const listeProduits = await allProduits()
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Produits</h1>
    <h2 class="text-xl font-montserrat font-medium uppercase ml-6">Les plus populaires</h2>

    <ul class="grid grid-cols-2 gap-6 mx-5 lg:grid-cols-4">
                    <li v-for="produits of listeProduits" v-bind="{...produits}">
                    <RouterLink :to="{ name: 'produits-id', params: {id: produits.id} }">
                    <produitCard v-bind="{...produits}"/> 
                    </RouterLink>
                </li>
                </ul>
    <div class="my-8 mx-auto lg:grid lg:grid-cols-2">
        <img src="../components/img/illustrations/Marketplace-bro 1.webp" alt="">
        <RouterLink to="/ajoutProduit" class="flex justify-center items-center"><button class="w-auto h-12 px-8 py-4 rounded-x2l bg-midGreen text-x2l font-inter bold text-black uppercase">Ajouter un produit</button></RouterLink>
    </div>
    
</template>