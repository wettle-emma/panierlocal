<script setup lang="ts">
import MapMarker from '@/components/icons/28px/Map Marker.vue';
import Info from '@/components/icons/28px/Info.vue';
import share from '@/components/icons/50px/share.vue';
import messageVue from '@/components/icons/50px/message.vue';
import stars from '@/components/icons/stars.vue'
import noteS from '@/components/icons/noteS.vue';
import back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>
    <h1>Stéphanie Levèque</h1>

        <div class="max-1-xl mx-auto grid grid-cols-1">
  
  <div class="relative pb-2/3 h-52 w-52 mx-auto mt-8">
    <img src="../components/img/pdp + events/stephanie.webp" alt="" class="absolute rounded-full h-full w-full top-0 object-cover">
  </div>

  <div class="m-auto mt-8 flex">
    <noteS />
    <p class="font-inter font-bold text-x2l pt-1 pl-4">4/5</p>
  </div>

  <div class="my-8">
    <div class="flex flex-cols-2 m-auto">
      <div class="w-1/4 flex items-center justify-center"><MapMarker /></div>
      <div class="w-3/4"><p class="">3 rue du champs, 68390 Baldersheim</p></div>
  </div>
</div>
    <div class="flex flex-cols-2">
      <div class="w-1/4 flex items-center justify-center"><info /></div>
      <div class="w-3/4">
        <p>Secrétaire médicale</p>
        <p>“J’aime cuisiner et partager mes recettes avec autrui”</p></div>
    </div>

      <h3 class="font-inter text-x2l pb-4 ml-4">Mes recettes</h3>
      <div class="ml-4 overflow-y-hidden" data-carousel="slide">
        <div class="flex gap-1 lg:gap-0">
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/pate.webp" alt="tagliatelles" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Tagliatelles de carotte</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/cookie.webp" alt="tomate cerise" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Cookies</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/soupe.webp" alt="soupe" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Velouté de courge</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/burger.webp" alt="burger" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Burger végétarien</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/frite.webp" alt="frites" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Frites maison</p>
            </div>
        </div>
    </div>

</div>
  <div class=" ">
     <router />
    <p class="text-Pop font-bold py-2 pr-6 text-right text-base underline">En voir plus</p>
  </div>

  <h3 class="font-inter text-x2l pb-4 ml-4">Mes astuces</h3>
      <div class="ml-4 overflow-y-hidden" data-carousel="slide">
        <div class="flex gap-1 lg:gap-0">
            <div  class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/produit.webp" alt="produit" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Lave-vitre au citron</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/ampoule.webp" alt="ampoule" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Consommer moins d'énergie</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/vaisselle.webp" alt="vaisselle" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Vaisselle propre avec peu d'eau</p>
            </div>
            <div class="flex-none duration-700 ease-in-out flex-shrink-0 w-screen" data-carousel-item>
                    <img src="../components/img/carrouselSteph/velo.webp" alt="vélo" class="w-4/5">
                    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">Le vélo plus souvent</p>
            </div>
        </div>
    </div>

  <div class=" ">
     <router />
    <p class="text-Pop font-bold py-2 pr-6 text-right text-base underline">En voir plus</p>
  </div>

  <div class="flex">
  <div class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l ml-4 mt-4 mb-6 flex items-center justify-center">
    <p class="text-center lg:text-2xl lg:p-4">Modifier le profil</p>
</div>
<div class="w-1/4 flex items-center justify-center"><share /></div>
</div>
</template>