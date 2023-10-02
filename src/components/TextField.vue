<template>
  <div>
    <div class="select-box">
      <div v-if="title" class="flex-end">{{ title }}</div>
      <input
        class="roundinput"
        :value="modelValue"
        :type="type"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  modelValue: any;
  title?: string;
  type?: string;
}
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(defineProps<Props>(), {
  type: "text",
});
</script>
<style>
.select-box {
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 0;
}
</style>
