<script setup>
import { reactive } from "vue";

const simpleTitle = "Not reactive title";

const counter = reactive({ count: 0, counterTitle: "My computer reactive" });

const increment = () => {
  counter.count++;
};

const decrement = () => {
  counter.count--;
};
</script>

<template>
  <div>
    <h1>{{ counter.counterTitle }}</h1>
    <h2>{{ simpleTitle }}</h2>
    <button @click="increment">+</button>
    {{ counter.count }}
    <button @click="decrement">-</button>
    <div>
      <input type="text" v-model="counter.counterTitle" />
    </div>
  </div>
</template>
