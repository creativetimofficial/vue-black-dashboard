<template>
    
    <aside class="side">
        <hr class="side-line">
        <div class="sideMenu">
            <side-item :iconClass="'pi pi-home'" :sideText="'Главная'" :currentItem="isCurrentPage('/admin')"/>
            <side-item :iconClass="'pi pi-briefcase'" :sideText="'Хранилище'" :currentItem="isCurrentPage('/storage')"/>
        </div>
        <Button label="← Выход" @click="$router.push('/')" class="btn_exit"/>
    </aside>
 
</template>


<script>

import SideItem from "@/components/SideItem";

export default {
    components: {
        SideItem
    },
    methods: {
        isCurrentPage(targetUrl) {
            const currentPageUrl = window.location.pathname;
            return currentPageUrl === targetUrl;
        }
    }
}

</script>


<style scoped>

.side{
    width: 300px;
}

.side-line{
    margin: 0 auto;
    width: 75%;
}

.sideMenu{
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    align-content: center;
    width: 121px;
    gap: 25px;
}

.btn_exit{
    border-radius: 15px;
    width: 121px;
    margin: 0 50px;
}

</style>