<script setup>
import { ref } from "vue";

const count = ref(0);
const counterTitle = ref("My counter");

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <div>
    <h1>{{ counterTitle }}</h1>
    <button @click="increment">+</button>
    {{ count }}
    <button @click="decrement">-</button>
    <div>
      <input type="text" v-model="counterTitle" />
    </div>
  </div>
</template>
