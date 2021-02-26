<template>
  <nuxt-link
    :to="href"
    class="border-b-2 border-red-400 text-red-400 text-sm pb-1 hover:shadow-md"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: ["href"],
  name: "InlineLink",
};
</script>

<style scoped></style>
