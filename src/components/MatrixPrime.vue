
<template>
    <div class="matrixTable">
        <h3 class="matrixTable_title">Ценовая матрица</h3>
        <DataTable 
        v-model:filters="filters" :value="customers" paginator showGridlines :rows="10" dataKey="id"
        filterDisplay="menu" :loading="loading" 
        :globalFilterFields="['location', 'category', 'price', 'total price']"
        class="matrixTable_table"
        >
            <template #header>
                <div class="matrixTable_header">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="поиск..." style="margin-left: 15px;"/>
                    </IconField>
                </div>
            </template>
            <template #empty> Не удалось найти данные! </template>
            <template #loading> Загрузка данных. Пожалуйста, подождите! </template>
            
            <!-- Header Table -->

            <Column field="name" header="Локация" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.country.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Поиск по названию" />
                </template>
            </Column>

            <Column field="name" header="Категория" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Поиск по названию" />
                </template>
            </Column>

            <Column header="Цена" filterField="balance" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="RUB" locale="ru-RU" />
                </template>
            </Column>

            <Column header="Итоговая цена" filterField="balance" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="RUB" locale="ru-RU" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

export default {
    data() {
        return {
            customers: null,
            filters: null,
            loading: true
        };
    },
    created() {
        this.initFilters();
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = this.getCustomers(data);
            this.loading = false;
        });
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-EN', { style: 'currency', currency: 'USD' });
        },
        clearFilter() {
            this.initFilters();
        },
        initFilters() {
            this.filters = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },

            };
        },
        getCustomers(data) {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        },
    }
};
</script>

<style scoped>
.matrixTable{
    padding: 55px 75px;
    width: 77vw;
}

.matrixTable_header{
    display: flex;
    justify-content: space-between;
}

.matrixTable_title{
    font-weight: 500;
    font-size: 48px;
}

</style>