<template>
    <nav-bar/>
    <div class="admin">
        <side-bar/>
        <div class="admin_content">
        </div>
    </div>
</template>

<script>

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

.admin{
    display: flex;
}

.admin_content{
    background-color: #D6D6D6;
    width: 100%;
    height: 100vh;
    border-radius: 21px 0 0 0;
}
</style>