<template>
    <aside class="side">
        <hr class="side-line">
        <div class="sideMenu">
            <side-item :iconClass="'pi pi-home'" :sideText="'Главная'"/>
            <side-item :iconClass="'pi pi-briefcase'" :sideText="'Хранилище'"/>
        </div>
        <Button label="← Выход" @click="$router.push('/')" class="btn_exit"/>
    </aside>
</template>


<script>

import SideItem from "@/components/SideItem";

export default {
    components: {
        SideItem
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
    width: 121px;
    gap: 25px;
    margin: 15px auto;
}

.btn_exit{
    border-radius: 15px;
    width: 121px;
    margin: 0 50px;
}

</style>