<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
import Phone from '@/components/icons/28px/Phone.vue';
import Envelope from '@/components/icons/28px/Envelope.vue';
import MapMarkerVue from '@/components/icons/28px/Map Marker.vue';
</script>

<template>
<HeaderPage />
<main>
    <h1>Contact</h1>

    <div>
      <h2 class="font-montserrat font-bold text-x3l">Nos coordonnées</h2>
      <Phone /><p class="font-semibold text-xl text-darkGreen underline">06 60 82 28 68</p>
      <Envelope /><p class="font-semibold text-xl text-darkGreen underline">contact@panierlocal.fr</p>
    </div>
    <div>
      <h2 class="font-montserrat font-bold text-x3l">Notre adresse</h2>
      <MapMarkerVue /><p class="font-semibold text-xl text-darkGreen">24 rue Castelnau, 21000, Dijon</p>
    </div>
    <div>
        <h2 class="font-montserrat font-bold text-x3l">Nous contacter</h2>

    </div>

</main>
<FooterPage /> 
</template>