<script setup lang="ts">
import { pb } from "@/backend"
import { oneRecette } from "@/backend";
import recetteComposant from "@/components/recetteComposant.vue";


const props = defineProps<{id: string}>();
const recettes = await oneRecette(props.id);
</script>

<template>
    <recetteComposant v-bind="{...recettes}" />
</template>