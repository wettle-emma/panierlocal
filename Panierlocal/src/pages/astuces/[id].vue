<script setup lang="ts">
import { pb } from "@/backend"
import { oneAstuce } from "@/backend";
import astuceComposant from "@/components/astuceComposant.vue";


const props = defineProps<{id: string}>();
const astuces = await oneAstuce(props.id);
</script>

<template>
    <astuceComposant v-bind="{...astuces}" />
</template>