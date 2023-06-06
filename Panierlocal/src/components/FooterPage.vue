<script setup lang="ts">
    import { ref, computed, watch} from 'vue';
    import { RouterLink } from 'vue-router';
    import Instagram from './icons/30px/Instagram.vue';
    import YouTube from './icons/30px/YouTube.vue';
    import Pinterest from './icons/30px/Pinterest.vue';
    import Facebook from './icons/30px/Facebook.vue';
</script>

<template>
    <footer class=" bg-lightGreen lg:grid lg:grid-cols-4 gap-8">
    <nav class="space-y-8 mx-4 my-4 columns-2 gap-8 lg:columns-4 lg:col-span-4 lg:mx-0">
      <div class="space-y-2 lg:ml-5">
        <h3 class="font-inter font-semibold text-base">À propos</h3>
        <ul class="font-inter text-base text-darkGreen">
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><RouterLink to="/equipe">Qui sommes-nous</RouterLink></li>
        </ul>
      </div>

      <div class="space-y-2">
        <h3 class="font-inter font-semibold text-base">Communauté</h3>
        <ul class="font-inter text-base text-darkGreen">
          <li><RouterLink to="/forum">Forum</RouterLink></li>
          <li><RouterLink to="/pageRecettes">Recettes</RouterLink></li>
          <li><RouterLink to="/pageEvenement">Evènements</RouterLink></li>
        </ul>
      </div>

      <div class="space-y-2">
        <h3 class="font-inter font-semibold text-base">Compte</h3>
        <ul class="font-inter text-base text-darkGreen">
          <li><RouterLink to="/parametres">Mon profil</RouterLink></li>
          <li><RouterLink to="/favoris">Mes favoris</RouterLink></li>
        </ul>
      </div>

      <div class="space-y-2">
        <h3 class="font-inter font-semibold text-base">Informations légales</h3>
        <ul class="font-inter text-base text-darkGreen">
          <li><RouterLink to="/mentionsLegales">Mentions légales</RouterLink></li>
          <li><RouterLink to="/cookies">Politique de cookies</RouterLink></li>
          <li><RouterLink to="/cgv">CGV</RouterLink></li>
        </ul>
      </div>
    </nav>

      <h3 class="ml-5 font-inter font-semibold text-base">Nous retrouver</h3>
      <ul class="my-4 ml-8 flex gap-8">
        <li>
          <a href="#"><Facebook /></a>
        </li>
        <li>
          <a href="#"><Instagram /></a>
        </li>
        <li>
          <a href="#"><YouTube /></a>
        </li>
        <li>
          <a href="#"><Pinterest /></a>
        </li>
      </ul>
  </footer>
</template>