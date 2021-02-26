<template>
  <button class="rounded text-white py-1 px-2 mx-4" :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PopupButton",
  props: ["type", "mode"],
  methods: {
    clicked() {
      console.log("usao");
    },
  },
};
</script>

<style scoped></style>
