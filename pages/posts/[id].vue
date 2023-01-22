<script setup lang="ts">
const route = useRoute();
const router = useRouter();
console.log("route id: ", route.params.id);

const goToHome = () => {
  setTimeout(() => {
    router.push("/");
  }, 2000);
};
</script>

<template>
  <div>
    <h1>post {{ $route.params.id }}</h1>
    <button @click="goToHome">go home in 2 sec</button>
  </div>
</template>
