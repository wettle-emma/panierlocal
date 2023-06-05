<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Favoris</h1>
    <div class="mb-10 lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
    <h2 class="font-montserrat font-bold text-x3l text-darkGreen ml-4 mt-2 pb-3">Produits</h2>
    <div class="grid grid-cols-2">
    <div>
        <img class="w-5/6 ml-4" src="../components/img/favoris/carottes.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Lot de carottes bio</p>
        <p class="font-darkGrey font-inter font-light text-base ml-4">par Bernard</p>
    </div>

    <div class="w-5/6 ml-4">
        <img src="../components/img/favoris/tomate.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Tomates cerises</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par Sophie</p>
    </div>

    <div class="w-5/6 mt-6 ml-4">
        <img src="../components/img/favoris/oeufs.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Oeufs bio en plein air</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par Justine</p>
    </div>

    <div class="w-5/6 mt-6 ml-4">
        <img src="../components/img/favoris/basilic.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Plantes aromatiques</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par Laurent</p>
    </div>

    <div class="w-5/6 mt-6 ml-4">
        <img src="../components/img/favoris/pain.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Pain au seigle</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par Xavier</p>
    </div>
    </div>
    </div>
    
    <div>
    <h2 class="font-montserrat font-bold text-x3l text-darkGreen ml-4 mt-4 pb-3">Recettes</h2>
    <div class="grid grid-cols-2">
    <div>
        <img class="w-5/6 ml-4" src="../components/img/favoris/smoothieBowl.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Smoothie Bowl</p>
        <p class="font-darkGrey font-inter font-light text-base ml-4">par Bernard</p>
    </div>

    <div class="w-5/6 ml-4">
        <img src="../components/img/favoris/lasagne.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Lasagne en 20min</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par Justine</p>
    </div>

    <div class="w-5/6 mt-6 ml-4">
        <img src="../components/img/favoris/wok.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Pad thai</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par David</p>
    </div>

    <div class="w-5/6 mt-6 ml-4">
        <img src="../components/img/favoris/poisson.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Saumon et risotto</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par Lydia</p>
    </div>
    </div>
    </div>

    <div>
    <h2 class="font-montserrat font-bold text-x3l text-darkGreen ml-4 mt-4 pb-3">Astuces</h2>
    <div class="grid grid-cols-2">
    <div>
        <img class="w-5/6 ml-4" src="../components/img/favoris/marche.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Consommer local</p>
        <p class="font-darkGrey font-inter font-light text-base ml-4">par Pascal</p>
    </div>

    <div class="w-5/6 ml-4">
        <img src="../components/img/favoris/produit.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Lave-vitre au citron</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par Stéphanie</p>
    </div>

    <div class="w-5/6 mt-6 ml-4">
        <img src="../components/img/favoris/jardinage.webp" alt="">
        <p class="text-darkGreen font-inter font-light uppercase text-base ml-1 mt-1">Quand planter ses fleurs?</p>
        <p class="font-darkGrey font-inter font-light text-base ml-1">par Julie</p>
    </div>
    </div>
    </div>
    </div>
</template>