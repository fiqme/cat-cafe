<template>
    <body>
        
    
    <div class="flex">
        <div class="h-screen w-full">
            <l-map :use-global-leaflet="false" ref="map" v-model:zoom="zoom" :center="[3.615342, 107.695053]">
                <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                    name="OpenStreetMap"></l-tile-layer>
            </l-map>
            
        </div>
        <div class=" bg-white shadow-l-lg h-screen w-52">
                <p>Hi</p>
            </div>

    </div>
</body>
</template>
  
<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
            zoom: 6,
        };
    },
};
</script>
  
<style></style>