<template>
  <div>
    <a-table :data-source="users" :columns="columns" bordered>
      <template #bodyCell="{ column, record }">
        <span v-if="column.dataIndex === 'isActive'">
          <a-tag :color="!record.isActive ? 'volcano' : 'green'">
            {{ record.isActive ? "Active" : "Inactive" }}
          </a-tag>
        </span>
        <span
          v-else-if="
            column.dataIndex === 'createdAt' || column.dataIndex === 'updatedAt'
          "
        >
          {{ new Date(record[column.dataIndex]).toLocaleDateString() }}
        </span>
      </template>
    </a-table>
  </div>
</template>
<script setup lang="ts">
const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Status",
    dataIndex: "isActive",
    key: "isActive",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Updated At",
    dataIndex: "updatedAt",
    key: "updatedAt",
  },
];
// const counter = useCookie("authToken");
// counter.value = "10";

// ** Fetch data
usersStore.fetchUsers();
</script>
