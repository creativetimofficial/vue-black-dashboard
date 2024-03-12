
<template>
    <div class="card">
        <Tree 
        :value="nodes" 
        :filter="true" 
        filterMode="lenient" 
        class="w-full md:w-30rem"
        ></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

onMounted(async () => {
    try {
        const data = await NodeService.getTreeNodes();
        nodes.value = data;
    } catch (error){
        console.log('Error loading tree nodes', error);
    }
});

const expandedKeys = ref({});

const expandAll = () => {
    for (let node of nodes.value) {
        expandNode(node);
    }

    expandedKeys.value = { ...expandedKeys.value };
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    expandedKeys.value[node.key] = true;

    if (node.children && node.children.length) {
        for (let child of node.children) {
            expandNode(child);
        }
    }
};

</script>

<style scoped>
.card{
    width: 400px;
    height: 250px;
}

</style>
