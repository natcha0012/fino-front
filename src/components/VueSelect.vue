<template>
  <div class="select-box">
    <div class="flex-end">choose period</div>

    <select class="roundinput" v-model="selected" id="cars">
      <option :value="undefined" disabled selected>
        Please select an option
      </option>
      <option v-for="item in items" :key="item.value" :value="item.value">
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { SelectType } from "@/types/common";
import { ref } from "vue";

interface IProps {
  items: SelectType[];
}
const props = defineProps<IProps>();
const selected = ref(null);
</script>
<style>
.select-box {
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.flex-end {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
