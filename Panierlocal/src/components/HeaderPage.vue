<script setup lang="ts">
    import { ref, computed, watch} from 'vue';
    import { RouterLink } from 'vue-router';
    import ShoppingBag from './icons/30px/ShoppingBag.vue';
    import Love from './icons/30px/Love.vue';
    import plus from './icons/30px/plus.vue';
    import Chat from './icons/30px/Chat.vue';
    import CookingBookVue from './icons/30px/CookingBook.vue';
    import group from './icons/30px/group.vue';
    import CalendarVue from './icons/30px/Calendar.vue';
    import ShoppingCartVue from './icons/30px/Shopping Cart.vue';
    import logoVue from './icons/logo/logo.vue';
    import MaleUser from './icons/30px/MaleUser.vue';

    const activeMenu = ref(false)

    function closeMenu() {
        activeMenu.value = false }
</script>

<template>
  <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-white px-6 py-5 transition-all duration-300 ease-in-out">
    <div class="flex items-center">
      <RouterLink to="/index">
        <logoVue />
      </RouterLink>
    </div>

    <div class="flex items-center gap-4">
      <button>
        <RouterLink to="/profil2">
        <MaleUser />
        </RouterLink>
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
            <img class="left-[30.5px] top-[96.5px] w-1/4" src="../components/img/pdp + events/stephanie.webp" />
            <p class="absolute left-24 top-[107px] text-xs font-semibold text-center text-[#252525]">Stéphanie Lévêque</p>
            <RouterLink to="/profil2"><p class="absolute left-24 top-[122px] text-[10px] text-left text-[#868686]">Voir mon profil</p></RouterLink>
          </div>
          
		      <li class="mt-8"><RouterLink class="menu-link" to="/pageProduits" @click="closeMenu"><ShoppingBag /><p class="ml-10 font-inter text-base">Produits</p></RouterLink></li>
		      <li><RouterLink class="menu-link" to="/favoris" @click="closeMenu"><Love /><p class="ml-10 font-inter text-base">Liste de Favoris</p></RouterLink></li>
		      <li><RouterLink class="menu-link" to="/ajoutContenu" @click="closeMenu"><plus /><p class="ml-10 font-inter text-base">Ajouter du contenu</p></RouterLink></li>
		      <li><RouterLink class="menu-link" to="/messagerie" @click="closeMenu"><Chat /><p class="ml-10 font-inter text-base">Messagerie</p></RouterLink></li>
          <li><RouterLink class="menu-link" to="/pageRecettes" @click="closeMenu"><CookingBookVue /><p class="ml-10 font-inter text-base">Recettes</p></RouterLink></li>
          <li><RouterLink class="menu-link" to="/forum" @click="closeMenu"><group /><p class="ml-10 font-inter text-base">Forum</p></RouterLink></li>
          <li><RouterLink class="menu-link" to="/evenements" @click="closeMenu"><CalendarVue /><p class="ml-10 font-inter text-base">Evènements</p></RouterLink></li>
          <li><RouterLink class="menu-link" to="/panier" @click="closeMenu"><ShoppingCartVue /><p class="ml-10 font-inter text-base">Panier</p></RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>