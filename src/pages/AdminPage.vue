<template>
    <div class="main">
        <side-bar/>
        <!-- DASHBOARD -->
        <div class="admin">
            <nav-bar/>
            <div class="admin_content">
            </div>
        </div>
    </div>
</template>

<script>
//Connect components
import TreeView from '@/components/TreeView';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default {
    components: {
        TreeView, SideBar, NavBar
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
</style>