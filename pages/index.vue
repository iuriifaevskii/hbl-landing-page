<script lang="ts">
import { defineComponent } from "vue";

import { NuxtLink } from "#components";
import CheckBoxGroup from "../components/checkbox-group.vue";
import { ChackBoxValues } from "../types/checkbox";

export default defineComponent({
  components: {
    CheckBoxGroup,
  },
  data() {
    return {
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
    };
  },
  methods: {
    updateItems(items: ChackBoxValues[]) {
      this.items = items.map((el) => ({ ...el }));
    },
  },
});
</script>

<template>
  <div>
    <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
    <CheckBoxGroup :items="items" @updateItems="updateItems" />
    <div v-for="el in items">
      <div>{{ JSON.stringify(el) }}</div>
    </div>
  </div>
</template>
