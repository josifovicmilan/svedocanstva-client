<template>
  <div
    class="fixed w-full h-full top-0 left-0 bg-gray-900 text-white bg-opacity-75 flex justify-center items-center"
  >
    <div
      class="w-1/3 bg-gray-100 shadow-xl border-2 border-gray-600 text-gray-800"
    >
      <h1 class="text-center m-4 text-gray-600">
        <slot name="heading"></slot>
      </h1>

      <form @submit.prevent="submitForm">
        <div class="flex flex-col justify-center m-4">
          <slot name="form"> </slot>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupCard",
  props: ["title"],
  data() {
    return {
      cancel: "bg-red-400 hover:bg-red-500",
    };
  },
  methods: {
    submitForm() {
      this.$emit("formSubmit");
    },
  },
};
</script>

<style lang="scss"></style>
