<script setup lang="ts">
</script>

<template>
    <h1>Ajouter un produit</h1>
    <div class="ml-4 mb-10 lg:grid lg:grid-cols-2">
        <div>
        <div>
            <h2 class="text-xl font-montserrat font-medium uppercase">Ajouter une image</h2>
            <div class="bg-grey w-2/3 h-40 rounded-x2l mx-auto mt-4 flex items-center justify-center"><p class="font-inter font-semibold text-base text-center">+ choisir une image</p></div>
        </div>
        </div>
    
        <div>
            <div>
            <h2 class="text-xl font-montserrat font-medium uppercase mt-8">Ajouter un titre</h2>
            <div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-4 flex items-center justify-center"><p class="font-inter font-semibold text-[13px] text-grey text-center">Nom du produit</p></div>
        </div>
        
        <div>
            <h2 class="text-xl font-montserrat font-medium uppercase mt-8">Définir un prix</h2>
            <div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-4 flex items-center justify-center"><p class="font-inter font-semibold text-[13px] text-grey text-center">Prix</p></div>
        </div>
   
        <div>
            <h2 class="text-xl font-montserrat font-medium uppercase mt-8">Ajouter une adresse</h2>
            <div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-4 flex items-center justify-center"><p class="font-inter font-semibold text-[13px] text-grey text-center">Adresse</p></div>
        </div>
    
    </div>
    <RouterLink to=""><button class="w-52 rounded-x2l bg-midGreen p-2 mt-6 mb-10 mx-28 text-x2l font-inter bold text-black uppercase">Publier le produit</button></RouterLink>
</div>
</template>