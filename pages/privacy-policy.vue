<script>
import { NuxtLink } from "#components";

export default {
  // page properties go here
};
</script>

<template>
  <NuxtLink to="/">Home</NuxtLink>
  <h1 class="blue">privacy policy {{ name }}!</h1>
</template>

<style>
.blue {
  color: blue;
}
</style>
