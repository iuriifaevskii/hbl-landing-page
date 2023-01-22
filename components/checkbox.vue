<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { ChackBoxValues } from "../types/checkbox";
import type { Ref } from "vue";

interface Props {
  values: ChackBoxValues;
}

const props = defineProps<Props>();

const checkedState: Ref<boolean> = ref(props.values.checked);

const emit = defineEmits<{
  (e: "updateChecked", values: ChackBoxValues): void;
}>();

const onChange = (event: Event): void => {
  checkedState.value = (event.target as HTMLInputElement).checked;

  emit("updateChecked", {
    checked: checkedState.value,
    value: props.values.value,
    title: props.values.title,
  });
};
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
