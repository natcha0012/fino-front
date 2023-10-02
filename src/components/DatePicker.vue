<template>
  <div>
    <div class="select-box">
      <div v-if="title" class="flex-end">{{ title }}</div>
      <input
        class="roundinput"
        :value="modelValue"
        type="date"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
    </div>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  modelValue?: string;
  title?: string;
}
const props = defineProps<IProps>();
const emit = defineEmits(["update:modelValue"]);
</script>
<style>
.select-box {
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 0;
}
</style>
