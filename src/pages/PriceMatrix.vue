<template>
    <div class="main">
        <side-bar/>
        <div class="price">
            <nav-bar/>
            <div class="price_content">
                <matrix-prime />
            </div>
        </div>
    </div>
</template>

<script>

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import MatrixPrime from '@/components/MatrixPrime';

export default {
    components: {
        SideBar, NavBar, MatrixPrime
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
    border-radius: 21px 0 0 0;
}

</style>