<script setup lang="ts">
import Phone from '@/components/icons/28px/Phone.vue';
import Envelope from '@/components/icons/28px/Envelope.vue';
import MapMarkerVue from '@/components/icons/28px/Map Marker.vue';
</script>

<template>
    <h1 class="pt-40 pl-3 pb-5">Contact</h1>

    <div class="lg:columns-2">
    <div class="lg:w-1/2 lg:items-center">
      <h2 class="font-montserrat font-bold text-x3l pl-5 mb-4">Nos coordonnées</h2>
      <div class="flex space-y-2 mb-2 ml-4"><Phone /><p class="font-semibold text-xl text-darkGreen underline">06 60 82 28 68</p></div>
      <div class="flex space-y-2 ml-4"><Envelope /><p class="font-semibold text-xl text-darkGreen underline">contact@panierlocal.fr</p></div>
    </div>

    <div class="lg:w-1/2 lg:items-center">
      <h2 class="font-montserrat font-bold text-x3l pl-5 my-4">Notre adresse</h2>
      <div class="flex space-y-2 ml-4"><MapMarkerVue /><p class="font-semibold text-xl text-darkGreen">24 rue Castelnau, 21000, Dijon</p></div>
    </div>
    </div>

    <div>
        <h2 class="font-montserrat font-bold text-x3l pl-5 my-4">Nous contacter</h2>

    </div> 
</template>