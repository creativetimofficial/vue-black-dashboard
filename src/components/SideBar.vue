<template>
    <div class="sideBg">
        <!-- LOGO -->
        <div class="side-logo">
            <a class="navBar-logo"><img src="@/icons/LogoLoginForm.png" alt="Avito">Avito</a>
        </div>
        <div class="side_search">
            <i class="pi pi-search"></i>
            <input type="text" placeholder="поиск..." class="side_search_input">
        </div>
        <aside class="side">
            <!-- SIDE MENU -->
            <div class="side_menu">
                <side-item :iconClass="'pi pi-map'" :sideText="'локации и категории'" :currentItem="isCurrentPage('/admin')"/>
                <side-item :iconClass="'pi pi-dollar'" :sideText="'управление ценами'" :currentItem="isCurrentPage('/storage')"/>
                <side-item :iconClass="'pi pi-chart-bar'" :sideText="'ценовая матрица'" :currentItem="isCurrentPage('/storage')"/>
                <side-item :iconClass="'pi pi-book'" :sideText="'аналитика и отчеты'" :currentItem="isCurrentPage('/storage')"/>
                <side-item :iconClass="'pi pi-moon'" :sideText="'темная тема'" :currentItem="isCurrentPage('/storage')"/>
                <side-item :iconClass="'pi pi-bars'" :sideText="'свернуть меню'" :currentItem="isCurrentPage('/storage')"/>
            </div>
            <Button label="← Выход" @click="$router.push('/')" class="btn_exit"/>
        </aside>
    </div>
</template>


<script>
//Connect components
import SideItem from "@/components/SideItem";
import { ref } from 'vue';

const value = ref(null);
export default {
    components: {
        SideItem
    },
    methods: {
        // Check current page
        isCurrentPage(targetUrl) {
            const currentPageUrl = window.location.pathname;
            return currentPageUrl === targetUrl;
        }
    }
}

</script>


<style scoped>

.sideBg{
    background-color: #e4e4e4;
}

.side_search{
    display: flex;
    gap: 10px;
    align-items: center;
    text-align: center;
    margin: 25px 0 0 59px;
}

.side_search_input{
    font-family: 'Soyuz Grotesk', sans-serif;
    font-weight: 700;
    height: 26px;
    width: 195px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid #C6C6C6;
}

.side{
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 100vh;
}

.side-logo{
    margin: 14px 0 0 60px;
}

.side-logo a{
    font-size: 36px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
}

.side-logo img{
    height: 35px;
}

.side_menu{
    margin: 15px 0;
}

.btn_exit{
    border-radius: 15px;
    width: 121px;
    margin: 0 50px;
    position: fixed;
    bottom: 40px;
}

</style>