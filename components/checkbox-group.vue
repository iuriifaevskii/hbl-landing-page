<script lang="ts" setup>
import { reactive, defineProps, defineEmits } from "vue";
import CheckBox from "./checkbox.vue";
import { ChackBoxValues } from "../types/checkbox";

interface Props {
  items: ChackBoxValues[];
}

interface StateData {
  data: ChackBoxValues[];
}

const props = defineProps<Props>();

const initUpdatedData = props.items.map((el) => Object.assign({}, el));

const updatedData: StateData = reactive({
  data: initUpdatedData,
});

const emit = defineEmits<{
  (e: "updateItems", items: ChackBoxValues[]): void;
}>();

const updateChecked = (payload: ChackBoxValues) => {
  updatedData.data = updatedData.data.map((item) => {
    if (item.value === payload.value && item.checked !== payload.checked) {
      return { ...item, checked: payload.checked };
    }
    return { ...item };
  });
  emit("updateItems", updatedData.data);
};
</script>

<template>
  <div>
    <div v-for="item in updatedData.data" :key="item.value">
      <CheckBox :values="item" @updateChecked="updateChecked" />
      <hr />
    </div>
  </div>
</template>
