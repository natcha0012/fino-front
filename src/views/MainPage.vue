<template>
  <div class="flex-row">
    <!-- <TextField v-model="startDate" title="start date"></TextField> -->
    <DatePicker v-model="startDate" title="start date"></DatePicker>
    <DatePicker v-model="endDate" title="end date"></DatePicker>
    <!-- <TextField v-model="endDate" title="end date"></TextField> -->
    <div class="item-end">
      <button @click="getFunds">ค้นหา</button>
    </div>
  </div>
  <div class="container">
    <h2>funds</h2>
    <table>
      <thead>
        <tr>
          <th v-for="header in headerKeys" class="px-2 py-1">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in funds">
          <td class="text-center rank">{{ index + 1 }}</td>
          <td class="text-center">{{ item.thailand_fund_code ?? "" }}</td>
          <td class="text-center">{{ item.nav_date ?? "" }}</td>
          <td class="text-center">{{ item.nav_return ?? "" }}</td>
          <td class="text-center">{{ item.nav ?? "" }}</td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :length="paginator.size"
      v-model="paginator.page"
      @update:modelValue="getFunds"
    ></Pagination>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { Text, onMounted, ref } from "vue";
import TextField from "@/components/TextField.vue";
import Pagination from "@/components/Pagination.vue";
import DatePicker from "@/components/DatePicker.vue";
import type { FundResp, GetFundsReq } from "@/types/fund";
import type { SelectType } from "../types/common";

const funds = ref<FundResp[]>([]);
const paginator = ref({
  page: 1,
  size: 1,
});
const range: SelectType[] = [
  { value: "a", text: "1 day" },
  { value: "b", text: "1 week" },
  { value: "c", text: "1 month" },
  { value: "d", text: "1 year" },
];
const startDate = ref("2021-09-01");
const endDate = ref("");
const headerKeys = [
  "อันดับของกองทุน",
  "ชื่อกองทุน",
  "เวลาที่ข้อมูลถูกอัพเดต",
  "ผลตอบแทน",
  "ราคา",
];

onMounted(async () => {
  await getFunds();
});

const getFunds = async () => {
  const req: GetFundsReq = {
    pagination: { page: paginator.value.page, rowPerPage: 10 },
    startDate: startDate.value ?? undefined,
    endDate: endDate.value ?? undefined,
  };
  const { data } = await axios.post<{
    totalItems: number;
    data: FundResp[];
  }>("http://localhost:3000", req);
  funds.value = data.data;
  paginator.value.size = Math.ceil(data.totalItems / 10);
};
</script>

<style>
.select {
  width: 200px;
  margin-bottom: 2rem;
}

table {
  width: 100%;
}

thead {
  background-color: rgb(228, 224, 224);
}

.text-center {
  text-align: center;
}

.rank {
  width: 10px;
}

.item-end {
  display: flex;
  align-items: end;
  height: 60px;
}

.container {
  padding: 2rem;
}
</style>
