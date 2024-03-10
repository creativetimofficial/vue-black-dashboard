<template>
    <div class="map_component">
        <h3 class="map_component_title">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.map_component_title{
    font-family: 'Soyuz Grotesk', sans-serif;
    font-weight: 700;
    font-size: 26px;
}
</style>