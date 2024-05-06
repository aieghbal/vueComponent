<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

const data = [
    [1, 2],
    [3, 4],
];
</script>

<template>
    <DataTable :data="data" class="display">
        <thead>
        <tr>
            <th>A</th>
            <th>B</th>
        </tr>
        </thead>
    </DataTable>
</template>
