<script setup lang="ts">
import Clock from '@/components/icons/28px/Clock.vue';
import Calendar from '@/components/icons/28px/calendar.vue';
import MapMarker from '@/components/icons/28px/Map Marker.vue';
import Phone from '@/components/icons/28px/phone.vue';
import Back from '@/components/icons/28px/Back.vue';

import Map from '@/components/GoogleMap.vue'
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

<div class="pt-0 mb-8 px-2 lg:grid lg:grid-cols-2">

 <img class="pt-20 lg:w-3/4" src="../components/img/pdp + events/Rectangle 43.webp" />

    <div>
        <Map />
    </div>


    <div>
    <h1 class="pt-8 uppercase font-inter text-x2l text-black font-normal lg:pt-20">Cours de jardinage</h1>
    <div class="items-center justify-center">
    <ul class="ml-12">
        <li class="menu-link"><Calendar /><p class="flex ml-10 font-inter text-base items-center">Vendredi 12 mai 2023</p></li>
        <li class="menu-link"><Clock /><p class="flex items-center ml-10 font-inter text-base">18h30 - 20h</p></li>
        <li class="menu-link"><MapMarker /><p class="flex items-center undeline ml-10 font-inter text-base">15 rue du Printemps, 68400 Riedisheim</p></li>
        <li class="menu-link"><phone /><p class="flex items-center underline ml-10 font-inter text-base">07.81.56.75.12</p></li>
    </ul>
    </div>
    </div>
    
</div>

</template>
