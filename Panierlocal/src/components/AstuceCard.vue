<script setup lang="ts">
import { pb } from '@/backend'
import type { AstucesResponse } from '@/pocketbase-types'; 

const props: AstucesResponse = defineProps<AstucesResponse>()

const img0= props.photoAstuce
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <div>
    <img :src="urlImg"/>
    <p class="text-darkGreen font-inter font-light uppercase text-base ml-4 mt-1">{{ nameAstuce }}</p>
    </div>

</template>