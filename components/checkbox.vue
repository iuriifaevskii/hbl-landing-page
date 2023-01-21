<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { ChackBoxValues } from "../types/checkbox";

export default defineComponent({
  name: "CheckBox",
  props: {
    values: {
      type: Object as PropType<ChackBoxValues>,
      required: true,
    },
  },
  emits: ["updateChecked"],
  methods: {
    onChange(event: Event) {
      this.checkedState = (event.target as HTMLInputElement).checked;

      this.$emit("updateChecked", {
        checked: this.checkedState,
        value: this.values.value,
        title: this.values.title,
      });
    },
  },
  data() {
    return {
      checkedState: this.values.checked,
    };
  },
});
</script>

<template>
  <div>
    <input
      type="checkbox"
      @change="onChange"
      :id="values.title"
      :name="values.title"
      :checked="checkedState"
    />
    {{ values.title }}
  </div>
</template>

<style></style>
