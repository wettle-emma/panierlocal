<script setup lang="ts">
import { pb } from "@/backend"; 
import type { RecettesRecord, RecettesResponse, BaseSystemFields } from '@/pocketbase-types'; 

const props: RecettesResponse = defineProps<RecettesResponse>()

const img0= props.photoRecette
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <div>
    <img :src="urlImg"/>
    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">{{ nameRecette }}</p>
    </div>

</template>