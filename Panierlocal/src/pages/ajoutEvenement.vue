<script setup lang="ts">
// import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import { event } from '@/data'
</script>

<template>

    <h1>Évènement</h1>

    <p>Les évènements écologiques proche de chez vous</p>

  <Hero title="Evenement" imgPath="#" imgAlt="/">
    
    <template #chapo>
      <p class="text-xl leading-normal lg:text-3xl"></p>    
    </template>
    
  </Hero>
  <div class="grille my-24">
    <Card  v-for="event in events" v-bind="event" :key="event.id"/>
  </div>
</template>