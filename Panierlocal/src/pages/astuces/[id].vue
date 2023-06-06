<script setup lang="ts">
import { pb } from "@/backend"
import { oneAstuce } from "@/backend";
import { allAstuces } from "@/backend";
import astuceComposant from "@/components/astuceComposant.vue";


const props = defineProps<{id: string}>();
const astuces = await oneAstuce(props.id);
const listeAstuces = await allAstuces()

const urlImg1= pb.files.getUrl(astuces, astuces.imageAstuce)
</script>

<template>
    <astuceComposant v-bind="{...astuces}" />
</template>