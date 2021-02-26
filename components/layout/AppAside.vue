<template>
    <div class="w-1/4 min-h-full bg-gray-700">
      <h1 class ="text-lg uppercase text-gray-200 font-semibold text-center my-4"><slot name="header"></slot></h1>
      <h2 class="uppercase text-gray-300 text-center my-4"><slot name="subheader"></slot></h2>
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AppAside"
    }
</script>

<style scoped>

</style>
