<template>
    <div class="treeLocation">
        <h3 class="treeLocation_title">{{ title }}</h3>
        <div class="treeLocation_tree">
            <tree-view/>
        </div>
    </div>
</template>

<script>
//Connect components
import TreeView from '@/components/TreeView';

export default {
    components: {
        TreeView
    }, 
    props:{
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.treeLocation_title{
    font-family: 'Soyuz Grotesk', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #0D0421;   
}

.treeLocation_tree{
    margin-left: 15px;
}

</style>