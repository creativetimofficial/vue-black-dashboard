
<template>
    <div class="card">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then(data => nodes.value = data);
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5;
    width: 400px;
}
</style>
