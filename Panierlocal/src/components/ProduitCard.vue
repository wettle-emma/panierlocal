<script setup lang="ts">
import { pb } from "@/backend"; 
import type { ProduitsResponse } from '@/pocketbase-types'; 

const props: ProduitsResponse = defineProps<ProduitsResponse>()

const img0= props.photoProduit
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <div>
    <img :src="urlImg"/>
    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">{{ nameProduit }}</p>
    </div>

</template>