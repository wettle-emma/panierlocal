<script setup lang="ts">
    import { ref, computed, watch} from 'vue'
    import { RouterLink } from 'vue-router';

    const activeMenu = ref(false)

    function closeMenu() {
        activeMenu.value = false    }
</script>

<template>
  <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-white px-6 py-5 transition-all duration-300 ease-in-out">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div class="flex items-center gap-4">
      <button>
        <SearchIcon />
      </button>

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between" @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-black opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu}"></div>
      </button>

			<nav 
            class="invisible opacity-0 bg-white fixed inset-5 top-7 h-screen w-screen transition-all duration-300 ease-in-out" 
            :class="{ '!visible !opacity-100': activeMenu }"
            v-scroll-lock="activeMenu">
		    <ul>
          <li>Stéphanie Levèque</li>
          <li><RouterLink class="menu-link" to="/profil2" @click="closeMenu">Voir mon profil</RouterLink></li>
          <span class="bg-black"></span>
		      <li><RouterLink class="menu-link" to="/rechercher" @click="closeMenu">Rechercher</RouterLink></li>
		      <li><RouterLink class="menu-link" to="pageProduits" @click="closeMenu">Produits</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/favoris" @click="closeMenu">Liste de Favoris</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/ajoutContenu" @click="closeMenu">Ajouter du contenu</RouterLink></li>
          <span></span>
		      <li><RouterLink class="menu-link" to="/messagerie" @click="closeMenu">Messagerie</RouterLink></li>
          <span></span>
              <li><RouterLink class="menu-link" to="/pageRecettes" @click="closeMenu">Recettes</RouterLink></li>
              <li><RouterLink class="menu-link" to="/forum" @click="closeMenu">Forum</RouterLink></li>
              <li><RouterLink class="menu-link" to="/evenements" @click="closeMenu">Evènements</RouterLink></li>
              <li><RouterLink class="menu-link" to="/panier" @click="closeMenu">Panier</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>