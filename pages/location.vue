<template>
    <body>

        <div>
            <div class="h-screen w-full">
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
.popup-title{
    margin: 0 !important;
}
</style>