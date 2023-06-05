<script setup lang="ts">
import Clock from '@/components/icons/28px/Clock.vue';
import Calendar from '@/components/icons/28px/calendar.vue';
import MapMarker from '@/components/icons/28px/Map Marker.vue';
import Phone from '@/components/icons/28px/phone.vue';

</script>

<template>
<div class="my-8 px-2 lg:grid lg:grid-cols-2">

    <img class="pt-32 lg:w-3/4" src="../components/img/pdp + events/Rectangle 43.webp" />

    <div>
    <h1 class="pt-8 uppercase font-inter text-x2l text-black font-normal lg:pt-20">Cours de jardinage</h1>
    <div class="flex items-center justify-center">
    <ul class="ml-24">
        <li class="menu-link"><Calendar /><p>Vendredi 12 mai 2023</p></li>
        <li class="menu-link"><Clock /><p>18h30 - 20h</p></li>
        <li class="menu-link"><MapMarker /><p class="underline">15 rue du Printemps, 68400 Riedisheim</p></li>
        <li class="menu-link"><phone /><p class="underline">07.81.56.75.12</p></li>
    </ul>
    </div>
    </div>
    
</div>

</template>
