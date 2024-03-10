<template>
    <div class="main">
        <side-bar/>
        <!-- DASHBOARD -->
        <div class="admin">
            <nav-bar/>
            <div class="admin_content">
                <div class="admin_content_wrapper">
                    <div class="admin_content_left">
                        <tree-component :title="'выберите локацию'"/>
                        <map-component :title="'радиус поиска'"/>
                    </div>
                    <div class="admin_content_right">
                        <tree-component :title="'выберите категорию'"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//Connect components
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

.admin_content{
    background-color: #F3F3F3;
    width: 100%;
    height: 100vh;
    border-radius: 21px 0 0 0;
}

.admin_content_wrapper{
    padding: 30px 50px;
    display: grid;
    grid-template-columns: 50% 50%;
}

.admin_content_left{
    display: flex;
    flex-direction: column;
    gap: 35px;
}


</style>