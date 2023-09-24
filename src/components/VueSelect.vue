<template>
  <div class="selectbox">
    <div class="mr-2">choose period:</div>

    <select class="roundinput" v-model="selected" id="cars">
      <option :value="undefined" disabled selected>
        Please select an option
      </option>
      <option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: "a", text: "1 day" },
        { value: "b", text: "1 week" },
        { value: "c", text: "1 month" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  .selectbox {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }

  .roundinput {
    text-align: left;
    margin-left: 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 0.5;
    margin-top: 1rem;
  }
}
</style>
