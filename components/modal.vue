<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

interface Props {
  isOpened: boolean;
}

const props = defineProps<Props>();
const target = ref(null);

const emit = defineEmits<{
  (e: "update:isOpened", isOpened: boolean): void;
}>();

const toggleModal = () => {
  emit("update:isOpened", !props.isOpened);
};

onClickOutside(target, (_event) => toggleModal());
</script>

<template>
  <teleport to="body">
    <div v-if="props.isOpened" ref="target">
      <div>modal</div>
      <div><slot name="header"></slot></div>
      <div><slot name="body"></slot></div>
      <div>
        <slot name="footer"></slot> <button @click="toggleModal">close</button>
      </div>
    </div>
  </teleport>
</template>
