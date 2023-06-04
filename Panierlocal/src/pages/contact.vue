<script setup lang="ts">
import Phone from '@/components/icons/28px/phone.vue';
import Envelope from '@/components/icons/28px/Envelope.vue';
import MapMarkerVue from '@/components/icons/28px/Map Marker.vue';
</script>

<template>
    <h1>Contact</h1>

    <div class="lg:grid lg:grid-cols-2 lg:gap-4">
    <div class="lg:grid-cols-1 lg:mx-auto lg:mt-5">
      <div>
      <h2 class="font-montserrat font-bold text-x3l pl-5 mb-4">Nos coordonnées</h2>
      <div class="flex space-y-2 mb-2 ml-6"><Phone /><p class="font-semibold text-xl text-Pop underline ml-2">06 60 82 28 68</p></div>
      <div class="flex space-y-2 ml-6"><Envelope /><p class="font-semibold text-xl text-Pop underline ml-2">contact@panierlocal.fr</p></div>
    </div>

    <div class="lg:mt-16">
      <h2 class="font-montserrat font-bold text-x3l pl-5 my-4">Notre adresse</h2>
      <div class="flex space-y-2 ml-6"><MapMarkerVue /><p class="font-semibold text-xl text-Pop ml-2">24 rue Castelnau, 21000, Dijon</p></div>
    </div>
  </div>
    

      <div class="grid-cols-1">
        <h2 class="font-montserrat font-bold text-x3l pl-5 my-4">Nous contacter</h2>

        <form class="flex flex-col py-10 px-5 lg:mx-2" action="#">
          
          <div class="mb-4">
            <input class="w-full text-black border-0 mb-1" type="text" name="votre-nom" placeholder="Nom" required>
            <div class="block h-px w-full bg-black my-1"></div>
          </div>

          <div class="mb-4">
            <input class="w-full text-black border-0 mb-1" type="text" name="votre-prénom" placeholder="Prénom" required>
            <div class="block h-px w-full bg-black my-1"></div>
          </div>

          <div class="mb-4">
            <input class="w-full text-black border-0 mb-1" type="email" name="votre-email" placeholder="Email" required>
            <div class="block h-px w-full bg-black my-1"></div>
          </div>

          <div class="mb-4">
            <textarea class="w-full text-black border-0 mb-1" name="Message" required>Message</textarea>
            <div class="block h-px w-full bg-black my-1"></div>
          </div>

        </form>
        
        <button class="w-40 rounded-x2l bg-Pop p-2 mt-1 mb-6 mx-28 text-x2l font-inter bold text-black" type="submit">Envoyer</button>
      </div> 
    </div>

</template>