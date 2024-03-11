<template>
    <div class="main">
        <side-bar/>
        <div class="price">
            <nav-bar/>
            <div class="price_content">
                
            </div>
        </div>
    </div>
</template>

<script>


import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import TreeComponent from '@/components/TreeComponent';
import MapComponent from '@/components/MapComponent';

export default {
    components: {
        SideBar, NavBar, TreeComponent, MapComponent
    }
}
</script>

<style scoped>

.main{
    display: grid;
    grid-template-columns: 300px auto;
    background-color: #e4e4e4;
}

.price_content{
    background-color: #F3F3F3;
    width: 100%;
    height: 100vh;
    border-radius: 21px 0 0 0;
}




</style>