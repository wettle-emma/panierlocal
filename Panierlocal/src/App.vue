<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Page d'accueil</RouterLink>
			<RouterLink to="/ajoutAstuces">Ajout Astuces</RouterLink>
      <RouterLink to="/ajoutContenu">Ajout Contenu</RouterLink>
      <RouterLink to="/ajoutEvenement">Ajout Evènement</RouterLink>
      <RouterLink to="/ajoutProduit">Ajout Produit</RouterLink>
      <RouterLink to="/ajoutRecette">Ajout Recette</RouterLink>
      <RouterLink to="/astuce">Astuces</RouterLink>
      <RouterLink to="/cgv">CGV</RouterLink>
      <RouterLink to="/cookies">Politique de Cookies</RouterLink>
      <RouterLink to="/equipe">Qui sommes nous ?</RouterLink>
      <RouterLink to="/evenements">Evènements</RouterLink>
      <RouterLink to="/favoris">Favoris</RouterLink>
      <RouterLink to="/forum">Forum</RouterLink>
      <RouterLink to="/inscription">Inscription</RouterLink>
      <RouterLink to="/mentionsLegales">Mentions Légales</RouterLink>
      <RouterLink to="/messagerie">Messagerie</RouterLink>
      <RouterLink to="/messages">Messages</RouterLink>
      <RouterLink to="/pageAstuces">Astuces</RouterLink>
      <RouterLink to="/pageEvenement">Présentation évènements</RouterLink>
      <RouterLink to="/pageProduits">Produits</RouterLink>
      <RouterLink to="/pageRecettes">Recettes</RouterLink>
      <RouterLink to="/panier">Panier</RouterLink>
      <RouterLink to="/parametres">Paramètres</RouterLink>
      <RouterLink to="/payer">Payer</RouterLink>
      <RouterLink to="/produit">Produit</RouterLink>
      <RouterLink to="/profil1">Profil 1</RouterLink>
      <RouterLink to="/profil2">Profil 2</RouterLink>
      <RouterLink to="/recette">Recette</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>