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
                        <l-popup>
                            <div class="">
                                <p class="font-bold text-lg">{{ city }}</p>
                            </div>
                            <div class="grid grid-cols-2 -mt-5">
                                <div>State:</div>
                                <div>{{ admin_name }}</div>
                                <div>Country Origin:</div>
                                <div>{{ country }}</div>
                                <div>Total Population:</div>
                                <div>{{ population }}</div>
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


</script>
  
<style></style>