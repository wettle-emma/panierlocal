<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1>Mentions Légales</h1>
    <div class="space-y-4 mx-4 mt-4 mb-8 columns-1 gap-6 lg:columns-3 lg:col-span-3 lg:mx-0">
    <p>Le site <span class="bold">Panier Local</span> est hébergé par o2switch, domicilié(e) à Chemin des Pardiaux, 63000 Clermont-Ferrand.</p>
    <p>Le contenu du site <span class="bold">Panier Local</span>, incluant notamment les textes, photographies, logos, marques, est la propriété exclusive de <span class="bold">Panier Local</span> ou de ses partenaires. Toute reproduction, diffusion ou utilisation, même partielle, des éléments du site est interdite sans l'autorisation préalable de <span class="bold">Panier Local</span> ou de ses partenaires.</p>
    <p> Le site <span class="bold">Panier Local</span> est conforme aux dispositions légales relatives à la protection des données personnelles. Les informations collectées auprès des utilisateurs du site sont traitées de manière confidentielle et sont destinées à l'usage exclusif de <span class="bold">Panier Local</span>. Les utilisateurs du site disposent d'un droit d'accès, de rectification et de suppression des données les concernant.</p>
    <p> Le site <span class="bold">Panier Local</span> utilise des cookies pour améliorer l'expérience utilisateur et proposer des contenus personnalisés. Les utilisateurs du site peuvent refuser l'utilisation de cookies en configurant leur navigateur internet.</p>
    <RouterLink to="/cookies" class="text-right text-base font-inter text-darkGreen font-bold">En savoir plus</RouterLink>
    <p> Les informations diffusées sur le site <span class="bold">Panier Local</span> sont fournies à titre informatif. <span class="bold">Panier Local</span> ne saurait être tenu responsable de toute erreur ou omission, ou de toute utilisation qui pourrait en être faite par les utilisateurs du site.</p>
    <p>Le site <span class="bold">Panier Local</span> peut contenir des liens hypertextes vers des sites tiers. <span class="bold">Panier Local</span> ne saurait être tenu responsable du contenu de ces sites tiers.</p>
    <p>Les présentes mentions légales sont soumises au droit français. Tout litige relatif au site <span class="bold">Panier Local</span> sera soumis à la compétence exclusive des tribunaux français.</p>
</div>
</template>