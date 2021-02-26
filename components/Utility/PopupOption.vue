<template>
  <popup-form-control>
    <select id="option" class="w-full" @change="change" :name="name">
      <option value="" disabled selected>Изабери</option>
      <option :value="option" v-for="option in options">
        {{ option }}
      </option>
    </select>
  </popup-form-control>
</template>

<script>
export default {
  name: "PopupOption",
  props: ["options", "name", "value"],
  methods: {
    change(event) {
      const selected = event.target.value;
      const option = this.options.find((option) => option === selected);
      this.$emit("input", option);
    },
  },
};
</script>

<style scoped></style>
