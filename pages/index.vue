<script lang="ts" setup>
import { reactive, Ref, ref } from "vue";

import { NuxtLink } from "#components";
import CheckBoxGroup from "../components/checkbox-group.vue";
import Counter from "../components/counter.vue";
import Modal from "../components/modal.vue";

import { ChackBoxValues } from "../types/checkbox";
import { useModal } from "../use/useModal";

interface StateData {
  data: ChackBoxValues[];
}

const state: StateData = reactive({
  data: [
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
  state.data = items.map((el) => ({ ...el }));
};

const { isOpened, setIsOpened } = useModal();
</script>

<template>
  <div>
    <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
    <CheckBoxGroup :items="state.data" @updateItems="updateItems" />
    <div v-for="el in state.data">
      <div>{{ JSON.stringify(el) }}</div>
    </div>
    <Counter />
    <button @click="setIsOpened(true)">Open Modal</button>
    <Modal :isOpened="isOpened" @setIsOpened="setIsOpened">
      <template v-slot:header>Header</template>
      <template v-slot:body>Body</template>
      <template v-slot:footer>Footer</template>
    </Modal>
  </div>
</template>
