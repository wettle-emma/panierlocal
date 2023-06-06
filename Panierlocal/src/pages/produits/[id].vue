<script setup lang="ts">
import { pb } from "@/backend"
import { oneProduit } from "@/backend";
import { allProduits } from "@/backend";
import produitComposant from "@/components/produitComposant.vue";

const props = defineProps<{id: string}>();
const produits = await oneProduit(props.id);
const listeProduits = await allProduits()

const urlImg1= pb.files.getUrl(produits, produits.imageProduit)
</script>

<template>
    <produitComposant v-bind="{...produits}" />
</template>