<script setup lang="ts">
   import { GoogleMap, Marker } from 'vue3-google-map'

   const center = { lat: 48.862725, lng: 2.287592 }
   const FemredeMaé = { lat: 45.4187575, lng: 4.4196485 }
   const FermeSaulue = { lat: 43.223923, lng: -0.630941 }
   const FermeMougin = { lat: 43.599998, lng: 7 }
   const FermeLaLaurelette = { lat: 47.581137, lng: 7.122418 }
   const FermeBisontineBesancon = { lat: 47.275185, lng: 6.028708 }
   const FermeAPalente = { lat: 47.266936, lng: 6.049898 }
   const FermeDeBray = { lat: 46.291210, lng: 5.085341 }
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
    <Marker :options="{ position: FermeMougin }"/>
    <Marker :options="{ position: FermeLaLaurelette }"/>
    <Marker :options="{ position: FermeBisontineBesancon }"/>
    <Marker :options="{ position: FermeAPalente }"/>
    <Marker :options="{ position: FermeDeBray }"/>
    </GoogleMap>

    <div>
    </div>

   </template>

   