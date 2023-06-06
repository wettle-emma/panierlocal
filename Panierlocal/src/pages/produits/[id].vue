<script setup lang="ts">
import { pb } from "@/backend"
import { oneProduit } from "@/backend";
import produitComposant from "@/components/produitComposant.vue";

const props = defineProps<{id: string}>();
const produits = await oneProduit(props.id);
</script>

<template>
    <produitComposant v-bind="{...produits}" />
</template>