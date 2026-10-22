<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{ items: string[] }>();
const query = ref("");
const filtered = computed(() => props.items.filter((i) => i.includes(query.value)));
</script>

<template>
  <div class="list">
    <input v-model.trim="query" placeholder="Filter" @keyup.esc="query = ''" />
    <ul v-if="filtered.length">
      <li v-for="(item, i) in filtered" :key="item" :class="{ odd: i % 2 }">{{ item }}</li>
    </ul>
    <p v-else>No matches for “{{ query }}”</p>
  </div>
</template>

<style scoped>
.list .odd { background: #f6f1e7; }
</style>
