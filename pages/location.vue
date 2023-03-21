<template>
    <body>

        <div class="grid grid-cols-12">
            <div class="height-map w-full col-span-9">
                <p v-for="place in places">{{ place.city }}</p>

                <l-map :use-global-leaflet="false" ref="map" v-model:zoom="zoom" :center="center">
                    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                        name="OpenStreetMap"></l-tile-layer>
                    <!-- <l-marker :lat-lng="places.places"></l-marker>  -->
                    <l-marker v-for="{ lat, lng, city, country, admin_name, population } in places.data" :key="city"
                        :lat-lng="[lat, lng]">
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
                                <div class="grid place-content-center">
                                    {{ admin_name }}
                                    <br>{{ country }}
                                    <br>{{ population }}
                                </div>
                            </div>
                        </l-popup>
                    </l-marker>
                    <!-- <l-marker :lat-lng="markerLatLng"></l-marker> -->

                </l-map>

            </div>
            <div class="bg-white col-span-3">
                <div v-for="{city} in places.data" class="my-5 bg-yellow-500">
                    <div class="pl-5 text-lg flex">
                        <svg class="w-8" fill="none" stroke="#0D47A1" stroke-width="1.5" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                        <p class="font-bold">{{ city }}</p>
                    </div>
                </div>
                <div class="border border-b-gray-100 mt-5"></div>
                <div class="bg-yellow-500">
                    <div class="pl-5 pt-5 text-lg flex">
                        <svg class="w-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                        <p>Place</p>
                    </div>
                    <div class="border border-b-gray-100"></div>
                </div>
            </div>
        </div>
    </body>
</template>
  
<!-- <script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import data from '@/assets/data/my.json'

export default {
    setup() {
        console.log('masuk sini dulu')
        this.places = data
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            places: [],
            zoom: 6,
            center: [3.615342, 107.695053],
            markerLatLng: [3.1478, 101.6953],
            markerLatLng2: [3.0333, 101.45],
        };
    },
};
</script> -->

<script setup>
import { ref } from 'vue';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import data from '@/assets/data/my.json';

const places = ref(data)
const zoom = ref(6)
const center = ref([3.615342, 107.695053]);
const markerLatLng = ref([3.1478, 101.6953]);

console.log(places.value.data)

definePageMeta({
    layout: 'location'
})

</script>
  
<style>
.popup-title {
    margin: 0 !important;
}

.height-map {
    height: calc(100vh - 48px);
}
</style>