<template>
  <a-layout-header
    class="flex items-center justify-between transition-all [transition-property:all,background] [transition-duration:0.4s,0s] bg-white dark:bg-[#141414] !pr-4"
  >
    <div class="logo" />
    <a-select
      :value="locale"
      class="h-[32px]"
      style="width: 140px"
      @change="
        (value: string) => setLocale(value)
      "
    >
      <a-select-option
        v-for="i in locales"
        :key="i.code"
        :value="i.code"
        :label="i.name"
      >
        <span role="img" :aria-label="i.name">{{ i.icon }}</span>
        &nbsp;&nbsp;{{ i.name }}
      </a-select-option>
    </a-select>
  </a-layout-header>
</template>
<script setup lang="ts">
const { setLocale, locale, locales } = useI18n();
</script>
<style scoped>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
</style>
