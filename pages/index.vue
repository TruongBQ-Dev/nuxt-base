<template>
  <div>
    {{ $t("welcome") }}
    <button @click="setLocale('vn')">VN</button>
    <button @click="setLocale('en')">EN</button>
    <button @click="setLocale('ja')">JP</button>
  </div>
</template>
<script setup lang="ts">
const { setLocale } = useI18n();

const cartsStore = useCartsStore();

const counter = useCookie("authToken");
counter.value = "10";

// Fetch data
cartsStore.fetchCarts({
  limit: 10,
});

// Post data
cartsStore.createCarts({
  userId: 5,
  date: "2024-12-23",
  products: [
    { productId: 5, quantity: 1 },
    { productId: 1, quantity: 5 },
  ],
});

// Put data
cartsStore.updateCarts({
  userId: 5,
  date: "2024-12-24",
  products: [],
});

// Delete data
cartsStore.deleteCarts(11);
</script>
