<script setup lang="ts">
const props = defineProps<{
  id: number
  title: string
  date: string
  excerpt: string
}>()
</script>

<template>
  <article>
    <h3>
      <a href="#">{{ title }}</a>
    </h3>
    <div>
      <p>{{ date }}</p>
      <a href="#">Plus d'info</a>
    </div>
  </article>
</template>
