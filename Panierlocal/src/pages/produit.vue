<script setup lang="ts">
import { Collections, type ProduitResponse } from '@/pocketbase-types';
import ProduitCardVue from '@/components/ProduitCard.vue';

import { Produitrecords } from '@/backend'

const produit = await Produitrecords()

</script>

<template>
  <main>
    <ProduitCard v-bind="produit[0]" />/>
  </main>
</template>