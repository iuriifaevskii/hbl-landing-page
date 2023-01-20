<script lang="ts">
import { defineComponent } from "vue";

import CheckBox from "../components/checkbox/checkbox.vue";
import { NuxtLink } from "#components";

export default defineComponent({
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: false,
      title: "item 1",
    };
  },
  methods: {
    updateChecked(payload: { checked: boolean }) {
      this.checked = payload.checked;
    },
  },
});
</script>

<template>
  <div>
    <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
    <CheckBox
      :isChecked="checked"
      :title="title"
      @updateChecked="updateChecked"
    />
    <div>checked: {{ checked }}</div>
  </div>
</template>
