<template>
  <header class="header" :style="color ? `background-color:${color}` : 'background-color:#f5f5f5'">
    <h1 class="header__title">{{ title }}</h1>
    <p v-if="subtitle" class="header__subtitle">{{ subtitle }}</p>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  color: { type: String, default: '' },
});
</script>

<style>
.header {
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.header__title {
  font-size: 24px;
  margin: 0;
}

.header__subtitle {
  font-size: 16px;
  color: #666;
  margin-top: 4px;
}
</style>
