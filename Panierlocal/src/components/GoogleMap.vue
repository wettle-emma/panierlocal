<script setup lang="ts">
   import { GoogleMap, Marker } from 'vue3-google-map'

   const center = { lat: 48.862725, lng: 2.287592 }
   const FemredeMaé = { lat: 45.4187575, lng: 4.4196485 }
   const FermeSaulue = { lat: 43.223923, lng: -0.630941 }
   const lieux3 = { lat: 45.04366, lng: 3.88523 }
   const lieux4 = { lat: 44.86246, lng: 5.66926 }
   const lieux5 = { lat: 44.25983, lng: 5.27339 }
   const lieux6 = { lat: 48.048122, lng: 6.842734 }
   const lieux7 = { lat: 46.78736, lng: 6.30464 }
   </script>
   
<template>
    <GoogleMap
    api-key="AIzaSyCbgIkoWSb_T2QWihzz82l6d1gwbxuRjHQ"
    style="height: 600px"
    :center="center"
    :zoom="15"
    class="mt-16 lg:mx-40">
    <Marker :options="{ position: center }" />
    <Marker :options="{ position: FemredeMaé}"/>
    <Marker :options="{ position: FermeSaulue }"/>
    <Marker :options="{ position: lieux3 }"/>
    <Marker :options="{ position: lieux4 }"/>
    <Marker :options="{ position: lieux5 }"/>
    <Marker :options="{ position: lieux6 }"/>
    <Marker :options="{ position: lieux7 }"/>
    </GoogleMap>

    <div>
    </div>

   </template>