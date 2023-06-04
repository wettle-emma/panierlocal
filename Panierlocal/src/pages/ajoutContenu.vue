<script setup lang="ts">

</script>

<template>
    <h1>Ajouter du contenu</h1>
    <h2 class="text-xl font-montserrat font-medium uppercase">Catégories</h2>
    <p class="text-[13px] font-inter text-grey ml-6">Cliquer sur la catégorie de votre annonce</p>

    <div class="mb-12 lg:ml-80">
    <RouterLink class="ml-16 mt-6 flex" to="/ajoutProduit">
        <div class="w-6 h-6 rounded-full border-black border-2"></div>
        <p class="ml-6">Produit</p>
    </RouterLink>

    <RouterLink class="ml-16 mt-6 flex" to="/ajoutRecette">
        <div class="w-6 h-6 rounded-full border-black border-2"></div>
        <p class="ml-6">Recette</p>
    </RouterLink>

    <RouterLink class="ml-16 mt-6 flex" to="/ajoutAstuce">
        <div class="w-6 h-6 rounded-full border-black border-2"></div>
        <p class="ml-6">Astuce</p>
    </RouterLink>

    <RouterLink class="ml-16 mt-6 flex" to="/ajoutEvenement">
        <div class="w-6 h-6 rounded-full border-black border-2"></div>
        <p class="ml-6">Evènement</p>
    </RouterLink>
    
</div>

</template>