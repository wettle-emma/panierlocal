<script setup lang="ts">
    import { ref, computed, watch} from 'vue';
    import { RouterLink } from 'vue-router';
    import MaleUser from './icons/30px/MaleUser.vue';
    import logoVue from './icons/logo/logo.vue';
    import ShoppingBagVue from './icons/30px/ShoppingBag.vue';
    import ChatVue from './icons/30px/Chat.vue';
    import CookingBookVue from './icons/28px/Cooking Book.vue';
    import GoogleCalendarVue from './icons/30px/GoogleCalendar.vue';
    import LoveVue from './icons/30px/Love.vue';
    import PeopleWorkingTogetherVue from './icons/30px/PeopleWorkingTogether.vue';
    import ShoppingCartVue from './icons/30px/ShoppingCart.vue';
    import Ajout from './icons/30px/Ajout.vue';
    import SearchVue from './icons/30px/Search.vue';

    const activeMenu = ref(false)

    function closeMenu() {
        activeMenu.value = false }
</script>

<template>
  <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-white px-6 py-5 transition-all duration-300 ease-in-out">
    <div class="flex items-center">
      <a href="/">
        <logoVue />
      </a>
    </div>

    <div class="flex items-center gap-4">
      <button>
        <MaleUser />
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
            <img class="absolute left-[30.5px] top-[96.5px]" src="#" />
            <p class="absolute left-24 top-[107px] text-xs font-semibold text-center text-[#252525]">
              Stéphanie Lévêque
            </p>
            <RouterLink to="/profil2"><p class="absolute left-24 top-[122px] text-[10px] text-left text-[#868686]">Voir mon profil</p></RouterLink>
          </div>
          
          <li>
            <div class="w-[129px] h-[30px]">
              <SearchVue /> 
              <p class="absolute left-[95px] top-[205px] text-xs font-bold text-left text-[#252525]">
                <RouterLink class="menu-link" to="/profil2" @click="closeMenu">
                Rechercher
                </RouterLink>
              </p>
            
            </div>
          </li>
		      <li><RouterLink class="menu-link" to="/pageProduits" @click="closeMenu">Produits</RouterLink></li>
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