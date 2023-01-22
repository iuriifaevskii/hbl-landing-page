<script lang="ts" setup>
import { reactive } from "vue";

import { NuxtLink } from "#components";
import CheckBoxGroup from "../components/checkbox-group.vue";
import Counter from "../components/counter.vue";
import { ChackBoxValues } from "../types/checkbox";

interface StateData {
  items: ChackBoxValues[];
}

const state: StateData = reactive({
  items: [
    {
      checked: false,
      value: "item---1",
      title: "item 1",
    },
    {
      checked: false,
      value: "item---2",
      title: "item 2",
    },
    {
      checked: true,
      value: "item---3",
      title: "item 3",
    },
    {
      checked: true,
      value: "item---4",
      title: "item 4",
    },
  ],
});

const updateItems = (items: ChackBoxValues[]): void => {
  state.items = items.map((el) => ({ ...el }));
};
</script>

<template>
  <div>
    <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
    <CheckBoxGroup :items="state.items" @updateItems="updateItems" />
    <div v-for="el in state.items">
      <div>{{ JSON.stringify(el) }}</div>
    </div>
    <Counter />
  </div>
</template>
