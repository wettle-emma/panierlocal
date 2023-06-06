<script setup lang="ts">
import MapMarker from '@/components/icons/28px/Map Marker.vue';
import Info from '@/components/icons/28px/Info.vue';
import share from '@/components/icons/50px/share.vue';
import messageVue from '@/components/icons/50px/message.vue';
import stars from '@/components/icons/stars.vue'
import noteB from '@/components/icons/noteB.vue';
import back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>
    <h1>Bernard meunier</h1>

        <div class="max-1-xl mx-auto grid grid-cols-1">
  
  <div class="relative pb-2/3 h-52 w-52 mx-auto mt-8">
    <img src="../components/img/pdp + events/bernard.webp" alt="" class="absolute rounded-full h-full w-full top-0 object-cover">
  </div>

  <div class="m-auto mt-8 flex">
    <noteB />
    <p class="font-inter font-bold text-x2l pt-1 pl-4">4,2/5</p>
  </div>

  <div class="my-8">
    <div class="flex flex-cols-2 m-auto">
      <div class="w-1/4 flex items-center justify-center"><MapMarker /></div>
      <div class="w-3/4"><p class="">Ferme du maraicher, 68390 Sausheim</p></div>
  </div>
</div>
    <div class="flex flex-cols-2">
      <div class="w-1/4 flex items-center justify-center"><info /></div>
      <div class="w-3/4">
        <p>Agriculteur bio</p>
        <p>“Je travaille depuis 15 ans dans mes champs, j’aime l’agriculture saine, écologique et sans pesticide.”</p></div>
    </div>
    
    <div class="flex flex-cols-4 h-16 mt-8 m-auto mb-10 lg:">
      <div class="w-1/4 flex items-center justify-center"><share /></div>
      <div class="w-1/4 flex items-center justify-center"><messageVue /></div>
      <div class="w-2/4 flex items-center cols-span-2 justify-cente"><stars /></div>
      </div>


      <h3 class="font-inter text-x2l pb-4 ml-4">Produits vendus par Bernard</h3>
      <div class="ml-4 overflow-y-hidden" data-carousel="slide">
        <div class="flex gap-8 lg:gap-4">
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/carottes.webp" alt="carottes" class="">
                    <p class="text-darkGreen font-inter font-light uppercase text-base mt-1">Lot de carotte</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/tomate.webp" alt="tomate cerise" class="">
                    <p class="text-darkGreen font-inter font-light uppercase text-base mt-1">Tomate cerise</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/oeufs.webp" alt="oeufs" class="">
                    <p class="text-darkGreen font-inter font-light uppercase text-base mt-1">Oeufs bio en plein air</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0" data-carousel-item>
                    <img src="../components/img/favoris/basilic.webp" alt="basilic" class="">
                    <p class="text-darkGreen font-inter font-light uppercase text-base mt-1">Plante aromatique</p>
            </div>
        </div>
    </div>

</div>
  <div class=" ">
     <RouterLink to="/pageProduits">
       <p class="text-Pop font-bold py-2 pr-6 text-right text-base underline">En voir plus</p>
     </RouterLink>
  </div>
</template>