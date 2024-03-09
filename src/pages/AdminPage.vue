<template>
    <div>
        <tree-view/>
        <Button label="← Выход" @click="$router.push('/')" class="btn_exit"/>
    </div>
</template>

<script>

import TreeView from '@/components/TreeView';

export default {
    components: {
        TreeView
    }
}
</script>

<style scoped>
.btn_exit{
    border-radius: 15px;
    margin: 15px;
}
</style>