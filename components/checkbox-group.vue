<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import CheckBox from "./checkbox.vue";
import { ChackBoxValues } from "../types/checkbox";

export default defineComponent({
  components: {
    CheckBox,
  },
  props: {
    items: {
      type: Object as PropType<ChackBoxValues[]>,
      required: true,
    },
  },
  data() {
    return {
      updatedData: this.items.map((el) => Object.assign({}, el)),
    };
  },
  emits: ["updateItems"],
  methods: {
    updateChecked(payload: { checked: boolean; value: string; title: string }) {
      const elems = this.updatedData.map((item) => {
        if (item.value === payload.value && item.checked !== payload.checked) {
          return { ...item, checked: payload.checked };
        }
        return { ...item };
      });
      this.$emit("updateItems", elems);
    },
  },
});
</script>

<template>
  <div>
    <div v-for="item in updatedData" :key="item.value">
      <CheckBox :values="item" @updateChecked="updateChecked" />
      <hr />
    </div>
  </div>
</template>
