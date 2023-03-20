<template>
    <body>

        <div>
            <div class="h-screen w-full">
                <l-map :use-global-leaflet="false" ref="map" v-model:zoom="zoom" :center="center">
                    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                        name="OpenStreetMap"></l-tile-layer>
                        <l-marker :lat-lng="markerLatLng" ></l-marker>
                        <l-marker :lat-lng="markerLatLng2" ></l-marker>
                </l-map>

            </div>
        </div>
    </body>
</template>
  
<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            zoom: 6,
            center: [3.615342, 107.695053],
            markerLatLng: [3.1478, 101.6953],
            markerLatLng2: [3.0333, 101.45],
        };
    },
    async beforeMount() {
        
    }
};
</script>
  
<style></style>