<template>
    <body>

        <div class="grid grid-cols-12">
            <div class="height-map w-full col-span-9">
                <p v-for="place in places">{{ place.city }}</p>

                <l-map :use-global-leaflet="false" ref="map" v-model:zoom="zoom" :center="center">
                    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                        name="OpenStreetMap"></l-tile-layer>
                    <l-marker v-for="{ lat, lng, city, country, admin_name, population } in places.data" :key="city"
                        :lat-lng="[lat, lng]" >
                        <l-popup class="w-52">
                            <div class="bg-blue-900 rounded-lg text-white p-2">
                                <p class="grid place-items-center popup-title">
                                    <span class="font-bold text-xl">{{ city }}</span>
                                    ({{ lat }},{{ lng }})
                                </p>

                            </div>
                            <div class="grid grid-cols-2 mt-1">
                                <div class="">
                                    State:
                                    <br>Country Origin:
                                    <br>Total Population:
                                </div>
                                <div class="relative">
                                    <div class="absolute top-0 right-0 pr-2">
                                    {{ admin_name }}
                                    <br>{{ country }}
                                    <br>{{ population }}
                                    </div>
                                </div>
                            </div>
                        </l-popup>
                    </l-marker>
                </l-map>
            </div>

            <!-- sidebar -->
            <div class="bg-white col-span-3 border border-t-gray-300 height-map overflow-auto">
                <div v-for="{lat, lng, city} in places.data" class="my-5 hover:cursor-pointer hover:opacity-50" @click="onPlaceClick(lat, lng)">
                    <div class="pl-3 text-sm text-black flex gap-2">
                        <svg class="w-5" fill="none" stroke="red" stroke-width="1.5" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                        <p class="font-semibold">{{ city }}</p>
                    </div>
                    <div class="border border-b-gray-100 mt-4"></div>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>
import { ref } from 'vue';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup} from "@vue-leaflet/vue-leaflet";
import data from '@/assets/data/my.json';

const places = ref(data)
const zoom = ref(6)
const center = ref([3.615342, 107.695053]);
// const markerLatLng = ref([3.1478, 101.6953]);/

// console.log(places.value.data)

definePageMeta({
    layout: 'location'
})

// method to zoom upon clicking a place in sidebar
function onPlaceClick(lat, lng){
    const coordinates = [lat, lng];
    center.value = coordinates;
    console.log(coordinates);
    zoom.value = 10;
    
}

</script>
  
<style>
.popup-title {
    margin: 0 !important;
}

.height-map {
    height: calc(100vh - 48px);
}
</style>