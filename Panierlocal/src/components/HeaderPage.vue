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
            class="invisible opacity-0 bg-white font-bold text-base font-inter fixed inset-0 pt-20 pl-10 h-screen w-screen transition-all duration-300 ease-in-out lg:pt-70 lg:pl-30" 
            :class="{ '!visible !opacity-100': activeMenu }"
            v-scroll-lock="activeMenu">
		    <ul class="flex flex-col gap-1 lg:grid lg:grid-cols-2">
          <div class="w-[177px] h-[50px]">
            <img class="absolute left-[30.5px] top-[96.5px]" src="ellipse-4.png" />
            <p class="absolute left-24 top-[107px] text-xs font-semibold text-center text-[#252525]">
              Stéphanie Lévêque
            </p>
            <p class="absolute left-24 top-[122px] text-[10px] text-left text-[#868686]">Voir mon profil</p>
          </div>
          <li><RouterLink class="menu-link" to="/profil2" @click="closeMenu">Voir mon profil</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/rechercher" @click="closeMenu">Rechercher</RouterLink></li>
		      <li><RouterLink class="menu-link" to="pageProduits" @click="closeMenu">Produits</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/favoris" @click="closeMenu">Liste de Favoris</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/ajoutContenu" @click="closeMenu">Ajouter du contenu</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/messagerie" @click="closeMenu">Messagerie</RouterLink></li>
          <li><RouterLink class="menu-link" to="/pageRecettes" @click="closeMenu">Recettes</RouterLink></li>
          <li><RouterLink class="menu-link" to="/forum" @click="closeMenu">Forum</RouterLink></li>
          <li><RouterLink class="menu-link" to="/evenements" @click="closeMenu">Evènements</RouterLink></li>
          <li><RouterLink class="menu-link" to="/panier" @click="closeMenu">Panier</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>