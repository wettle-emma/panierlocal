<script setup lang="ts">
import Back from '@/components/icons/28px/Back.vue';
</script>

<template>
    <a class="pt-24 flex ml-4" href="javascript:history.back()">
        <back />
        <p class="font-inter font-lg">Retour</p>
        </a>

    <h1 class="font-montserrat font-medium text-lg pt-28 lg:ml-6">Bernard Meunier</h1>
    <div class="h-px w-auto bg-grey mx-4 "></div>
    <p class="text-center mx-auto font-inter font-medium text-base text-grey mt-40">24 avril 12:48</p>
    <div class="flex flex-col mt-2 lg:w-1/2 lg:items-center lg:justify-center">
        <div class="w-1/2 h-24 mb-4 bg-midGreen rounded-xl ml-[180px] lg:ml-[1300px]"></div>
        <div class="w-1/2 h-24 mb-4 bg-grey rounded-xl ml-3"></div>
        <div class="w-1/2 h-24 mb-4 bg-midGreen rounded-xl ml-[1300px]"></div>
        <div class="w-3/4 h-7 mt-3 mb-6 rounded-x6l border-2 border-darkGrey mx-auto lg:ml-[450px]"><p class="text-darkGrey font-inter font-medium text-base py-1 pl-2">Message</p></div>
    </div>
</template>