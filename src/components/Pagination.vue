<template>
  <div class="flex-row">
    <button
      id="previous-page"
      @click="$emit('update:modelValue', modelValue - 1)"
      :disabled="modelValue <= 1 || loading"
    >
      {{ "<" }}
    </button>
    <div class="page">
      <span> {{ modelValue }} of {{ length }} </span>
    </div>
    <button
      id="next-page"
      @click="$emit('update:modelValue', modelValue + 1)"
      :disabled="modelValue >= length || loading"
    >
      {{ ">" }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: number;
  length: number;
  loading?: boolean;
}
const props = defineProps<IProps>();
</script>

<style scoped>
.flex-row {
  margin-top: 2rem;
  display: flex;
  direction: row;
  justify-content: flex-end;
}

.page {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
</style>
