<template>
    <div class="matrix">
        <div class="matrix_title">
            <h3>Ценовая матрица</h3>
            <div v-for="title in titlesTable" :key="title.id">
                <tr>
                    <th> {{ title }}</th>
                </tr>
            </div>
        </div>
    </div>
</template>

<script>
import MatrixItem from '@/components/MatrixItem'

export default {
    components: {MatrixItem},
    props: {
        titlesTable: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .matrix{
        padding: 55px 75px;
    }
</style>