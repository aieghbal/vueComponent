<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-responsive';

DataTable.use(DataTablesCore);

const columns = [
    { data: 'id' },
    { data: 'name' },
    { data: 'username' },
    { data: 'email' },
    {data: 'action', name: 'action', orderable: false, searchable: false,
        mRender: function (data, type, full){
            var deleteButtumn = '<a href="#" class="btn btn-sm btn-danger deleteUser"  data-id="'+full['id']+'" onclick="jqueryConfirm(this);">Delete</a>';

            return deleteButtumn;
        }
    },
];
</script>

<template>
    <DataTable
        :columns="columns"
        :options="options"
        ajax="/api/users"
        class="display nowrap"
    >
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        </thead>
    </DataTable>
</template>

<style>
@import 'datatables.net-dt';
</style>
