<template>
    <div class="map_component">
    <div class="line-title">
     <h3 class="map_component_title">{{ title }}<sup class="map_sup">10 км</sup></h3><hr>
    </div>
    <div id="map" class="map" ref="mapContainer"></div>
</div>

</template>

<script>
import L from 'leaflet';

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            map: null,
            tileLayer: null,
            layers: [],
        };
    },
    mounted() {
        this.initMap();
        this.initLayers();
    },
    
    methods: {
        initMap() {
            this.map = L.map(this.$refs.mapContainer).setView([38.63, -90.23], 12);

            this.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                    maxZoom: 18,
                    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://carto.com/attribution">CARTO</a>',
                }
            );

            this.tileLayer.addTo(this.map);
        },
        initLayers() {
            
        },
    },
};
</script>

<style scoped>
.map_component_title{
    font-size: 26px;
}
.map_component{
    position: relative;
}
.map_sup{
    color:#C6C6C6;
    font-weight: 200;
    font-size: 16px;
    line-height: 19.5px;
    font-family: "Montserrat" sans-serif;
}
.map{
    height:300px;
    width:800px;
    border-radius: 16px;
    border: 1px solid black; 

}


hr{
    width: 300px;
    height: 0.5px;
    margin-top: 10px;
    background-color: black;
}
.line-title{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
