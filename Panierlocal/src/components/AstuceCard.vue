<script setup lang="ts">
import { pb } from "@/backend"; 
import type { AstuceRecord, AstuceResponse, BaseSystemFields } from '@/pocketbase-types'; 
import { Astucerecords } from "@/backend"

    // bug MaisonResponse
    const props = defineProps<AstuceRecord & BaseSystemFields<null>>()
   
    const img0 = props.image?.[0]
    const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'
    console.log(urlImg0)
</script>

<template>
    
</template>