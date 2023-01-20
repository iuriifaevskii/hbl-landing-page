<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckBox",
  props: {
    isChecked: { type: Boolean, required: true },
    title: { type: String, required: true },
  },
  emits: ["updateChecked"],
  methods: {
    onChange(event: Event) {
      this.checkedState = (event.target as HTMLInputElement).checked;

      this.$emit("updateChecked", this.checkedState);
    },
  },
  data() {
    return {
      checkedState: this.isChecked,
    };
  },
});
</script>

<template>
  <div>
    <input
      type="checkbox"
      @change="onChange"
      :id="title"
      :name="title"
      :checked="checkedState"
    />
    {{ title }}
  </div>
</template>

<style></style>
