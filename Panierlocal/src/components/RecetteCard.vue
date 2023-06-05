<script setup lang="ts">
import { pb } from "@/backend"; 
import type { RecetteRecord, RecetteResponse, BaseSystemFields } from '@/pocketbase-types'; 

const props: RecetteResponse = defineProps<RecetteResponse>()

const img0= props.photoRecette
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <div>
    <img :src="urlImg"/>
    <p class="font-dmSerifDisplay italic text-center text-lg">{{ nomArtiste }}</p>
    </div>

</template>