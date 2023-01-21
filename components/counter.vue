<script setup lang="ts">
import { reactive, computed, watch } from "vue";

const simpleTitle = "Not reactive title";

const counter = reactive({ count: 0, counterTitle: "My computer reactive" });

watch(
  () => counter.count,
  (newVal, oldVal) => {
    if (newVal === 20) {
      counter.counterTitle = "More than 20!!!";
    } else {
      counter.counterTitle = "My computer reactive";
    }
  }
);

const evenOrEven = computed(() => {
  if (counter.count % 2 === 0) {
    return "even";
  }
  return "odd";
});

const increment = (amount: number, amount2?: number, e?: Event): void => {
  console.log(e);
  console.log(amount2);
  counter.count += amount;
};

const decrement = (amount: number): void => {
  counter.count -= amount;
};
</script>

<template>
  <div>
    <h1>{{ counter.counterTitle }}</h1>
    <h2>{{ simpleTitle }}</h2>
    <button @click="increment(2, 3, $event)">+2</button>
    <button @click="increment(1)">+</button>
    {{ counter.count }}
    <button @click="decrement(1)">-</button>
    <button @click="decrement(2)">-2</button>
    <div>
      <p>enen or odd: {{ evenOrEven }}</p>
    </div>
    <div>
      <input type="text" v-model="counter.counterTitle" />
    </div>
  </div>
</template>
