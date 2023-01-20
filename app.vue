<script lang="ts">
import { defineComponent } from "vue";

import CheckBox from "./components/checkbox/checkbox.vue";

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
    updateChecked(isChecked: boolean) {
      this.checked = isChecked;
    },
  },
});
</script>

<template>
  <div>
    <CheckBox
      :isChecked="checked"
      :title="title"
      @updateChecked="updateChecked"
    />
    <div>checked: {{ checked }}</div>
  </div>
</template>
